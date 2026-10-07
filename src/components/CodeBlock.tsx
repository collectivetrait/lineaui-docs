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
        <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
          <path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm1 5h4.586l-4.586-4.586v4.586z" />
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
