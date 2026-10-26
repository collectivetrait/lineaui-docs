import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Spacing",
  description: "Utility classes for margin and padding using Linea UI spacing token scale.",
};

export default function SpacingUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Spacing</h1>
        <p className="lead text-subtle">
          Spacing utilities set padding, margin, and gap from the space token
          scale. All spacing utilities support responsive breakpoint suffixes.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Padding</h2>
        <p>
          Use <code>p-*</code> for all sides,{" "}
          <code>px-*</code>/<code>py-*</code> for axes, and{" "}
          <code>pt-*</code>/<code>pb-*</code>/<code>ps-*</code>/<code>pe-*</code>{" "}
          for individual sides. Values are <code>0</code>, <code>half</code>, and{" "}
          <code>1</code> through <code>8</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="border rounded-sm p-1 mb-3">p-1</div>
<div class="border rounded-sm p-2 mb-3">p-2</div>
<div class="border rounded-sm p-3 mb-3">p-3</div>
<div class="border rounded-sm p-4 mb-3">p-4</div>
<div class="border rounded-sm px-4 py-2 mb-3">px-4 py-2</div>
<div class="border rounded-sm pt-4 pb-1">pt-4 pb-1</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border rounded-sm p-1 mb-3">p-1</div>
            <div className="border rounded-sm p-2 mb-3">p-2</div>
            <div className="border rounded-sm p-3 mb-3">p-3</div>
            <div className="border rounded-sm p-4 mb-3">p-4</div>
            <div className="border rounded-sm px-4 py-2 mb-3">px-4 py-2</div>
            <div className="border rounded-sm pt-4 pb-1">pt-4 pb-1</div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Margin</h2>
        <p>
          Margin utilities include an <code>auto</code> value for centering.
          Use <code>m-*</code> for all sides,{" "}
          <code>mx-*</code>/<code>my-*</code> for axes, and{" "}
          <code>mt-*</code>/<code>mb-*</code>/<code>ms-*</code>/<code>me-*</code>{" "}
          for individual sides.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="border rounded-sm p-2">Reference block</div>
<div class="border rounded-sm p-2 mt-3">mt-3</div>
<div class="border rounded-sm p-2 mt-4">mt-4</div>
<div class="border rounded-sm p-2 mx-auto w-50">mx-auto w-50 — centred</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border rounded-sm p-2">Reference block</div>
            <div className="border rounded-sm p-2 mt-3">mt-3</div>
            <div className="border rounded-sm p-2 mt-4">mt-4</div>
            <div className="border rounded-sm p-2 mx-auto w-50">mx-auto w-50 — centred</div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Negative margin</h2>
        <p>
          Negative margin utilities pull elements outside their normal box.
          Use <code>-m-*</code> for all sides,{" "}
          <code>-mx-*</code> for inline, and{" "}
          <code>-my-*</code> for block. Values are <code>1px</code> and{" "}
          <code>1</code> through <code>8</code>. All support responsive
          breakpoint suffixes.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="border p-3 mb-3">
  <div class="bg-primary-subtle p-2 -mx-1">-mx-1 pulls into parent padding</div>
</div>

<div class="border p-3">
  <div class="bg-primary-subtle p-2 -mt-3">-mt-3 overlaps parent top</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border p-3 mb-3">
              <div className="bg-primary-subtle p-2 -mx-1">-mx-1 pulls into parent padding</div>
            </div>
            <div className="border p-3">
              <div className="bg-primary-subtle p-2 -mt-3">-mt-3 overlaps parent top</div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Gap</h2>
        <p>
          Gap utilities set <code>gap</code>, <code>row-gap</code>, or{" "}
          <code>column-gap</code> on flex or grid parents. Use{" "}
          <code>gap-*</code>, <code>row-gap-*</code>, and{" "}
          <code>col-gap-*</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="d-flex gap-1 mb-3">
  <span class="bg-surface-raised rounded-sm p-2">One</span>
  <span class="bg-surface-raised rounded-sm p-2">Two</span>
  <span class="bg-surface-raised rounded-sm p-2">Three</span>
</div>

<div class="d-flex gap-4 mb-3">
  <span class="bg-surface-raised rounded-sm p-2">One</span>
  <span class="bg-surface-raised rounded-sm p-2">Two</span>
  <span class="bg-surface-raised rounded-sm p-2">Three</span>
</div>

