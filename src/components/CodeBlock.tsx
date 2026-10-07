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
        <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
          <path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
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
