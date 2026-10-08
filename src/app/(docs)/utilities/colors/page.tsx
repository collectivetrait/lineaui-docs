import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Colors",
  description: "Utility classes for text color using linea-ui semantic color tokens.",
};

export default function ColorUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Colors</h1>
        <p className="lead text-subtle">
          Text color utilities map to semantic role tokens. Use them to apply
          role-based colour without writing custom CSS.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Text colors</h2>
        <p>
          Each class sets the <code>color</code> property to a role token.
          Use <code>text-inverse</code> on dark backgrounds for contrast.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<p class="text-primary border rounded-sm p-2 mb-3">text-primary</p>
<p class="text-secondary border rounded-sm p-2 mb-3">text-secondary</p>
<p class="text-success border rounded-sm p-2 mb-3">text-success</p>
<p class="text-warning border rounded-sm p-2 mb-3">text-warning</p>
<p class="text-danger border rounded-sm p-2 mb-3">text-danger</p>
<p class="text-info border rounded-sm p-2 mb-3">text-info</p>
<p class="text-muted border rounded-sm p-2 mb-3">text-muted</p>
<p class="text-subtle border rounded-sm p-2 mb-3">text-subtle</p>
<p class="text-inverse bg-surface-inverse border rounded-sm p-2">text-inverse</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="text-primary border rounded-sm p-2 mb-3">text-primary</p>
            <p className="text-secondary border rounded-sm p-2 mb-3">text-secondary</p>
            <p className="text-success border rounded-sm p-2 mb-3">text-success</p>
            <p className="text-warning border rounded-sm p-2 mb-3">text-warning</p>
            <p className="text-danger border rounded-sm p-2 mb-3">text-danger</p>
            <p className="text-info border rounded-sm p-2 mb-3">text-info</p>
            <p className="text-muted border rounded-sm p-2 mb-3">text-muted</p>
            <p className="text-subtle border rounded-sm p-2 mb-3">text-subtle</p>
            <p className="text-inverse bg-surface-inverse border rounded-sm p-2">text-inverse</p>
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
            <tr><td><code>.text-primary</code></td><td><code>color: var(--primary-text)</code></td><td>No</td></tr>
            <tr><td><code>.text-secondary</code></td><td><code>color: var(--secondary-text)</code></td><td>No</td></tr>
            <tr><td><code>.text-success</code></td><td><code>color: var(--success-text)</code></td><td>No</td></tr>
            <tr><td><code>.text-warning</code></td><td><code>color: var(--warning-text)</code></td><td>No</td></tr>
            <tr><td><code>.text-danger</code></td><td><code>color: var(--danger-text)</code></td><td>No</td></tr>
            <tr><td><code>.text-info</code></td><td><code>color: var(--info-text)</code></td><td>No</td></tr>
            <tr><td><code>.text-muted</code></td><td><code>color: var(--c-muted)</code></td><td>No</td></tr>
            <tr><td><code>.text-subtle</code></td><td><code>color: var(--c-subtle)</code></td><td>No</td></tr>
            <tr><td><code>.text-inverse</code></td><td><code>color: var(--c-inverse)</code></td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
