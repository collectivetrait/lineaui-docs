const SCALE = [
  { token: "display-1", fontRole: "prose", sizePx: 80, lhPx: 96, sample: "The quick brown fox" },
  { token: "display-2", fontRole: "prose", sizePx: 56, lhPx: 72, sample: "The quick brown fox" },
  { token: "h1", fontRole: "prose", sizePx: 40, lhPx: 48, sample: "Section heading" },
  { token: "h2", fontRole: "prose", sizePx: 32, lhPx: 48, sample: "Section heading" },
  { token: "h3", fontRole: "prose", sizePx: 20, lhPx: 24, sample: "Section heading" },
  { token: "h4", fontRole: "ui", sizePx: 18, lhPx: 24, sample: "Section heading" },
  { token: "h5", fontRole: "ui", sizePx: 16, lhPx: 24, sample: "Section heading" },
  { token: "h6", fontRole: "mono", sizePx: 12, lhPx: 16, sample: "SECTION LABEL" },
  { token: "lead", fontRole: "prose", sizePx: 18, lhPx: 24, sample: "The five boxing wizards jump quickly." },
  { token: "body-prose", fontRole: "prose", sizePx: 16, lhPx: 24, sample: "The five boxing wizards jump quickly." },
  { token: "body-lg", fontRole: "ui", sizePx: 18, lhPx: 24, sample: "The five boxing wizards jump quickly." },
  { token: "body", fontRole: "ui", sizePx: 16, lhPx: 24, sample: "The five boxing wizards jump quickly." },
  { token: "body-sm", fontRole: "ui", sizePx: 14, lhPx: 20, sample: "The five boxing wizards jump quickly." },
  { token: "body-xs", fontRole: "ui", sizePx: 12, lhPx: 16, sample: "The five boxing wizards jump quickly." },
  { token: "meta", fontRole: "ui", sizePx: 12, lhPx: 16, sample: "SKU: 123456-A" },
  { token: "code", fontRole: "mono", sizePx: 14, lhPx: 24, sample: "const x = fn(42);" },
] as const;

export function TypeScaleTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Token</th>
          <th>Font</th>
          <th>Size</th>
          <th>Line height</th>
          <th>Sample</th>
        </tr>
      </thead>
      <tbody>
        {SCALE.map(({ token, fontRole, sizePx, lhPx, sample }) => (
          <tr key={token}>
            <td>
              <code>--type-{token}</code>
            </td>
            <td>{fontRole}</td>
            <td>{sizePx}px</td>
            <td>{lhPx}px</td>
            <td>
              <span
                className="type-sample"
                data-font={fontRole}
                data-token={token}
              >
                {sample}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
