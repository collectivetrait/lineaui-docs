import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Text",
  description: "Utility classes for text size, alignment, wrapping, and decoration in Linea UI.",
};

export default function TextPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Text</h1>
        <p className="lead text-subtle">
          Utility classes for text size, alignment, wrapping, and decoration.
          Text size and alignment support responsive breakpoint suffixes.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Text size</h2>
        <p>
          Size utilities apply a scale step to any element without changing
          the font family. Use <code>.text-body-lg</code>,{" "}
          <code>.text-body-sm</code>, <code>.text-body-xs</code>, and{" "}
          <code>.text-meta</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<p class="text-body-lg mb-3">text-body-lg — 18px / 24px</p>
<p class="text-body-sm mb-3">text-body-sm — 14px / 24px</p>
<p class="text-body-xs mb-3">text-body-xs — 12px / 16px</p>
<p class="text-meta">text-meta — 12px / 16px, mono font</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="text-body-lg mb-3">text-body-lg — 18px / 24px</p>
            <p className="text-body-sm mb-3">text-body-sm — 14px / 24px</p>
            <p className="text-body-xs mb-3">text-body-xs — 12px / 16px</p>
            <p className="text-meta">text-meta — 12px / 16px, mono font</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive text size</h2>
        <p>
          Combine a base size with a responsive override. The suffixed class
          applies from the named breakpoint upward.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<p class="text-body-sm text-body-lg@md mb-3">Small on mobile, large from md up</p>
<p class="text-meta text-body-lg@lg">Meta on mobile, large from lg up</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="text-body-sm text-body-lg@md mb-3">Small on mobile, large from md up</p>
            <p className="text-meta text-body-lg@lg">Meta on mobile, large from lg up</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Text alignment</h2>
        <p>
          Use <code>.text-start</code>, <code>.text-center</code>, and{" "}
          <code>.text-end</code> to control text alignment. These utilities
          support responsive suffixes (<code>@sm</code>, <code>@md</code>,{" "}
          <code>@lg</code>, <code>@xl</code>, <code>@2xl</code>).
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<p class="text-start border p-2 mb-3">Left-aligned text (default).</p>
<p class="text-center border p-2 mb-3">Centre-aligned text.</p>
<p class="text-end border p-2">Right-aligned text.</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="text-start border p-2 mb-3">Left-aligned text (default).</p>
            <p className="text-center border p-2 mb-3">Centre-aligned text.</p>
            <p className="text-end border p-2">Right-aligned text.</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive text alignment</h2>
        <p>
          Combine a base alignment with a responsive override. The suffixed
          class applies from the named breakpoint upward.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Left on mobile, centred from md up -->
<p class="text-start text-center@md border p-2 mb-3">Centred from md up.</p>

<!-- Centred by default, right-aligned from lg up -->
<p class="text-center text-end@lg border p-2">Right-aligned from lg up.</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="text-start text-center@md border p-2 mb-3">Centred from md up.</p>
            <p className="text-center text-end@lg border p-2">Right-aligned from lg up.</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Text wrapping</h2>
        <p>
          Control how text wraps within its container. These utilities are not
          responsive.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<p class="text-wrap border p-2 mb-3">Text with default wrapping behaviour.</p>
<p class="text-nowrap border p-2 mb-3">Text that will not wrap to a new line.</p>
<p class="text-balance border p-2 mb-3">Text balanced across lines for even line lengths.</p>
<p class="text-pretty border p-2">Text with optimised line breaks to avoid orphans.</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="text-wrap border p-2 mb-3">Text with default wrapping behaviour.</p>
            <p className="text-nowrap border p-2 mb-3">Text that will not wrap to a new line.</p>
            <p className="text-balance border p-2 mb-3">Text balanced across lines for even line lengths.</p>
            <p className="text-pretty border p-2">Text with optimised line breaks to avoid orphans.</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Text decoration</h2>
        <p>
          Override or remove text decoration. Useful for removing underlines
          from links or adding strikethrough to deleted content.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<a href="#" class="text-decoration-none mb-3 d-block">Link with no underline</a>
<span class="text-decoration-underline mb-3 d-block">Underlined text</span>
<span class="text-decoration-line-through">Struck-through text</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <a href="#" className="text-decoration-none mb-3 d-block">Link with no underline</a>
            <span className="text-decoration-underline mb-3 d-block">Underlined text</span>
            <span className="text-decoration-line-through">Struck-through text</span>
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
            <tr>
              <td><code>.text-body-lg</code></td>
              <td><code>font-size: var(--t-body-lg-s)</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.text-body-sm</code></td>
              <td><code>font-size: var(--t-body-sm-s)</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.text-body-xs</code></td>
              <td><code>font-size: var(--t-body-xs-s)</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.text-meta</code></td>
              <td><code>font-size: var(--t-meta-s)</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.text-start</code></td>
              <td><code>text-align: start</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.text-center</code></td>
              <td><code>text-align: center</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.text-end</code></td>
              <td><code>text-align: end</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.text-wrap</code></td>
              <td><code>text-wrap: wrap</code></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.text-nowrap</code></td>
              <td><code>text-wrap: nowrap</code></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.text-balance</code></td>
              <td><code>text-wrap: balance</code></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.text-pretty</code></td>
              <td><code>text-wrap: pretty</code></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.text-decoration-none</code></td>
              <td><code>text-decoration: none</code></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.text-decoration-underline</code></td>
              <td><code>text-decoration: underline</code></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.text-decoration-line-through</code></td>
              <td><code>text-decoration: line-through</code></td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
