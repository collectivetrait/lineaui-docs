import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Flex",
  description: "Utility classes for flexbox alignment, direction, wrap, grow, and shrink properties.",
};

export default function FlexUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Flex</h1>
        <p className="lead text-subtle">
          Flex utilities control direction, wrapping, alignment, and sizing of
          flex items. Combine with <code>d-flex</code> or{" "}
          <code>d-inline-flex</code> to activate flexbox layout.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Direction</h2>
        <p>
          Control flex direction with <code>flex-row</code>,{" "}
          <code>flex-column</code>, <code>flex-row-reverse</code>, and{" "}
          <code>flex-column-reverse</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="d-flex flex-row gap-2 border rounded-sm p-2 mb-3">
  <span class="bg-surface-raised rounded-sm p-2">One</span>
  <span class="bg-surface-raised rounded-sm p-2">Two</span>
  <span class="bg-surface-raised rounded-sm p-2">Three</span>
</div>

<div class="d-flex flex-column gap-2 border rounded-sm p-2">
  <span class="bg-surface-raised rounded-sm p-2">One</span>
  <span class="bg-surface-raised rounded-sm p-2">Two</span>
  <span class="bg-surface-raised rounded-sm p-2">Three</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex flex-row gap-2 border rounded-sm p-2 mb-3">
              <span className="bg-surface-raised rounded-sm p-2">One</span>
              <span className="bg-surface-raised rounded-sm p-2">Two</span>
              <span className="bg-surface-raised rounded-sm p-2">Three</span>
            </div>
            <div className="d-flex flex-column gap-2 border rounded-sm p-2">
              <span className="bg-surface-raised rounded-sm p-2">One</span>
              <span className="bg-surface-raised rounded-sm p-2">Two</span>
              <span className="bg-surface-raised rounded-sm p-2">Three</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Wrap</h2>
        <p>
          Use <code>flex-wrap</code> to allow items to wrap onto new lines,{" "}
          <code>flex-nowrap</code> to keep them on one line, and{" "}
          <code>flex-wrap-reverse</code> to wrap in reverse order.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="d-flex flex-wrap gap-2 border rounded-sm p-2">
  <span class="bg-surface-raised rounded-sm p-2">One</span>
  <span class="bg-surface-raised rounded-sm p-2">Two</span>
  <span class="bg-surface-raised rounded-sm p-2">Three</span>
  <span class="bg-surface-raised rounded-sm p-2">Four</span>
  <span class="bg-surface-raised rounded-sm p-2">Five</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex flex-wrap gap-2 border rounded-sm p-2">
              <span className="bg-surface-raised rounded-sm p-2">One</span>
              <span className="bg-surface-raised rounded-sm p-2">Two</span>
              <span className="bg-surface-raised rounded-sm p-2">Three</span>
              <span className="bg-surface-raised rounded-sm p-2">Four</span>
              <span className="bg-surface-raised rounded-sm p-2">Five</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Fill, grow, and shrink</h2>
        <p>
          <code>flex-fill</code> expands an item to fill available space.{" "}
          <code>flex-grow-1</code> and <code>flex-grow-0</code> control
          whether an item grows. <code>flex-shrink-0</code> prevents an item
          from shrinking.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="d-flex gap-2 border rounded-sm p-2 mb-3">
  <span class="bg-surface-raised rounded-sm p-2">Fixed</span>
  <span class="bg-surface-raised rounded-sm p-2 flex-fill text-center">flex-fill</span>
  <span class="bg-surface-raised rounded-sm p-2">Fixed</span>
</div>

<div class="d-flex gap-2 border rounded-sm p-2 mb-3">
  <span class="bg-surface-raised rounded-sm p-2">Fixed</span>
  <span class="bg-surface-raised rounded-sm p-2 flex-grow-1 text-center">flex-grow-1</span>
  <span class="bg-surface-raised rounded-sm p-2 flex-grow-0">flex-grow-0</span>
</div>

