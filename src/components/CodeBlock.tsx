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

  let openSpans: string[] = [];
  const wrappedHtml = lines
    .map(line => {
      const prefix = openSpans.join('');

      const nextOpen: string[] = [...openSpans];
      const tagRe = /<\/?span[^>]*>/g;
      let m;
      while ((m = tagRe.exec(line)) !== null) {
        if (m[0].startsWith('</')) {
          nextOpen.pop();
        } else {
          nextOpen.push(m[0]);
        }
      }
      openSpans = nextOpen;

      const suffix = openSpans.map(() => '</span>').join('');
      return `<span class="code-block__line">${prefix}${line}${suffix}</span>`;
    })
    .join('\n');

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
