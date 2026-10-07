import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function OpacityUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Opacity</h1>
        <p className="lead text-subtle">
          Opacity utilities control the transparency of an element and all of
          its children.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Opacity values</h2>
        <p>
          Five levels are available: <code>opacity-0</code> (invisible),{" "}
          <code>opacity-25</code>, <code>opacity-50</code>,{" "}
          <code>opacity-75</code>, and <code>opacity-100</code> (fully opaque).
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="d-flex gap-3">
  <span class="bg-surface-raised rounded-sm p-2 opacity-100">opacity-100</span>
  <span class="bg-surface-raised rounded-sm p-2 opacity-75">opacity-75</span>
  <span class="bg-surface-raised rounded-sm p-2 opacity-50">opacity-50</span>
  <span class="bg-surface-raised rounded-sm p-2 opacity-25">opacity-25</span>
  <span class="bg-surface-raised rounded-sm p-2 opacity-0">opacity-0</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex gap-3">
              <span className="bg-surface-raised rounded-sm p-2 opacity-100">opacity-100</span>
              <span className="bg-surface-raised rounded-sm p-2 opacity-75">opacity-75</span>
              <span className="bg-surface-raised rounded-sm p-2 opacity-50">opacity-50</span>
              <span className="bg-surface-raised rounded-sm p-2 opacity-25">opacity-25</span>
              <span className="bg-surface-raised rounded-sm p-2 opacity-0">opacity-0</span>
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
              <th>Property</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>.opacity-0</code></td><td><code>opacity: 0</code></td><td>No</td></tr>
            <tr><td><code>.opacity-25</code></td><td><code>opacity: 0.25</code></td><td>No</td></tr>
            <tr><td><code>.opacity-50</code></td><td><code>opacity: 0.5</code></td><td>No</td></tr>
            <tr><td><code>.opacity-75</code></td><td><code>opacity: 0.75</code></td><td>No</td></tr>
            <tr><td><code>.opacity-100</code></td><td><code>opacity: 1</code></td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
