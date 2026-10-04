import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function MetaPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Meta</h1>
        <p className="lead text-subtle">
          An inline row of metadata items separated by dots. Uses the UI font
          at small size with muted color. Common for article bylines, product
          details, and timestamps.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Default</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-meta">
  <span class="ln-meta__item">Essay</span>
  <span class="ln-meta__separator"></span>
  <span class="ln-meta__item">Sep 2026</span>
  <span class="ln-meta__separator"></span>
  <span class="ln-meta__item">6 min read</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-meta">
              <span className="ln-meta__item">Essay</span>
              <span className="ln-meta__separator"></span>
              <span className="ln-meta__item">Sep 2026</span>
              <span className="ln-meta__separator"></span>
              <span className="ln-meta__item">6 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Small size</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-meta ln-meta--sm">
  <span class="ln-meta__item">SKU-4821</span>
  <span class="ln-meta__separator"></span>
  <span class="ln-meta__item">In Stock</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-meta ln-meta--sm">
              <span className="ln-meta__item">SKU-4821</span>
              <span className="ln-meta__separator"></span>
              <span className="ln-meta__item">In Stock</span>
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
            <tr>
              <td><code>.ln-meta</code></td>
              <td>Inline metadata row (mono font, muted)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-meta__item</code></td>
              <td>Individual metadata value</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-meta__icon</code></td>
              <td>Icon within a meta item</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-meta__link</code></td>
              <td>Clickable meta item</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-meta__separator</code></td>
              <td>Middle-dot divider between items</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-meta--sm</code></td>
              <td>Smaller text size</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-meta--stacked</code></td>
              <td>Vertical column layout</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
