import hljs from 'highlight.js';
import { CopyButton } from './CopyButton';

interface CodeBlockProps {
  language: string;
  filename?: string;
  children: string;
}

const DEFAULT_LABELS: Record<string, string> = {
  shell: 'Terminal',
  bash: 'Terminal',
  css: 'styles.css',
  scss: 'styles.scss',
  html: 'index.html',
  tsx: 'component.tsx',
  typescript: 'index.ts',
  javascript: 'index.js',
  json: 'config.json',
};

export function CodeBlock({ language, filename, children }: CodeBlockProps) {
  const code = children.trim();
  const result = hljs.highlight(code, { language, ignoreIllegals: true });
  const label = filename ?? DEFAULT_LABELS[language] ?? language;

  const rawLines = result.value.split('\n');
  const lines = rawLines[rawLines.length - 1] === '' ? rawLines.slice(0, -1) : rawLines;

  const wrappedHtml = lines
    .reduce<{ html: string[]; open: string[] }>((acc, line) => {
      const prefix = acc.open.join('');
      const nextOpen: string[] = [...acc.open];
      const tagRe = /<\/?span[^>]*>/g;
      let m;
      while ((m = tagRe.exec(line)) !== null) {
        if (m[0].startsWith('</')) {
          nextOpen.pop();
        } else {
          nextOpen.push(m[0]);
        }
      }
      const suffix = nextOpen.map(() => '</span>').join('');
      acc.html.push(`<span class="code-block__line">${prefix}${line}${suffix}</span>`);
      acc.open = nextOpen;
      return acc;
    }, { html: [], open: [] })
    .html.join('\n');

  return (
    <div className="code-block">
      <div className="code-block__header">
        <i className="fa-regular fa-file" aria-hidden="true"></i>
        <span>{label}</span>
        <span className="code-block__lang">{language}</span>
        <CopyButton text={code} />
      </div>
      <pre className="code-block__body">
        <code
          className={`hljs language-${language}`}
          dangerouslySetInnerHTML={{ __html: wrappedHtml }}
        />
      </pre>
    </div>
  );
}
