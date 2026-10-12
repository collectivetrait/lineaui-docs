import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Shadows",
  description: "Utility classes for box shadows using Linea UI elevation token scale.",
};

export default function ShadowUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Shadows</h1>
        <p className="lead text-subtle">
          Shadow utilities apply elevation levels via <code>box-shadow</code>{" "}
          from design tokens. Use <code>shadow-0</code> to remove shadows and{" "}
          <code>shadow-inset-1</code> through <code>shadow-inset-4</code> for
          inner shadows.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Elevation levels</h2>
        <p>
          Six levels from <code>shadow-0</code> (none) through{" "}
          <code>shadow-4</code> (highest), plus four inset levels.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="d-flex flex-wrap gap-4">
  <div class="bg-surface border rounded-md p-3 shadow-0">shadow-0</div>
  <div class="bg-surface border rounded-md p-3 shadow-1">shadow-1</div>
  <div class="bg-surface border rounded-md p-3 shadow-2">shadow-2</div>
  <div class="bg-surface border rounded-md p-3 shadow-3">shadow-3</div>
  <div class="bg-surface border rounded-md p-3 shadow-4">shadow-4</div>
  <div class="bg-surface border rounded-md p-3 shadow-inset-1">shadow-inset-1</div>
  <div class="bg-surface border rounded-md p-3 shadow-inset-2">shadow-inset-2</div>
  <div class="bg-surface border rounded-md p-3 shadow-inset-3">shadow-inset-3</div>
  <div class="bg-surface border rounded-md p-3 shadow-inset-4">shadow-inset-4</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex flex-wrap gap-4">
              <div className="bg-surface border rounded-md p-3 shadow-0">shadow-0</div>
              <div className="bg-surface border rounded-md p-3 shadow-1">shadow-1</div>
              <div className="bg-surface border rounded-md p-3 shadow-2">shadow-2</div>
              <div className="bg-surface border rounded-md p-3 shadow-3">shadow-3</div>
              <div className="bg-surface border rounded-md p-3 shadow-4">shadow-4</div>
              <div className="bg-surface border rounded-md p-3 shadow-inset-1">shadow-inset-1</div>
              <div className="bg-surface border rounded-md p-3 shadow-inset-2">shadow-inset-2</div>
              <div className="bg-surface border rounded-md p-3 shadow-inset-3">shadow-inset-3</div>
              <div className="bg-surface border rounded-md p-3 shadow-inset-4">shadow-inset-4</div>
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
            <tr><td><code>.shadow-0</code></td><td><code>box-shadow: var(--sh0)</code></td><td>No</td></tr>
            <tr><td><code>.shadow-1</code></td><td><code>box-shadow: var(--sh1)</code></td><td>No</td></tr>
            <tr><td><code>.shadow-2</code></td><td><code>box-shadow: var(--sh2)</code></td><td>No</td></tr>
            <tr><td><code>.shadow-3</code></td><td><code>box-shadow: var(--sh3)</code></td><td>No</td></tr>
            <tr><td><code>.shadow-4</code></td><td><code>box-shadow: var(--sh4)</code></td><td>No</td></tr>
            <tr><td><code>.shadow-inset-1</code></td><td><code>box-shadow: var(--sh-inset-1)</code></td><td>No</td></tr>
            <tr><td><code>.shadow-inset-2</code></td><td><code>box-shadow: var(--sh-inset-2)</code></td><td>No</td></tr>
            <tr><td><code>.shadow-inset-3</code></td><td><code>box-shadow: var(--sh-inset-3)</code></td><td>No</td></tr>
            <tr><td><code>.shadow-inset-4</code></td><td><code>box-shadow: var(--sh-inset-4)</code></td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
