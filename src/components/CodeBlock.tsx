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
    .map(line => `<span class="code-block__line">${line}</span>`)
    .join('\n');

  return (
    <div className="code-block">
      <div className="code-block__header">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
          <path d="M9 9l1 0" />
          <path d="M9 13l6 0" />
          <path d="M9 17l6 0" />
        </svg>
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
