import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Borders",
  description: "Utility classes for border width, color, and radius using Linea UI design tokens.",
};

export default function BorderUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Borders</h1>
        <p className="lead text-subtle">
          Border utilities render an inset outline that looks like a border
          without affecting the box model or breaking vertical rhythm. Border
          radius utilities control corner rounding.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Border weight</h2>
        <p>
          Use <code>border</code> for a standard 1px outline,{" "}
          <code>border-2</code> or <code>border-3</code> for heavier weights,
          and <code>border-0</code> to remove it.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="border rounded-sm p-2 mb-3">border — 1px solid</div>
<div class="border-2 rounded-sm p-2 mb-3">border-2 — 2px solid</div>
<div class="border-3 rounded-sm p-2 mb-3">border-3 — 3px solid</div>
<div class="border-0 rounded-sm p-2">border-0 — no border</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border rounded-sm p-2 mb-3">border — 1px solid</div>
            <div className="border-2 rounded-sm p-2 mb-3">border-2 — 2px solid</div>
            <div className="border-3 rounded-sm p-2 mb-3">border-3 — 3px solid</div>
            <div className="border-0 rounded-sm p-2">border-0 — no border</div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Border radius</h2>
        <p>
          Radius utilities set <code>border-radius</code> from token values.
          Use <code>rounded-pill</code> for fully rounded ends and{" "}
          <code>rounded-circle</code> for a perfect circle (requires equal
          width and height).
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<span class="d-inline-block border p-2 rounded-none mb-3">rounded-none</span>
<span class="d-inline-block border p-2 rounded-xs mb-3">rounded-xs</span>
<span class="d-inline-block border p-2 rounded-sm mb-3">rounded-sm</span>
<span class="d-inline-block border p-2 rounded-md mb-3">rounded-md</span>
<span class="d-inline-block border p-2 rounded-lg mb-3">rounded-lg</span>
<span class="d-inline-block border p-2 rounded-xl mb-3">rounded-xl</span>
<span class="d-inline-block border px-3 py-1 rounded-pill mb-3">rounded-pill</span>
<span class="d-inline-block border p-3 rounded-circle mb-3">rounded-circle</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <span className="d-inline-block border p-2 rounded-none mb-3">rounded-none</span>
            {" "}
            <span className="d-inline-block border p-2 rounded-xs mb-3">rounded-xs</span>
            {" "}
            <span className="d-inline-block border p-2 rounded-sm mb-3">rounded-sm</span>
            {" "}
            <span className="d-inline-block border p-2 rounded-md mb-3">rounded-md</span>
            {" "}
            <span className="d-inline-block border p-2 rounded-lg mb-3">rounded-lg</span>
            {" "}
            <span className="d-inline-block border p-2 rounded-xl mb-3">rounded-xl</span>
            {" "}
            <span className="d-inline-block border px-3 py-1 rounded-pill mb-3">rounded-pill</span>
            {" "}
            <span className="d-inline-block border p-3 rounded-circle mb-3">rounded-circle</span>
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
            <tr><td><code>.border</code></td><td><code>outline: var(--bd1) solid var(--border)</code></td><td>No</td></tr>
            <tr><td><code>.border-0</code></td><td><code>outline: 0</code></td><td>No</td></tr>
            <tr><td><code>.border-2</code></td><td><code>outline: var(--bd2) solid var(--border)</code></td><td>No</td></tr>
            <tr><td><code>.border-3</code></td><td><code>outline: var(--bd3) solid var(--border)</code></td><td>No</td></tr>
            <tr><td><code>.rounded-none</code></td><td><code>border-radius: var(--r-none)</code></td><td>No</td></tr>
            <tr><td><code>.rounded-xs</code></td><td><code>border-radius: var(--r-xs)</code></td><td>No</td></tr>
            <tr><td><code>.rounded-sm</code></td><td><code>border-radius: var(--r-sm)</code></td><td>No</td></tr>
            <tr><td><code>.rounded-md</code></td><td><code>border-radius: var(--r-md)</code></td><td>No</td></tr>
            <tr><td><code>.rounded-lg</code></td><td><code>border-radius: var(--r-lg)</code></td><td>No</td></tr>
            <tr><td><code>.rounded-xl</code></td><td><code>border-radius: var(--r-xl)</code></td><td>No</td></tr>
            <tr><td><code>.rounded-pill</code></td><td><code>border-radius: var(--r-pill)</code></td><td>No</td></tr>
            <tr><td><code>.rounded-circle</code></td><td><code>border-radius: var(--r-circle)</code></td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
