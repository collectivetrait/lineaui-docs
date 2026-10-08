import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { DismissInit } from "@/components/DismissInit";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Alert",
  description: "Contextual feedback messages with icon, title, and body slots. Supports success, warning, danger, and info variants.",
};

export default function AlertPage() {
  return (
    <article>
      <DismissInit />
      <section className="docs-section">
        <h1 className="text-display-2">Alert</h1>
        <p className="lead text-subtle">
          Contextual message banners with icon, content, and optional dismiss button.
          Style variants: <code>--subtle</code> (default), <code>--accent</code>,
          <code>--solid</code>, <code>--outline</code>. Accepts role modifiers for
          info, success, warning, and danger.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Roles</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-alert ln-alert--info">
  <div class="ln-alert__content">
    <div class="ln-alert__title">Information</div>
    <div class="ln-alert__body">This is an informational message.</div>
  </div>
</div>
<div class="ln-alert ln-alert--success">
  <div class="ln-alert__content">
    <div class="ln-alert__title">Success</div>
    <div class="ln-alert__body">Your changes have been saved.</div>
  </div>
</div>
<div class="ln-alert ln-alert--warning">
  <div class="ln-alert__content">
    <div class="ln-alert__title">Warning</div>
    <div class="ln-alert__body">Please review before proceeding.</div>
  </div>
</div>
<div class="ln-alert ln-alert--danger">
  <div class="ln-alert__content">
    <div class="ln-alert__title">Error</div>
    <div class="ln-alert__body">Something went wrong. Please try again.</div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex flex-column gap-2">
              <div className="ln-alert ln-alert--info">
                <div className="ln-alert__content">
                  <div className="ln-alert__title">Information</div>
                  <div className="ln-alert__body">This is an informational message.</div>
                </div>
              </div>
              <div className="ln-alert ln-alert--success">
                <div className="ln-alert__content">
                  <div className="ln-alert__title">Success</div>
                  <div className="ln-alert__body">Your changes have been saved.</div>
                </div>
              </div>
              <div className="ln-alert ln-alert--warning">
                <div className="ln-alert__content">
                  <div className="ln-alert__title">Warning</div>
                  <div className="ln-alert__body">Please review before proceeding.</div>
                </div>
              </div>
              <div className="ln-alert ln-alert--danger">
                <div className="ln-alert__content">
                  <div className="ln-alert__title">Error</div>
                  <div className="ln-alert__body">Something went wrong. Please try again.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Accent variant</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-alert ln-alert--accent ln-alert--info">
  <div class="ln-alert__content">
    <div class="ln-alert__title">Tip</div>
    <div class="ln-alert__body">The accent variant adds a colored left border.</div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-alert ln-alert--accent ln-alert--info">
              <div className="ln-alert__content">
                <div className="ln-alert__title">Tip</div>
                <div className="ln-alert__body">The accent variant adds a colored left border.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Dismissible</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-alert ln-alert--success" data-ln-dismissible>
  <div class="ln-alert__content">
    <div class="ln-alert__title">Saved</div>
    <div class="ln-alert__body">Your profile has been updated.</div>
  </div>
  <button class="ln-alert__dismiss" data-ln-dismiss aria-label="Dismiss">&times;</button>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-alert ln-alert--success" data-ln-dismissible>
              <div className="ln-alert__content">
                <div className="ln-alert__title">Saved</div>
                <div className="ln-alert__body">Your profile has been updated.</div>
              </div>
              <button className="ln-alert__dismiss" data-ln-dismiss aria-label="Dismiss">&times;</button>
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
              <td><code>.ln-alert</code></td>
              <td>Alert container</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-alert__icon</code></td>
              <td>Leading icon</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-alert__content</code></td>
              <td>Content wrapper</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-alert__title</code></td>
              <td>Alert heading</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-alert__body</code></td>
              <td>Alert body text</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-alert__actions</code></td>
              <td>Action buttons container</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-alert__dismiss</code></td>
              <td>Dismiss button</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-alert--solid</code></td>
              <td>Filled background variant</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-alert--accent</code></td>
              <td>Left border accent variant</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-alert--banner</code></td>
              <td>Full-width banner variant</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-alert--compact</code></td>
              <td>Reduced padding</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-alert--&#123;role&#125;</code></td>
              <td>Role modifier (primary, secondary, success, warning, danger, info)</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