<div class="d-flex gap-2 border rounded-sm p-2">
  <span class="bg-surface-raised rounded-sm p-2 flex-shrink-0">flex-shrink-0</span>
  <span class="bg-surface-raised rounded-sm p-2 flex-shrink-1">flex-shrink-1</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex gap-2 border rounded-sm p-2 mb-3">
              <span className="bg-surface-raised rounded-sm p-2">Fixed</span>
              <span className="bg-surface-raised rounded-sm p-2 flex-fill text-center">flex-fill</span>
              <span className="bg-surface-raised rounded-sm p-2">Fixed</span>
            </div>
            <div className="d-flex gap-2 border rounded-sm p-2 mb-3">
              <span className="bg-surface-raised rounded-sm p-2">Fixed</span>
              <span className="bg-surface-raised rounded-sm p-2 flex-grow-1 text-center">flex-grow-1</span>
              <span className="bg-surface-raised rounded-sm p-2 flex-grow-0">flex-grow-0</span>
            </div>
            <div className="d-flex gap-2 border rounded-sm p-2">
              <span className="bg-surface-raised rounded-sm p-2 flex-shrink-0">flex-shrink-0</span>
              <span className="bg-surface-raised rounded-sm p-2 flex-shrink-1">flex-shrink-1</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Justify content</h2>
        <p>
          Use <code>justify-content-*</code> to align items along the main
          axis: <code>start</code>, <code>center</code>, <code>end</code>,{" "}
          <code>between</code>, <code>around</code>, <code>evenly</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="d-flex justify-content-between border rounded-sm p-2 mb-3">
  <span class="bg-surface-raised rounded-sm p-2">Left</span>
  <span class="bg-surface-raised rounded-sm p-2">Centre</span>
  <span class="bg-surface-raised rounded-sm p-2">Right</span>
</div>

<div class="d-flex justify-content-center border rounded-sm p-2 mb-3">
  <span class="bg-surface-raised rounded-sm p-2">Centred</span>
</div>

<div class="d-flex justify-content-end border rounded-sm p-2">
  <span class="bg-surface-raised rounded-sm p-2">End</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex justify-content-between border rounded-sm p-2 mb-3">
              <span className="bg-surface-raised rounded-sm p-2">Left</span>
              <span className="bg-surface-raised rounded-sm p-2">Centre</span>
              <span className="bg-surface-raised rounded-sm p-2">Right</span>
            </div>
            <div className="d-flex justify-content-center border rounded-sm p-2 mb-3">
              <span className="bg-surface-raised rounded-sm p-2">Centred</span>
            </div>
            <div className="d-flex justify-content-end border rounded-sm p-2">
              <span className="bg-surface-raised rounded-sm p-2">End</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Align items and align self</h2>
        <p>
          Use <code>align-items-*</code> along the cross axis and{" "}
          <code>align-self-*</code> to override alignment for a single item.
          Values: <code>start</code>, <code>center</code>, <code>end</code>,{" "}
          <code>baseline</code>, <code>stretch</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="d-flex align-items-center gap-2 border rounded-sm p-2 mb-3">
  <span class="bg-surface-raised rounded-sm p-2">Short</span>
  <span class="bg-surface-raised rounded-sm p-4">Tall item</span>
  <span class="bg-surface-raised rounded-sm p-2">Short</span>
</div>

