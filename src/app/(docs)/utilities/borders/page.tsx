import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Borders",
  description: "Three border approaches — outline, shadow, and native — with per-side utilities, tokens, and tradeoffs for vertical rhythm.",
};

export default function BorderUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Borders</h1>
        <p className="lead text-subtle">
          Linea UI offers three border families, each with different tradeoffs
          for vertical rhythm, per-side targeting, and CSS feature support.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Overview</h2>
        <table>
          <thead>
            <tr>
              <th>Family</th>
              <th>All sides</th>
              <th>Per-side</th>
              <th>Rhythm-safe</th>
              <th>Respects radius</th>
              <th>Works with <code>.shadow-*</code></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Outline</strong></td>
              <td><code>.border</code></td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><strong>Shadow</strong></td>
              <td><code>.border-sh</code></td>
              <td><code>-t -b -s -e -x -y</code></td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td><strong>Native</strong></td>
              <td><code>.border-n</code></td>
              <td><code>-t -b -s -e -x -y</code></td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Outline</strong> is the simplest choice for all-sides borders on
          cards and containers. <strong>Shadow</strong> (<code>border-sh</code>) is
          the go-to for per-side borders that must preserve vertical rhythm.{" "}
          <strong>Native</strong> (<code>border-n</code>) is for cases where you
          need <code>border-style</code> (dashed, dotted) or{" "}
          <code>border-radius</code> interaction and are willing to compensate for
          the layout shift yourself.
        </p>
      </section>

      <section className="docs-section">
        <h2>Tokens</h2>
        <p>
          All three families read from the same custom properties. Override
          them locally to change size or color on any element.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Default: 1px, var(--border) color -->
<div class="border-sh-b p-2">Default border</div>

<!-- Override size and color inline -->
<div class="border-sh-b p-2"
     style="--border-size: var(--bd3); --border-color: var(--primary);">
  3px primary border
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border-sh-b p-2 mb-3">Default border</div>
            <div className="border-sh-b p-2" style={{"--border-size": "var(--bd3)", "--border-color": "var(--primary)"} as React.CSSProperties}>
              3px primary border
            </div>
          </div>
        </div>

        <h3>Overriding color per element</h3>
        <p>
          Set <code>--border-color</code> with an inline style to change the
          color of any border utility on a single element.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="border-sh-b p-2" style="--border-color: var(--primary);">Primary accent</div>
<div class="border-sh-b p-2" style="--border-color: var(--danger);">Danger accent</div>
<div class="border-sh-b p-2" style="--border-color: var(--success);">Success accent</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border-sh-b p-2 mb-3" style={{"--border-color": "var(--primary)"} as React.CSSProperties}>Primary accent</div>
            <div className="border-sh-b p-2 mb-3" style={{"--border-color": "var(--danger)"} as React.CSSProperties}>Danger accent</div>
            <div className="border-sh-b p-2" style={{"--border-color": "var(--success)"} as React.CSSProperties}>Success accent</div>
          </div>
        </div>

        <h3>Overriding color via a class</h3>
        <p>
          For reusable patterns, define <code>--border-color</code> in a custom
          class. Every border utility inside that context inherits the override.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="css">{`/* In your stylesheet */
.card--accent {
  --border-color: var(--primary);
}

.section--danger {
  --border-color: var(--danger);
}`}</CodeBlock>
          <CodeBlock language="html">{`<!-- All border utilities inside inherit the color -->
<div class="card--accent border-sh-s p-3">Card with primary start accent</div>

<!-- Works with any border family -->
<section class="section--danger border-n-b py-3">
  Danger section with native bottom border
</section>`}</CodeBlock>
        </div>

        <h3>Scoping to a parent</h3>
        <p>
          Setting <code>--border-color</code> on a parent element applies to
          every border utility inside it, without needing per-element overrides.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div style="--border-color: var(--primary);">
  <div class="border-sh-b p-2">Inherits primary border</div>
  <div class="border-sh-b p-2">Also primary</div>
  <div class="border p-2">Outline border — also primary</div>
