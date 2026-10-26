import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Utility classes for screen-reader-only content and other accessibility helpers.",
};

export default function AccessibilityUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Accessibility</h1>
        <p className="lead text-subtle">
          Utilities for hiding content visually while keeping it accessible to
          screen readers and other assistive technology.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Screen-reader only</h2>
        <p>
          The <code>.sr-only</code> class hides an element visually but keeps it
          in the accessibility tree. Use it for icon-only buttons that need a
          text label, hidden table captions, or any content that should be
          announced but not seen.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--icon">
  <i class="fa-solid fa-trash" aria-hidden="true"></i>
  <span class="sr-only">Delete item</span>
</button>`}</CodeBlock>
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
            <tr><td><code>.sr-only</code></td><td>Visually hidden, accessible to screen readers</td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
