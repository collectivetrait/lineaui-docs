import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Page Header",
  description: "A structured header block with title, subtitle, breadcrumb, and action slots for top-of-page content.",
};

export default function PageHeaderPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Page header</h1>
        <p className="lead text-subtle">
          A page-level title block with slots for breadcrumb, eyebrow, title,
          lead text, metadata, and actions. The <code>--hero</code> modifier
          uses display sizes; <code>--compact</code> produces a minimal
          dashboard header.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Standard page header</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-page-header ln-page-header--bordered">
  <span class="ln-page-header__eyebrow">Documentation</span>
  <h1 class="ln-page-header__title">Getting Started</h1>
  <p class="ln-page-header__lead">Install ln via npm, import the compiled
     CSS, and add the JS bundle to your page.</p>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-page-header ln-page-header--bordered">
              <span className="ln-page-header__eyebrow">Documentation</span>
              <h1 className="ln-page-header__title">Getting Started</h1>
              <p className="ln-page-header__lead">Install ln via npm, import the compiled
                 CSS, and add the JS bundle to your page.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Compact variant</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-page-header ln-page-header--compact">
  <h1 class="ln-page-header__title">Dashboard</h1>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-page-header ln-page-header--compact">
              <h1 className="ln-page-header__title">Dashboard</h1>
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
              <td><code>.ln-page-header</code></td>
              <td>Page header container with bottom margin</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-page-header__breadcrumb</code></td>
              <td>Breadcrumb slot above the title</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-page-header__eyebrow</code></td>
              <td>Uppercase label above the title</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-page-header__title</code></td>
              <td>Page heading (h1 scale)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-page-header__lead</code></td>
              <td>Subtitle or lead paragraph</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-page-header__meta</code></td>
              <td>Metadata row below the title</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-page-header__actions</code></td>
              <td>Action button row</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-page-header__tabs</code></td>
              <td>Tab bar below the header</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-page-header--hero</code></td>
              <td>Larger display title with extra bottom margin</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-page-header--compact</code></td>
              <td>Smaller title with reduced margin</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-page-header--center</code></td>
              <td>Centre-aligned content</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-page-header--bordered</code></td>
              <td>Bottom border separator</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