</div>`}</CodeBlock>
        </div>

        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Default</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>--border-size</code></td><td><code>var(--bd1)</code> (1px)</td><td>Width for all border utilities</td></tr>
            <tr><td><code>--border-color</code></td><td><code>var(--border)</code></td><td>Color for all border utilities</td></tr>
            <tr><td><code>--bd1</code></td><td>1px</td><td>Thin border width</td></tr>
            <tr><td><code>--bd2</code></td><td>2px</td><td>Medium border width</td></tr>
            <tr><td><code>--bd3</code></td><td>3px</td><td>Heavy border width</td></tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2>Outline borders</h2>
        <p>
          The <code>.border</code> class uses an inset <code>outline</code> that
          looks like a border without affecting the box model or breaking vertical
          rhythm. It respects <code>border-radius</code> and works alongside{" "}
          <code>.shadow-*</code> elevation utilities. It only supports all sides
          at once — use shadow borders for per-side control.
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
        <h2>Shadow borders</h2>
        <p>
          Shadow borders use <code>box-shadow: inset</code> to render borders
          without affecting layout or breaking vertical rhythm. They support all
          sides, per-side, and per-axis targeting. Multiple classes on the same
          element combine into a multi-side border.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="border-sh p-2 mb-3">border-sh — all sides</div>
<div class="border-sh-b p-2 mb-3">border-sh-b — bottom only</div>
<div class="border-sh-t p-2 mb-3">border-sh-t — top only</div>
<div class="border-sh-s p-2 mb-3">border-sh-s — start (left) only</div>
<div class="border-sh-x p-2 mb-3">border-sh-x — left + right</div>
<div class="border-sh-y p-2 mb-3">border-sh-y — top + bottom</div>
<div class="border-sh-t border-sh-s p-2">combined: top + start</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border-sh p-2 mb-3">border-sh — all sides</div>
            <div className="border-sh-b p-2 mb-3">border-sh-b — bottom only</div>
            <div className="border-sh-t p-2 mb-3">border-sh-t — top only</div>
            <div className="border-sh-s p-2 mb-3">border-sh-s — start (left) only</div>
            <div className="border-sh-x p-2 mb-3">border-sh-x — left + right</div>
            <div className="border-sh-y p-2 mb-3">border-sh-y — top + bottom</div>
            <div className="border-sh-t border-sh-s p-2">combined: top + start</div>
          </div>
        </div>

        <h3>Responsive</h3>
        <p>
          All shadow border classes have responsive variants. Use{" "}
          <code>.border-sh-b@md</code> to add a border at a breakpoint, or{" "}
          <code>.border-sh-b-0@md</code> to remove one.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Bottom border on mobile, removed at md -->
<div class="border-sh-b border-sh-b-0@md p-2">Divider on mobile only</div>`}</CodeBlock>
        </div>

        <h3>Tradeoffs</h3>
        <ul>
          <li>
            Shadow borders <strong>do not respect{" "}
            <code>border-radius</code></strong>. The inset shadow bleeds straight
            at corners. Use outline borders for rounded containers.
          </li>
          <li>
            Shadow borders <strong>cannot be combined with{" "}
            <code>.shadow-*</code> utilities</strong> on the same element, because
            both set <code>box-shadow</code>. To give a component both a shadow
            and a border, use a containing element — the outer element carries the
            shadow, the inner one carries the border:
          </li>
        </ul>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Wrong: shadow-2 and border-sh-b both set box-shadow -->
<!-- <div class="shadow-2 border-sh-b"> -->

<!-- Right: wrapper carries the shadow, inner carries the border -->
<div class="shadow-2 rounded-md">
  <div class="border-sh-b p-3">
    Card with shadow and bottom border
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="shadow-2 rounded-md">
              <div className="border-sh-b p-3">
                Card with shadow and bottom border
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Native borders</h2>
        <p>
          Native borders use standard CSS <code>border-*</code> properties. They
          support <code>border-radius</code>, <code>border-style</code> (dashed,
          dotted), and CSS transitions — but they add to the element{"'"}s
          dimensions and <strong>break vertical rhythm</strong>. The library
          cannot compensate automatically; you must adjust padding yourself,
          typically by subtracting the border width with <code>calc()</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- All sides -->
<div class="border-n rounded-sm p-2 mb-3"
     style="padding: calc(1rem - var(--border-size));">
  border-n — all sides (compensated)
</div>

<!-- Per-side with compensation -->
<div class="border-n-b p-2"
     style="padding-bottom: calc(1rem - var(--border-size));">
  border-n-b — bottom only (compensated)
</div>

<!-- Dashed style (not possible with outline or shadow) -->
<div class="border-n-b p-2"
     style="border-style: dashed; padding-bottom: calc(1rem - var(--border-size));">
  Dashed bottom border
</div>`}</CodeBlock>
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

        <h3>Outline</h3>
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
          </tbody>
        </table>

        <h3>Shadow</h3>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Effect</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>.border-sh</code></td><td>All sides via inset shadow</td><td>Yes</td></tr>
            <tr><td><code>.border-sh-t</code></td><td>Top border</td><td>Yes</td></tr>
            <tr><td><code>.border-sh-b</code></td><td>Bottom border</td><td>Yes</td></tr>
            <tr><td><code>.border-sh-s</code></td><td>Start (left) border</td><td>Yes</td></tr>
            <tr><td><code>.border-sh-e</code></td><td>End (right) border</td><td>Yes</td></tr>
            <tr><td><code>.border-sh-x</code></td><td>Inline (left + right) borders</td><td>Yes</td></tr>
            <tr><td><code>.border-sh-y</code></td><td>Block (top + bottom) borders</td><td>Yes</td></tr>
            <tr><td><code>.border-sh-0</code></td><td>Remove all shadow borders</td><td>Yes</td></tr>
            <tr><td><code>.border-sh-t-0</code></td><td>Remove top shadow border</td><td>Yes</td></tr>
            <tr><td><code>.border-sh-b-0</code></td><td>Remove bottom shadow border</td><td>Yes</td></tr>
            <tr><td><code>.border-sh-s-0</code></td><td>Remove start shadow border</td><td>Yes</td></tr>
            <tr><td><code>.border-sh-e-0</code></td><td>Remove end shadow border</td><td>Yes</td></tr>
          </tbody>
        </table>

        <h3>Native</h3>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Property</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>.border-n</code></td><td><code>border</code></td><td>Yes</td></tr>
            <tr><td><code>.border-n-t</code></td><td><code>border-top</code></td><td>Yes</td></tr>
            <tr><td><code>.border-n-b</code></td><td><code>border-bottom</code></td><td>Yes</td></tr>
            <tr><td><code>.border-n-s</code></td><td><code>border-left</code></td><td>Yes</td></tr>
            <tr><td><code>.border-n-e</code></td><td><code>border-right</code></td><td>Yes</td></tr>
            <tr><td><code>.border-n-x</code></td><td><code>border-inline</code></td><td>Yes</td></tr>
            <tr><td><code>.border-n-y</code></td><td><code>border-block</code></td><td>Yes</td></tr>
          </tbody>
        </table>

        <h3>Radius</h3>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Property</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
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
