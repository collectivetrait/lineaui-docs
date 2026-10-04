import hljs from 'highlight.js';

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
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 2h5.5L13 5.5V14H4V2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
          <path d="M9 2v4h4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        </svg>
        <span>{label}</span>
        <span className="code-block__lang">{language}</span>
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
