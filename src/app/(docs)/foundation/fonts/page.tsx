import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Fonts",
  description: "Utility classes for font weight, font style, and font family in Linea UI.",
};

export default function FontsPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Fonts</h1>
        <p className="lead text-subtle">
          Utility classes for font weight, font style, and font family. These
          override any inherited or component-level font settings.
        </p>
      </section>

      <TableOfContents />


      <section className="docs-section">
        <h2>Font weight</h2>
        <p>
          Set the weight of any text element. Use <code>.fw-normal</code> (400),{" "}
          <code>.fw-medium</code> (500), <code>.fw-semibold</code> (600), or{" "}
          <code>.fw-bold</code> (700).
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<p class="fw-normal mb-3">Normal weight (400)</p>
<p class="fw-medium mb-3">Medium weight (500)</p>
<p class="fw-semibold mb-3">Semibold weight (600)</p>
<p class="fw-bold">Bold weight (700)</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="fw-normal mb-3">Normal weight (400)</p>
            <p className="fw-medium mb-3">Medium weight (500)</p>
            <p className="fw-semibold mb-3">Semibold weight (600)</p>
            <p className="fw-bold">Bold weight (700)</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Font style</h2>
        <p>
          Toggle italic rendering. Use <code>.fs-normal</code> to reset an
          inherited italic, or <code>.fs-italic</code> to apply it.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<p class="fs-normal mb-3">Normal style text</p>
<p class="fs-italic">Italic style text</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="fs-normal mb-3">Normal style text</p>
            <p className="fs-italic">Italic style text</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Font family</h2>
        <p>
          Switch the font stack on any element. The three families map to the
          library's font-role tokens: <code>.font-prose</code> for serif
          headings and editorial text, <code>.font-ui</code> for sans-serif
          body and interface text, and <code>.font-mono</code> for code and
          tabular data.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<p class="font-prose mb-3">Prose font — Charter, Bitstream Charter, serif</p>
<p class="font-ui mb-3">UI font — Inter, Roboto, sans-serif</p>
<p class="font-mono">Mono font — ui-monospace, Cascadia Code, monospace</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="font-prose mb-3">Prose font — Charter, Bitstream Charter, serif</p>
            <p className="font-ui mb-3">UI font — Inter, Roboto, sans-serif</p>
            <p className="font-mono">Mono font — ui-monospace, Cascadia Code, monospace</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive</h2>
        <p>
          All font utilities support responsive breakpoint suffixes:{" "}
          <code>@sm</code>, <code>@md</code>, <code>@lg</code>,{" "}
          <code>@xl</code>, <code>@2xl</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<p class="fw-normal fw-bold@md mb-3">Normal weight on mobile, bold from md up</p>
<p class="fs-normal fs-italic@lg mb-3">Normal style on mobile, italic from lg up</p>
<p class="font-ui font-mono@md">UI font on mobile, mono from md up</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="fw-normal fw-bold@md mb-3">Normal weight on mobile, bold from md up</p>
            <p className="fs-normal fs-italic@lg mb-3">Normal style on mobile, italic from lg up</p>
            <p className="font-ui font-mono@md">UI font on mobile, mono from md up</p>
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
              <td><code>.fw-normal</code></td>
              <td><code>font-weight: 400</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.fw-medium</code></td>
              <td><code>font-weight: 500</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.fw-semibold</code></td>
              <td><code>font-weight: 600</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.fw-bold</code></td>
              <td><code>font-weight: 700</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.fs-normal</code></td>
              <td><code>font-style: normal</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.fs-italic</code></td>
              <td><code>font-style: italic</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.font-prose</code></td>
              <td><code>font-family: var(--f-prose)</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.font-ui</code></td>
              <td><code>font-family: var(--f-ui)</code></td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.font-mono</code></td>
              <td><code>font-family: var(--f-mono)</code></td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
