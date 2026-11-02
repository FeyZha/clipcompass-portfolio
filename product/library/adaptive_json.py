"""Adaptive-only deterministic JSON recovery; never retries or changes provider calls.

The ordinary provider boundary and chapter baseline are deliberately unchanged. Raw
text must be retained by the caller. Recovery recognizes a few exact serialization
forms and validates their complete stage shape; it never searches arbitrary braces.
"""
import copy
import json
import re
from dataclasses import dataclass

from llm import provider
from llm.provider import GenerationResult, LLMError


@dataclass(frozen=True)
class AdaptiveGenerationResult(GenerationResult):
    parsing_diagnostics: tuple = ()


def _unique_object(pairs):
    result = {}
    for key, value in pairs:
        if key in result:
            raise LLMError('模型 JSON 含重复字段，不能可靠恢复。')
        result[key] = value
    return result


def _decoder():
    return json.JSONDecoder(object_pairs_hook=_unique_object)


def _complete_shape(value, schema):
    """Check complete fields/types, leaving item ranges and claims to finalize.

    No strings, missing fields, evidence, array entries or default values are supplied
    here. Semantic enums, lengths, ranges and source associations keep their existing
    per-stage validators, so an unrelated bad citation can still be removed locally.
    """
    kind = schema.get('type')
    if kind == 'object':
        if type(value) is not dict or set(value) != set(schema['properties']):
            raise LLMError('恢复的 JSON 对象字段不完整或含未知字段。')
        for key, child in schema['properties'].items():
            _complete_shape(value[key], child)
    elif kind == 'array':
        if type(value) is not list:
            raise LLMError('恢复的 JSON 数组格式不完整。')
        for row in value:
            _complete_shape(row, schema['items'])
    elif kind == 'string' and type(value) is not str:
        raise LLMError('恢复的 JSON 文本字段不完整。')
    elif kind == 'integer' and type(value) is not int:
        raise LLMError('恢复的 JSON 编号字段不完整。')
    elif kind == 'boolean' and type(value) is not bool:
        raise LLMError('恢复的 JSON 布尔字段不完整。')
    elif 'enum' in schema and not isinstance(value, (str, int, bool)):
        raise LLMError('恢复的 JSON 枚举值不是实际值。')


def _same_json(left, right):
    return json.dumps(left, sort_keys=True, separators=(',', ':')) == json.dumps(right, sort_keys=True, separators=(',', ':'))


def _single_missing_root_close(text):
    """Only a missing final outer } is repairable; strings/inner containers are not."""
    if not text.startswith('{'):
        return False
    stack, in_string, escaped = [], False, False
    for char in text:
        if in_string:
            if escaped:
                escaped = False
            elif char == '\\':
                escaped = True
            elif char == '"':
                in_string = False
        elif char == '"':
            in_string = True
        elif char in '{[':
            stack.append(char)
        elif char in '}]':
            if not stack or stack[-1] != ('{' if char == '}' else '['):
                return False
            stack.pop()
            if not stack:
                # More than one complete top-level object is never one missing root.
                return False
    return not in_string and not escaped and stack == ['{'] and text.endswith(('}', ']'))


def parse_adaptive_json(text, schema):
    """Return (actual_value, recovery_diagnostics) for this exact stage schema.

    Normal complete JSON retains existing normalizer/finalizer behavior. Nonstandard
    forms must resolve to ONE complete actual stage object: an exact echoed schema
    prefix (optionally its observed duplicated additionalProperties tail), one missing
    outer root close, the exact actual-value envelope, or report.assessments misnesting.
    """
    if type(text) is not str or not text.strip():
        raise LLMError('模型未返回可解析的 JSON 文本。')
    text = text.strip()
    decoder, diagnostics, repaired = _decoder(), [], False
    try:
        value = decoder.decode(text)
    except json.JSONDecodeError:
        candidate = text
        try:
            prefix, offset = decoder.raw_decode(text)
        except json.JSONDecodeError:
            prefix = None
        if prefix is not None:
            if not _same_json(prefix, schema):
                raise LLMError('JSON 前缀不是本阶段精确结构，不能提取后续对象。')
            candidate = text[offset:].lstrip()
            tail = re.match(r'^,\s*"additionalProperties"\s*:\s*false\s*}\s*', candidate)
            if tail:
                candidate = candidate[tail.end():]
                diagnostics.append({'code': 'duplicated_schema_tail_removed'})
            diagnostics.append({'code': 'exact_schema_prefix_removed'})
            repaired = True
        try:
            value = decoder.decode(candidate)
        except json.JSONDecodeError as exc:
            if not _single_missing_root_close(candidate):
                raise LLMError('JSON 不完整或包含多个对象，不能可靠恢复。') from exc
            try:
                value = decoder.decode(candidate + '}')
            except json.JSONDecodeError as final_exc:
                raise LLMError('JSON 缺少的不只是外层结束符，不能可靠恢复。') from final_exc
            diagnostics.append({'code': 'single_outer_root_close_restored'})
            repaired = True
    if type(value) is not dict:
        raise LLMError('模型 JSON 结果必须是对象。')
    if set(value) == {'type', 'properties'} and value['type'] == 'json_object':
        value = copy.deepcopy(value['properties'])
        if type(value) is not dict:
            raise LLMError('实际值包装内不是完整对象。')
        diagnostics.append({'code': 'exact_actual_value_envelope_unwrapped'})
        repaired = True
    if 'assessments' in schema.get('properties', {}) and isinstance(value.get('report'), dict) and 'assessments' in value['report']:
        if 'assessments' in value or set(value) != {'items', 'coverage', 'report'} or set(value['report']) != {'sections', 'assessments'}:
            raise LLMError('证据分级存在重复或冲突位置，不能恢复。')
        value = copy.deepcopy(value)
        value['assessments'] = value['report'].pop('assessments')
        diagnostics.append({'code': 'exact_report_assessments_relocated'})
        repaired = True
    if repaired:
        # Spelling repair is only for shape checking; normalize_plan retains its
        # existing explicit alias diagnostic and original-request checks.
        shape_value = copy.deepcopy(value)
        if ('task_type' in schema.get('properties', {}) and 'type' in shape_value and
                'task_type' not in shape_value and shape_value['type'] in schema['properties']['task_type']['enum']):
            shape_value['task_type'] = shape_value.pop('type')
        _complete_shape(shape_value, schema)
    return value, diagnostics


def decode_result(raw, schema):
    value, diagnostics = parse_adaptive_json(raw.value, schema)
    fields = {name: getattr(raw, name) for name in ['model', 'input_tokens', 'output_tokens', 'cached_input_tokens', 'latency_ms', 'error']}
    return AdaptiveGenerationResult(value=value, **fields, parsing_diagnostics=tuple(diagnostics))


def generate_adaptive_json(system_prompt, user_prompt, *, schema, temperature=0.0, max_tokens=512):
    instruction = '\nReturn one JSON object matching this schema exactly:\n' + json.dumps(schema, ensure_ascii=False, separators=(',', ':'))
    raw = provider._provider().generate(system_prompt + instruction, user_prompt, json_output=True,
                                        temperature=temperature, max_tokens=max_tokens)
    return decode_result(raw, schema)
