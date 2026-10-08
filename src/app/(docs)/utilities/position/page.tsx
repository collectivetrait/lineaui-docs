import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Position",
  description: "Utility classes for CSS position property: static, relative, absolute, fixed, and sticky.",
};

export default function PositionUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Position</h1>
        <p className="lead text-subtle">
          Position utilities set the CSS <code>position</code> property.
          Coordinate properties (<code>top</code>, <code>left</code>, etc.)
          are not generated -- supply them with custom properties or a scoped
          style.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Position values</h2>
        <p>
          Available classes: <code>position-static</code>,{" "}
          <code>position-relative</code>, <code>position-absolute</code>,{" "}
          <code>position-fixed</code>, and <code>position-sticky</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="position-relative border rounded-sm p-3 mb-3">
  <p>This container is <code>position-relative</code>.</p>
  <p>Absolutely positioned children are anchored to it.</p>
</div>

<p class="bg-surface-raised rounded-sm p-2">A <span class="position-relative bg-surface-raised rounded-sm px-1">relatively positioned inline span</span> stays in flow.</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="position-relative border rounded-sm p-3 mb-3">
              <p>This container is <code>position-relative</code>.</p>
              <p>Absolutely positioned children are anchored to it.</p>
            </div>
            <p className="bg-surface-raised rounded-sm p-2">A <span className="position-relative bg-surface-raised rounded-sm px-1">relatively positioned inline span</span> stays in flow.</p>
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
            <tr><td><code>.position-static</code></td><td><code>position: static</code></td><td>No</td></tr>
            <tr><td><code>.position-relative</code></td><td><code>position: relative</code></td><td>No</td></tr>
            <tr><td><code>.position-absolute</code></td><td><code>position: absolute</code></td><td>No</td></tr>
            <tr><td><code>.position-fixed</code></td><td><code>position: fixed</code></td><td>No</td></tr>
            <tr><td><code>.position-sticky</code></td><td><code>position: sticky</code></td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
