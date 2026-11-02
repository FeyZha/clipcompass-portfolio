"""Source-bound prose that embeds video links as part of the explanation."""
import copy
import hashlib
import json
from pathlib import Path
import re

QUALITY_BAR = '''上下文的生成与审核都以基本可理解、能进入原片为标准，只处理明显不符合的内容，不追求每句话都完美。
可接受：背景与问题相关、有原文依据，读者能理解原片主要内容，即使有少量视频导览语、与标题部分重合、简短概括或过渡不够精致，也应保留。片段开头出现“第二”“所以”“这一点”等词本身不是缺陷；结合前置文字和片段内容仍能理解时，不必补齐所有前文。
明显不符合：开场为空或只有标题改写、视频预告而没有实际背景；背景主要与问题无关；事实、因果或链接归属没有原文支持或错误；缺少关键概念、对象、条件以致读者无法理解原片主要内容；前置文字或链接已把核心方法和步骤讲完，主要充当答案摘要。少量结论提示不等于完整答案。
只处理存在上述实质问题的题目，其余可用内容保留，不因措辞偏好、可选背景或局部衔接瑕疵要求整题或整批重做。'''

RULES = '''为每题生成 narrative。opening 必须是一小段与本题直接相关的前置上下文，不能留空或只剩标题与视频链接。从字幕补充具体处境、材料、必要概念或使用条件，让没看前文的人能理解原片主要内容；只选本题需要的信息，不必把这些类别全部写一遍。具体讲解、方法和例子主要由原片承载。
优先补充标题尚未交代的背景，不用无关框架或单纯视频预告充数，也不要把核心方法和步骤提前讲完。背景须由本题所选字幕支持；不能为了填满开场虚构事实。没有有依据的相关背景时，改选有完整依据的问题与范围。
多片段之间按理解需要补充衔接，可以简短承接前段意思，不必机械补齐每个过渡；不虚构条件变化或实验动机。closing 默认留空，确有必要的条件才补充。
narrative 格式：{"opening":"与本题相关、有实际背景的简短前置文字，必须填写", "steps":[{"before":"必要的连接文字，可为空", "link_text":"简短、具体的文中视频链接", "range_index":0, "after":"必要的句子余下部分，可为空"}], "closing":"必要条件，无则空字符串"}。
steps 按时间顺序覆盖本题每个原片范围恰好一次，range_index 从0开始。链接内容必须由对应范围支持，文字只可使用本题所选范围；不可臆造画面、因果或外部例子。不使用“点击这里、观看视频、第一段”等无内容标签。before+link_text+after 应通顺，允许直接用描述性文字链接承接视频。不能用与本题无关的知识充当上下文。''' + '\n' + QUALITY_BAR


def fingerprint(value):
    return hashlib.sha256(json.dumps(value,ensure_ascii=False,sort_keys=True,separators=(',',':')).encode()).hexdigest()


def validate_narrative(value, range_count):
    if not isinstance(value,dict) or set(value)!={'opening','steps','closing'}:
        raise ValueError('Invalid narrative fields')
    for key in ('opening','closing'):
        if not isinstance(value[key],str) or len(value[key])>1500:
            raise ValueError('Invalid narrative text')
    rows=value['steps']
    if not isinstance(rows,list) or len(rows)!=range_count:
        raise ValueError('Narrative must include each source range')
    for i,row in enumerate(rows):
        if not isinstance(row,dict) or set(row)!={'before','link_text','range_index','after'}:
            raise ValueError('Invalid narrative step')
        if type(row['range_index']) is not int or row['range_index']!=i:
            raise ValueError('Narrative source order mismatch')
        for key in ('before','link_text','after'):
            if not isinstance(row[key],str) or len(row[key])>1000 or (key=='link_text' and not row[key].strip()):
                raise ValueError('Invalid narrative link text')
    return copy.deepcopy(value)


def load_presentation(folder, attempt, saved):
    """Read an explicitly published derivative; never generate or rewrite originals."""
    path=Path(folder)/'narrative-current.json'
    if not path.exists():return None
    pointer=json.loads(path.read_text(encoding='utf8'))
    version=pointer.get('version')
    if not isinstance(version,str) or not re.fullmatch('[a-f0-9]{32}',version):
        raise ValueError('Invalid narrative version')
    data=json.loads((Path(folder)/'narratives'/version/'presentation.json').read_text(encoding='utf8'))
    if data.get('source_attempt')!=attempt:return None
    if data.get('bundle_fingerprint')!=fingerprint(saved):
        raise ValueError('Narrative does not match saved content')
    if not isinstance(data.get('questions'),list) or len(data['questions'])!=len(saved['questions']):
        raise ValueError('Narrative question count mismatch')
    result=[]
    for i,(row,q) in enumerate(zip(data['questions'],saved['questions'])):
        if q['ranges']!=sorted(q['ranges'],key=lambda r:(r['start_cue'],r['end_cue'])):
            raise ValueError('Narrative cannot attach to reordered legacy ranges')
        if not isinstance(row,dict) or type(row.get('question_index')) is not int or row['question_index']!=i:raise ValueError('Narrative question identity mismatch')
        edited={'narrative':validate_narrative(row['narrative'],len(q['ranges']))}
        if 'question' in row:
            title=row['question']
            if not isinstance(title,str) or not title.strip() or len(title)>12000:
                raise ValueError('Invalid presentation question')
            edited['question']=title
        result.append(edited)
    return result
