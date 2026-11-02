import katex from 'katex';
import texmath from 'markdown-it-texmath';
import { Schema } from 'prosemirror-model';
import { MarkdownParser } from 'prosemirror-markdown';
import { getParser } from './vendor/anarlog/markdown/parser';
import { markdownSchema } from './vendor/anarlog/markdown/schema';
import 'katex/dist/katex.min.css';

// Extend the existing Anarlog parser instead of letting Markdown consume the
// backslashes in \(...\) and \[...\]. No stored summary text is rewritten.
export const summaryMathSchema = new Schema({
  nodes: markdownSchema.spec.nodes.addBefore('text', 'mathInline', {
    inline: true, group: 'inline', atom: true,
    attrs: { tex: { default: '' }, display: { default: false } },
    toDOM: node => ['span', { class: 'cc-summary-math', 'data-tex': node.attrs.tex, 'data-display': String(node.attrs.display) }],
  }).addBefore('paragraph', 'mathBlock', {
    group: 'block', atom: true, attrs: { tex: { default: '' } },
    toDOM: node => ['div', { class: 'cc-summary-math cc-math-block', 'data-tex': node.attrs.tex, 'data-display': 'true' }],
  }),
  marks: markdownSchema.spec.marks,
});
let parser: MarkdownParser | undefined;
export function getSummaryParser(): MarkdownParser {
  if (parser) return parser;
  const base = getParser();
  base.tokenizer.use(texmath, { engine: katex, delimiters: ['brackets', 'dollars'] });
  parser = new MarkdownParser(summaryMathSchema, base.tokenizer, {
    ...base.tokens,
    math_inline: { node: 'mathInline', getAttrs: token => ({ tex: token.content, display: false }) },
    math_inline_double: { node: 'mathInline', getAttrs: token => ({ tex: token.content, display: true }) },
    math_block: { node: 'mathBlock', getAttrs: token => ({ tex: token.content }) },
    math_block_eqno: { node: 'mathBlock', getAttrs: token => ({ tex: `${token.content}\\tag{${token.info}}` }) },
  });
  return parser;
}

export function renderSummaryMath(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('.cc-summary-math').forEach(element => {
    katex.render(element.dataset.tex || '', element, {
      displayMode: element.dataset.display === 'true',
      throwOnError: false, trust: false, strict: 'ignore', maxExpand: 1000, maxSize: 10,
    });
  });
}
