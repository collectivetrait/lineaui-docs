import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function ProgressPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Progress</h1>
        <p className="lead text-subtle">
          A horizontal progress bar driven by the <code>--progress</code> custom
          property. Supports determinate and indeterminate states, with role
          modifiers to color the bar.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Determinate</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-progress">
  <div class="ln-progress__header">
    <span class="ln-progress__label">Uploading</span>
    <span class="ln-progress__value">65%</span>
  </div>
  <div class="ln-progress__track">
    <div class="ln-progress__bar" style="--progress: 65%"></div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-progress">
              <div className="ln-progress__header">
                <span className="ln-progress__label">Uploading</span>
                <span className="ln-progress__value">65%</span>
              </div>
              <div className="ln-progress__track">
                <div className="ln-progress__bar" style={{ "--progress": "65%" } as React.CSSProperties}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Indeterminate</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-progress ln-progress--indeterminate ln-progress--success">
  <div class="ln-progress__track">
    <div class="ln-progress__bar"></div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-progress ln-progress--indeterminate ln-progress--success">
              <div className="ln-progress__track">
                <div className="ln-progress__bar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Progress role colors</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-progress ln-progress--success" style="margin-bottom: 8px">
  <div class="ln-progress__track">
    <div class="ln-progress__bar" style="--progress: 80%"></div>
  </div>
</div>
<div class="ln-progress ln-progress--warning" style="margin-bottom: 8px">
  <div class="ln-progress__track">
    <div class="ln-progress__bar" style="--progress: 50%"></div>
  </div>
</div>
<div class="ln-progress ln-progress--danger">
  <div class="ln-progress__track">
    <div class="ln-progress__bar" style="--progress: 25%"></div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-progress ln-progress--success" style={{ marginBottom: "8px" }}>
              <div className="ln-progress__track">
                <div className="ln-progress__bar" style={{ "--progress": "80%" } as React.CSSProperties}></div>
              </div>
            </div>
            <div className="ln-progress ln-progress--warning" style={{ marginBottom: "8px" }}>
              <div className="ln-progress__track">
                <div className="ln-progress__bar" style={{ "--progress": "50%" } as React.CSSProperties}></div>
              </div>
            </div>
            <div className="ln-progress ln-progress--danger">
              <div className="ln-progress__track">
                <div className="ln-progress__bar" style={{ "--progress": "25%" } as React.CSSProperties}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>.ln-progress</code></td><td>Progress bar container</td><td>No</td></tr>
            <tr><td><code>.ln-progress__header</code></td><td>Label and value row</td><td>No</td></tr>
            <tr><td><code>.ln-progress__label</code></td><td>Progress label text</td><td>No</td></tr>
            <tr><td><code>.ln-progress__value</code></td><td>Percentage or fraction text</td><td>No</td></tr>
            <tr><td><code>.ln-progress__track</code></td><td>Background track</td><td>No</td></tr>
            <tr><td><code>.ln-progress__bar</code></td><td>Filled bar (set width via <code>--progress</code>)</td><td>No</td></tr>
            <tr><td><code>.ln-progress--xs</code></td><td>4px track height</td><td>No</td></tr>
            <tr><td><code>.ln-progress--sm</code></td><td>8px track height</td><td>No</td></tr>
            <tr><td><code>.ln-progress--md</code></td><td>16px track height</td><td>No</td></tr>
            <tr><td><code>.ln-progress--indeterminate</code></td><td>Animated indeterminate state</td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
