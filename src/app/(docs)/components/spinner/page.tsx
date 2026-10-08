import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Spinner",
  description: "An animated loading indicator available in multiple sizes for inline and overlay use.",
};

export default function SpinnerPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Spinner</h1>
        <p className="lead text-subtle">
          A CSS-only loading indicator. Defaults to <code>currentColor</code> and
          24px. Three sizes: <code>--sm</code> (16px), <code>--md</code> (24px),
          and <code>--lg</code> (32px). Role modifiers set the spinner color.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Sizes</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<span class="ln-spinner ln-spinner--sm"></span>
<span class="ln-spinner"></span>
<span class="ln-spinner ln-spinner--lg"></span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-3">
              <span className="ln-spinner ln-spinner--sm"></span>
              <span className="ln-spinner"></span>
              <span className="ln-spinner ln-spinner--lg"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Spinner role colors</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<span class="ln-spinner ln-spinner--primary"></span>
<span class="ln-spinner ln-spinner--success"></span>
<span class="ln-spinner ln-spinner--danger"></span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-3">
              <span className="ln-spinner ln-spinner--primary"></span>
              <span className="ln-spinner ln-spinner--success"></span>
              <span className="ln-spinner ln-spinner--danger"></span>
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
            <tr><td><code>.ln-spinner</code></td><td>Spinning loading indicator</td><td>No</td></tr>
            <tr><td><code>.ln-spinner__label</code></td><td>Visually hidden accessible label</td><td>No</td></tr>
            <tr><td><code>.ln-spinner--sm</code></td><td>16px size</td><td>No</td></tr>
            <tr><td><code>.ln-spinner--md</code></td><td>24px size (default)</td><td>No</td></tr>
            <tr><td><code>.ln-spinner--lg</code></td><td>32px size</td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