<div class="ln-grid ln-grid--cols-3 row-gap-1 col-gap-4">
  <span class="bg-surface-raised rounded-sm p-2 text-center">A</span>
  <span class="bg-surface-raised rounded-sm p-2 text-center">B</span>
  <span class="bg-surface-raised rounded-sm p-2 text-center">C</span>
  <span class="bg-surface-raised rounded-sm p-2 text-center">D</span>
  <span class="bg-surface-raised rounded-sm p-2 text-center">E</span>
  <span class="bg-surface-raised rounded-sm p-2 text-center">F</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex gap-1 mb-3">
              <span className="bg-surface-raised rounded-sm p-2">One</span>
              <span className="bg-surface-raised rounded-sm p-2">Two</span>
              <span className="bg-surface-raised rounded-sm p-2">Three</span>
            </div>
            <div className="d-flex gap-4 mb-3">
              <span className="bg-surface-raised rounded-sm p-2">One</span>
              <span className="bg-surface-raised rounded-sm p-2">Two</span>
              <span className="bg-surface-raised rounded-sm p-2">Three</span>
            </div>
            <div className="ln-grid ln-grid--cols-3 row-gap-1 col-gap-4">
              <span className="bg-surface-raised rounded-sm p-2 text-center">A</span>
              <span className="bg-surface-raised rounded-sm p-2 text-center">B</span>
              <span className="bg-surface-raised rounded-sm p-2 text-center">C</span>
              <span className="bg-surface-raised rounded-sm p-2 text-center">D</span>
              <span className="bg-surface-raised rounded-sm p-2 text-center">E</span>
              <span className="bg-surface-raised rounded-sm p-2 text-center">F</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive</h2>
        <p>
          All spacing utilities generate responsive variants:{" "}
          <code>.p-*@sm</code>, <code>.mt-*@md</code>,{" "}
          <code>.gap-*@lg</code>, etc.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="border rounded-sm p-2 mt-0 mt-4@md mb-3">No top margin on mobile, mt-4 from md up</div>
<div class="d-flex flex-column flex-row@md gap-1 gap-4@lg">
  <span class="bg-surface-raised rounded-sm p-2">Item</span>
  <span class="bg-surface-raised rounded-sm p-2">Item</span>
  <span class="bg-surface-raised rounded-sm p-2">Item</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border rounded-sm p-2 mt-0 mt-4@md mb-3">No top margin on mobile, mt-4 from md up</div>
            <div className="d-flex flex-column flex-row@md gap-1 gap-4@lg">
              <span className="bg-surface-raised rounded-sm p-2">Item</span>
              <span className="bg-surface-raised rounded-sm p-2">Item</span>
              <span className="bg-surface-raised rounded-sm p-2">Item</span>
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
            <tr><td><code>.p-&#123;0|half|1–8&#125;</code></td><td><code>padding (all sides)</code></td><td>Yes</td></tr>
            <tr><td><code>.pt-&#123;0|half|1–8&#125;</code></td><td><code>padding-top</code></td><td>Yes</td></tr>
            <tr><td><code>.pb-&#123;0|half|1–8&#125;</code></td><td><code>padding-bottom</code></td><td>Yes</td></tr>
            <tr><td><code>.ps-&#123;0|half|1–8&#125;</code></td><td><code>padding-left</code></td><td>Yes</td></tr>
            <tr><td><code>.pe-&#123;0|half|1–8&#125;</code></td><td><code>padding-right</code></td><td>Yes</td></tr>
            <tr><td><code>.px-&#123;0|half|1–8&#125;</code></td><td><code>padding-inline</code></td><td>Yes</td></tr>
            <tr><td><code>.py-&#123;0|half|1–8&#125;</code></td><td><code>padding-block</code></td><td>Yes</td></tr>
            <tr><td><code>.m-&#123;0|half|1–8|auto&#125;</code></td><td><code>margin (all sides)</code></td><td>Yes</td></tr>
            <tr><td><code>.mt-&#123;0|half|1–8|auto&#125;</code></td><td><code>margin-top</code></td><td>Yes</td></tr>
            <tr><td><code>.mb-&#123;0|half|1–8|auto&#125;</code></td><td><code>margin-bottom</code></td><td>Yes</td></tr>
            <tr><td><code>.ms-&#123;0|half|1–8|auto&#125;</code></td><td><code>margin-left</code></td><td>Yes</td></tr>
            <tr><td><code>.me-&#123;0|half|1–8|auto&#125;</code></td><td><code>margin-right</code></td><td>Yes</td></tr>
            <tr><td><code>.mx-&#123;0|half|1–8|auto&#125;</code></td><td><code>margin-inline</code></td><td>Yes</td></tr>
            <tr><td><code>.my-&#123;0|half|1–8|auto&#125;</code></td><td><code>margin-block</code></td><td>Yes</td></tr>
            <tr><td><code>.-m-&#123;1px|1–8&#125;</code></td><td><code>margin (all sides)</code></td><td>Yes</td></tr>
            <tr><td><code>.-mx-&#123;1px|1–8&#125;</code></td><td><code>margin-inline</code></td><td>Yes</td></tr>
            <tr><td><code>.-my-&#123;1px|1–8&#125;</code></td><td><code>margin-block</code></td><td>Yes</td></tr>
            <tr><td><code>.gap-&#123;0|half|1–8&#125;</code></td><td><code>gap</code></td><td>Yes</td></tr>
            <tr><td><code>.row-gap-&#123;0|half|1–8&#125;</code></td><td><code>row-gap</code></td><td>Yes</td></tr>
            <tr><td><code>.col-gap-&#123;0|half|1–8&#125;</code></td><td><code>column-gap</code></td><td>Yes</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
