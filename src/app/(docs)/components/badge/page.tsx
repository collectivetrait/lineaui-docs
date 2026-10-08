import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Badge",
  description: "Small status indicators and counters. Available in solid and secondary variants with optional dot indicator.",
};

export default function BadgePage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Badge</h1>
        <p className="lead text-subtle">
          Small inline status labels. Default style is subtle with a tinted
          background. Variants include <code>--solid</code>, <code>--outline</code>,
          and <code>--count</code>. Add a <code>__dot</code> element for a
          colored status indicator. Accepts role modifiers.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Variants</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<span class="ln-badge ln-badge--primary">Subtle</span>
<span class="ln-badge ln-badge--solid ln-badge--primary">Solid</span>
<span class="ln-badge ln-badge--outline ln-badge--primary">Outline</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <span className="ln-badge ln-badge--primary">Subtle</span>
              <span className="ln-badge ln-badge--solid ln-badge--primary">Solid</span>
              <span className="ln-badge ln-badge--outline ln-badge--primary">Outline</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Roles</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<span class="ln-badge ln-badge--success">Success</span>
<span class="ln-badge ln-badge--warning">Warning</span>
<span class="ln-badge ln-badge--danger">Danger</span>
<span class="ln-badge ln-badge--info">Info</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <span className="ln-badge ln-badge--success">Success</span>
              <span className="ln-badge ln-badge--warning">Warning</span>
              <span className="ln-badge ln-badge--danger">Danger</span>
              <span className="ln-badge ln-badge--info">Info</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Dotted badges</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<span class="ln-badge ln-badge--success"><span class="ln-badge__dot"></span>Online</span>
<span class="ln-badge ln-badge--warning"><span class="ln-badge__dot"></span>Away</span>
<span class="ln-badge ln-badge--danger"><span class="ln-badge__dot"></span>Offline</span>
<span class="ln-badge"><span class="ln-badge__dot"></span>Neutral</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <span className="ln-badge ln-badge--success"><span className="ln-badge__dot"></span>Online</span>
              <span className="ln-badge ln-badge--warning"><span className="ln-badge__dot"></span>Away</span>
              <span className="ln-badge ln-badge--danger"><span className="ln-badge__dot"></span>Offline</span>
              <span className="ln-badge"><span className="ln-badge__dot"></span>Neutral</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Count</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<span class="ln-badge ln-badge--count ln-badge--solid ln-badge--danger">42</span>
<span class="ln-badge ln-badge--count ln-badge--primary">8</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <span className="ln-badge ln-badge--count ln-badge--solid ln-badge--danger">42</span>
              <span className="ln-badge ln-badge--count ln-badge--primary">8</span>
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
              <td><code>.ln-badge</code></td>
              <td>Inline badge</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-badge__dot</code></td>
              <td>Coloured status dot</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-badge__icon</code></td>
              <td>Badge icon</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-badge--solid</code></td>
              <td>Filled background variant</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-badge--outline</code></td>
              <td>Bordered variant</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-badge--sm</code></td>
              <td>Small size</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-badge--pill</code></td>
              <td>Pill-shaped border radius</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-badge--count</code></td>
              <td>Numeric counter variant</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-badge--&#123;role&#125;</code></td>
              <td>Role modifier (primary, secondary, success, warning, danger, info)</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
