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
          Linea UI offers three border approaches, each with different tradeoffs
          for vertical rhythm, per-side targeting, and CSS feature support. Choose
          the right one for the job.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Overview</h2>
        <table>
          <thead>
            <tr>
              <th>Approach</th>
              <th>Per-side</th>
              <th>Rhythm-safe</th>
              <th>Respects radius</th>
              <th>Combinable with shadows</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Outline</strong> (<code>.border</code>)</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><strong>Shadow</strong> (<code>.border-t</code>, …)</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td><strong>Native</strong> (<code>.border-native-t</code>, …)</td>
              <td>Yes</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2>Tokens</h2>
        <p>
          All three approaches read from the same custom properties. Override
          them locally to change size or color on any element.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Default: 1px, var(--border) color -->
<div class="border-b p-2">Default border</div>

<!-- Override size and color inline -->
<div class="border-b p-2"
     style="--border-size: var(--bd3); --border-color: var(--primary);">
  3px primary border
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border-b p-2 mb-3">Default border</div>
            <div className="border-b p-2" style={{"--border-size": "var(--bd3)", "--border-color": "var(--primary)"} as React.CSSProperties}>
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
          <CodeBlock language="html">{`<div class="border-b p-2" style="--border-color: var(--primary);">Primary accent</div>
<div class="border-b p-2" style="--border-color: var(--danger);">Danger accent</div>
<div class="border-b p-2" style="--border-color: var(--success);">Success accent</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border-b p-2 mb-3" style={{"--border-color": "var(--primary)"} as React.CSSProperties}>Primary accent</div>
            <div className="border-b p-2 mb-3" style={{"--border-color": "var(--danger)"} as React.CSSProperties}>Danger accent</div>
            <div className="border-b p-2" style={{"--border-color": "var(--success)"} as React.CSSProperties}>Success accent</div>
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
<div class="card--accent border-s p-3">Card with primary start accent</div>

<!-- Works with any border approach -->
<section class="section--danger border-native-b py-3">
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
  <div class="border-b p-2">Inherits primary border</div>
  <div class="border-b p-2">Also primary</div>
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
        <h2>Outline borders (all-sides)</h2>
        <p>
          The default <code>.border</code> class uses an inset{" "}
          <code>outline</code> that looks like a border without affecting the box
          model or breaking vertical rhythm. It respects{" "}
          <code>border-radius</code> and works alongside shadow utilities.
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
        <p>
          <strong>Tradeoff:</strong> outline cannot target individual sides. Use
          shadow borders for per-side control.
        </p>
      </section>

      <section className="docs-section">
        <h2>Shadow borders (per-side, rhythm-safe)</h2>
        <p>
          Shadow borders use <code>box-shadow: inset</code> to render per-side
          borders without affecting layout or breaking vertical rhythm. They are
          combinable — add multiple classes to show borders on several sides.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="border-b p-2 mb-3">border-b — bottom only</div>
<div class="border-t p-2 mb-3">border-t — top only</div>
<div class="border-s p-2 mb-3">border-s — start (left) only</div>
<div class="border-y p-2 mb-3">border-y — top + bottom</div>
<div class="border-t border-b border-s border-e p-2">all four sides</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border-b p-2 mb-3">border-b — bottom only</div>
            <div className="border-t p-2 mb-3">border-t — top only</div>
            <div className="border-s p-2 mb-3">border-s — start (left) only</div>
            <div className="border-y p-2 mb-3">border-y — top + bottom</div>
            <div className="border-t border-b border-s border-e p-2">all four sides</div>
          </div>
        </div>
        <h3>Responsive</h3>
        <p>
          Shadow borders support responsive variants. Use{" "}
          <code>.border-b@md</code> to add a border at a breakpoint, or{" "}
          <code>.border-b-0@md</code> to remove one.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Bottom border on mobile, removed at md -->
<div class="border-b border-b-0@md p-2">Divider on mobile only</div>`}</CodeBlock>
        </div>
        <h3>Tradeoffs</h3>
        <ul>
          <li>
            Shadow borders <strong>do not respect <code>border-radius</code></strong>.
            The inset shadow bleeds straight at corners. Use outline borders for
            rounded containers.
          </li>
          <li>
            Shadow borders <strong>cannot be combined with{" "}
            <code>.shadow-*</code> utilities</strong> on the same element, because
            both set <code>box-shadow</code>. To give an element both a border
            and a shadow, use a containing element:
          </li>
        </ul>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Wrong: shadow-2 and border-b compete for box-shadow -->
<!-- <div class="shadow-2 border-b"> -->

<!-- Right: wrapper carries the shadow, inner carries the border -->
<div class="shadow-2 rounded-md">
  <div class="border-b p-3">
    Card with shadow and bottom border
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="shadow-2 rounded-md">
              <div className="border-b p-3">
                Card with shadow and bottom border
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Native borders (per-side, developer compensates)</h2>
        <p>
          Native borders use standard CSS <code>border-*</code> properties. They
          support <code>border-radius</code>, <code>border-style</code> (dashed,
          dotted), and CSS transitions — but they add to the element{"'"}s
          dimensions and <strong>break vertical rhythm</strong>.
        </p>
        <p>
          Use native borders only when you need a feature shadow borders
          can{"'"}t provide (dashed/dotted styles, radius interaction) and you are
          handling rhythm compensation yourself — typically by subtracting the
          border width from padding with <code>calc()</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Native border with manual rhythm compensation -->
<div class="border-native-b p-2"
     style="padding-bottom: calc(1rem - var(--border-size));">
  Compensated bottom border
</div>

<!-- Dashed style (not possible with outline or shadow) -->
<div class="border-native-b p-2"
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

        <h3>Outline (all-sides)</h3>
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

        <h3>Shadow (per-side, rhythm-safe)</h3>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Effect</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>.border-t</code></td><td>Top border via inset shadow</td><td>Yes</td></tr>
            <tr><td><code>.border-b</code></td><td>Bottom border via inset shadow</td><td>Yes</td></tr>
            <tr><td><code>.border-s</code></td><td>Start (left) border via inset shadow</td><td>Yes</td></tr>
            <tr><td><code>.border-e</code></td><td>End (right) border via inset shadow</td><td>Yes</td></tr>
            <tr><td><code>.border-x</code></td><td>Inline (left + right) borders</td><td>Yes</td></tr>
            <tr><td><code>.border-y</code></td><td>Block (top + bottom) borders</td><td>Yes</td></tr>
            <tr><td><code>.border-t-0</code></td><td>Remove top shadow border</td><td>Yes</td></tr>
            <tr><td><code>.border-b-0</code></td><td>Remove bottom shadow border</td><td>Yes</td></tr>
            <tr><td><code>.border-s-0</code></td><td>Remove start shadow border</td><td>Yes</td></tr>
            <tr><td><code>.border-e-0</code></td><td>Remove end shadow border</td><td>Yes</td></tr>
          </tbody>
        </table>

        <h3>Native (per-side, affects layout)</h3>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Property</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>.border-native-t</code></td><td><code>border-top</code></td><td>Yes</td></tr>
            <tr><td><code>.border-native-b</code></td><td><code>border-bottom</code></td><td>Yes</td></tr>
            <tr><td><code>.border-native-s</code></td><td><code>border-left</code></td><td>Yes</td></tr>
            <tr><td><code>.border-native-e</code></td><td><code>border-right</code></td><td>Yes</td></tr>
            <tr><td><code>.border-native-x</code></td><td><code>border-inline</code></td><td>Yes</td></tr>
            <tr><td><code>.border-native-y</code></td><td><code>border-block</code></td><td>Yes</td></tr>
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
