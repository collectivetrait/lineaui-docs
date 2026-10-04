import { CodeBlock } from "@/components/CodeBlock";
import { DismissInit } from "@/components/DismissInit";
import { TableOfContents } from "@/components/TableOfContents";

export default function TagPage() {
  return (
    <article>
      <DismissInit />
      <section className="docs-section">
        <h1 className="text-display-2">Tag</h1>
        <p className="lead text-subtle">
          Interactive labels for categories, filters, and selections. Includes a
          removable variant with <code>__remove</code> button, and a selectable
          toggle variant with <code>--selectable</code> and <code>aria-pressed</code>.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Default and outline</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<span class="ln-tag ln-tag--primary">Default</span>
<span class="ln-tag ln-tag--outline ln-tag--primary">Outline</span>
<span class="ln-tag ln-tag--success">Success</span>
<span class="ln-tag ln-tag--danger">Danger</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <span className="ln-tag ln-tag--primary">Default</span>
              <span className="ln-tag ln-tag--outline ln-tag--primary">Outline</span>
              <span className="ln-tag ln-tag--success">Success</span>
              <span className="ln-tag ln-tag--danger">Danger</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Removable tag</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<span class="ln-tag ln-tag--primary" data-ln-dismissible>
  React
  <button class="ln-tag__remove" data-ln-dismiss aria-label="Remove">&times;</button>
</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <span className="ln-tag ln-tag--primary" data-ln-dismissible>
                React
                <button className="ln-tag__remove" data-ln-dismiss aria-label="Remove">&times;</button>
              </span>
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
            <tr><td><code>.ln-tag</code></td><td>Inline tag / chip</td><td>No</td></tr>
            <tr><td><code>.ln-tag__icon</code></td><td>Leading icon</td><td>No</td></tr>
            <tr><td><code>.ln-tag__label</code></td><td>Tag label text</td><td>No</td></tr>
            <tr><td><code>.ln-tag__remove</code></td><td>Dismiss / remove button</td><td>No</td></tr>
            <tr><td><code>.ln-tag--selectable</code></td><td>Toggle-selectable tag</td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
