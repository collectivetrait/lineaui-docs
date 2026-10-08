import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Display",
  description: "Utility classes for CSS display property: block, inline, flex, grid, none, and responsive variants.",
};

export default function DisplayUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Display</h1>
        <p className="lead text-subtle">
          The <code>d-*</code> family sets the CSS <code>display</code>{" "}
          property. Values include <code>block</code>,{" "}
          <code>inline-block</code>, <code>flex</code>,{" "}
          <code>inline-flex</code>, <code>grid</code>,{" "}
          <code>inline-grid</code>, <code>contents</code>, and{" "}
          <code>none</code>.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Basic display values</h2>
        <p>
          Use <code>d-block</code> for full-width block elements,{" "}
          <code>d-inline-block</code> to flow inline while accepting width
          and height, <code>d-flex</code> for flexbox layout, and{" "}
          <code>d-none</code> to hide elements.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="d-block border rounded-sm p-2 mb-3">d-block</div>
<div class="mb-3">
  <span class="d-inline-block bg-surface-raised rounded-sm p-2">d-inline-block</span>
  <span class="d-inline-block bg-surface-raised rounded-sm p-2">d-inline-block</span>
</div>

<div class="d-flex gap-2 mb-3">
  <span class="bg-surface-raised rounded-sm p-2">d-flex item</span>
  <span class="bg-surface-raised rounded-sm p-2">d-flex item</span>
  <span class="bg-surface-raised rounded-sm p-2">d-flex item</span>
</div>

<p class="bg-surface-raised rounded-sm p-2">Visible. <span class="d-none">Hidden with d-none.</span> Visible again.</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-block border rounded-sm p-2 mb-3">d-block</div>
            <div className="mb-3">
              <span className="d-inline-block bg-surface-raised rounded-sm p-2">d-inline-block</span>
              <span className="d-inline-block bg-surface-raised rounded-sm p-2">d-inline-block</span>
            </div>
            <div className="d-flex gap-2 mb-3">
              <span className="bg-surface-raised rounded-sm p-2">d-flex item</span>
              <span className="bg-surface-raised rounded-sm p-2">d-flex item</span>
              <span className="bg-surface-raised rounded-sm p-2">d-flex item</span>
            </div>
            <p className="bg-surface-raised rounded-sm p-2">Visible. <span className="d-none">Hidden with d-none.</span> Visible again.</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Grid and inline variants</h2>
        <p>
          Use <code>d-grid</code> for CSS grid layout,{" "}
          <code>d-inline-flex</code> and <code>d-inline-grid</code> for inline
          formatting contexts, and <code>d-contents</code> to make the element
          invisible to the box model while keeping its children in flow.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="d-inline-flex gap-2 border rounded-sm p-2 mb-3">
  <span class="bg-surface-raised rounded-sm p-2">d-inline-flex</span>
  <span class="bg-surface-raised rounded-sm p-2">item</span>
</div>

<div class="d-inline-grid gap-2 border rounded-sm p-2">
  <span class="bg-surface-raised rounded-sm p-2">d-inline-grid</span>
  <span class="bg-surface-raised rounded-sm p-2">item</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-inline-flex gap-2 border rounded-sm p-2 mb-3">
              <span className="bg-surface-raised rounded-sm p-2">d-inline-flex</span>
              <span className="bg-surface-raised rounded-sm p-2">item</span>
            </div>
            {" "}
            <div className="d-inline-grid gap-2 border rounded-sm p-2">
              <span className="bg-surface-raised rounded-sm p-2">d-inline-grid</span>
              <span className="bg-surface-raised rounded-sm p-2">item</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive</h2>
        <p>
          Add breakpoint suffixes for responsive behavior:{" "}
          <code>.d-*@sm</code>, <code>.d-*@md</code>, <code>.d-*@lg</code>,{" "}
          <code>.d-*@xl</code>, <code>.d-*@2xl</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="d-none d-block@md border rounded-sm p-2 mb-3">Hidden on mobile, visible from md up</div>
<div class="d-block d-none@lg border rounded-sm p-2">Visible until lg, then hidden</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-none d-block@md border rounded-sm p-2 mb-3">Hidden on mobile, visible from md up</div>
            <div className="d-block d-none@lg border rounded-sm p-2">Visible until lg, then hidden</div>
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
            <tr><td><code>.d-none</code></td><td><code>display: none</code></td><td>Yes</td></tr>
            <tr><td><code>.d-inline</code></td><td><code>display: inline</code></td><td>Yes</td></tr>
            <tr><td><code>.d-inline-block</code></td><td><code>display: inline-block</code></td><td>Yes</td></tr>
            <tr><td><code>.d-block</code></td><td><code>display: block</code></td><td>Yes</td></tr>
            <tr><td><code>.d-flex</code></td><td><code>display: flex</code></td><td>Yes</td></tr>
            <tr><td><code>.d-inline-flex</code></td><td><code>display: inline-flex</code></td><td>Yes</td></tr>
            <tr><td><code>.d-grid</code></td><td><code>display: grid</code></td><td>Yes</td></tr>
            <tr><td><code>.d-inline-grid</code></td><td><code>display: inline-grid</code></td><td>Yes</td></tr>
            <tr><td><code>.d-contents</code></td><td><code>display: contents</code></td><td>Yes</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