<div class="d-flex gap-2 border rounded-sm p-2">
  <span class="bg-surface-raised rounded-sm p-2">auto</span>
  <span class="bg-surface-raised rounded-sm p-4">Tall</span>
  <span class="bg-surface-raised rounded-sm p-2 align-self-start">align-self-start</span>
  <span class="bg-surface-raised rounded-sm p-2 align-self-end">align-self-end</span>
  <span class="bg-surface-raised rounded-sm p-2 align-self-center">align-self-center</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2 border rounded-sm p-2 mb-3">
              <span className="bg-surface-raised rounded-sm p-2">Short</span>
              <span className="bg-surface-raised rounded-sm p-4">Tall item</span>
              <span className="bg-surface-raised rounded-sm p-2">Short</span>
            </div>
            <div className="d-flex gap-2 border rounded-sm p-2">
              <span className="bg-surface-raised rounded-sm p-2">auto</span>
              <span className="bg-surface-raised rounded-sm p-4">Tall</span>
              <span className="bg-surface-raised rounded-sm p-2 align-self-start">align-self-start</span>
              <span className="bg-surface-raised rounded-sm p-2 align-self-end">align-self-end</span>
              <span className="bg-surface-raised rounded-sm p-2 align-self-center">align-self-center</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive</h2>
        <p>
          Direction, wrap, justify-content, align-items, and align-self
          generate responsive variants: <code>.flex-column@md</code>,{" "}
          <code>.justify-content-between@lg</code>, etc.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="d-flex flex-column flex-row@md gap-3 border rounded-sm p-2">
  <span class="bg-surface-raised rounded-sm p-2">Stacked on mobile</span>
  <span class="bg-surface-raised rounded-sm p-2">Row from md up</span>
  <span class="bg-surface-raised rounded-sm p-2">Third item</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex flex-column flex-row@md gap-3 border rounded-sm p-2">
              <span className="bg-surface-raised rounded-sm p-2">Stacked on mobile</span>
              <span className="bg-surface-raised rounded-sm p-2">Row from md up</span>
              <span className="bg-surface-raised rounded-sm p-2">Third item</span>
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
            <tr><td><code>.flex-row</code></td><td><code>flex-direction: row</code></td><td>Yes</td></tr>
            <tr><td><code>.flex-column</code></td><td><code>flex-direction: column</code></td><td>Yes</td></tr>
            <tr><td><code>.flex-row-reverse</code></td><td><code>flex-direction: row-reverse</code></td><td>Yes</td></tr>
            <tr><td><code>.flex-column-reverse</code></td><td><code>flex-direction: column-reverse</code></td><td>Yes</td></tr>
            <tr><td><code>.flex-wrap</code></td><td><code>flex-wrap: wrap</code></td><td>Yes</td></tr>
            <tr><td><code>.flex-nowrap</code></td><td><code>flex-wrap: nowrap</code></td><td>Yes</td></tr>
            <tr><td><code>.flex-wrap-reverse</code></td><td><code>flex-wrap: wrap-reverse</code></td><td>Yes</td></tr>
            <tr><td><code>.flex-fill</code></td><td><code>flex: 1 1 auto</code></td><td>No</td></tr>
            <tr><td><code>.flex-grow-0</code></td><td><code>flex-grow: 0</code></td><td>No</td></tr>
            <tr><td><code>.flex-grow-1</code></td><td><code>flex-grow: 1</code></td><td>No</td></tr>
            <tr><td><code>.flex-shrink-0</code></td><td><code>flex-shrink: 0</code></td><td>No</td></tr>
            <tr><td><code>.flex-shrink-1</code></td><td><code>flex-shrink: 1</code></td><td>No</td></tr>
            <tr><td><code>.justify-content-start</code></td><td><code>justify-content: flex-start</code></td><td>Yes</td></tr>
            <tr><td><code>.justify-content-center</code></td><td><code>justify-content: center</code></td><td>Yes</td></tr>
            <tr><td><code>.justify-content-end</code></td><td><code>justify-content: flex-end</code></td><td>Yes</td></tr>
            <tr><td><code>.justify-content-between</code></td><td><code>justify-content: space-between</code></td><td>Yes</td></tr>
            <tr><td><code>.justify-content-around</code></td><td><code>justify-content: space-around</code></td><td>Yes</td></tr>
            <tr><td><code>.justify-content-evenly</code></td><td><code>justify-content: space-evenly</code></td><td>Yes</td></tr>
            <tr><td><code>.align-items-start</code></td><td><code>align-items: flex-start</code></td><td>Yes</td></tr>
            <tr><td><code>.align-items-center</code></td><td><code>align-items: center</code></td><td>Yes</td></tr>
            <tr><td><code>.align-items-end</code></td><td><code>align-items: flex-end</code></td><td>Yes</td></tr>
            <tr><td><code>.align-items-baseline</code></td><td><code>align-items: baseline</code></td><td>Yes</td></tr>
            <tr><td><code>.align-items-stretch</code></td><td><code>align-items: stretch</code></td><td>Yes</td></tr>
            <tr><td><code>.align-self-start</code></td><td><code>align-self: flex-start</code></td><td>Yes</td></tr>
            <tr><td><code>.align-self-center</code></td><td><code>align-self: center</code></td><td>Yes</td></tr>
            <tr><td><code>.align-self-end</code></td><td><code>align-self: flex-end</code></td><td>Yes</td></tr>
            <tr><td><code>.align-self-baseline</code></td><td><code>align-self: baseline</code></td><td>Yes</td></tr>
            <tr><td><code>.align-self-stretch</code></td><td><code>align-self: stretch</code></td><td>Yes</td></tr>
            <tr><td><code>.align-self-auto</code></td><td><code>align-self: auto</code></td><td>Yes</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
