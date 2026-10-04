import { CodeBlock } from "@/components/CodeBlock";

export default function FontsPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Font utilities</h1>
        <p className="lead text-subtle">
          Utility classes for font weight, font style, and font family. These
          override any inherited or component-level font settings.
        </p>
      </section>

      <section className="docs-section">
        <h2>Font weight</h2>
        <p>
          Set the weight of any text element. Use <code>.fw-normal</code> (400),{" "}
          <code>.fw-medium</code> (500), or <code>.fw-semibold</code> (600).
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<p class="fw-normal mb-3">Normal weight (400)</p>
<p class="fw-medium mb-3">Medium weight (500)</p>
<p class="fw-semibold">Semibold weight (600)</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="fw-normal mb-3">Normal weight (400)</p>
            <p className="fw-medium mb-3">Medium weight (500)</p>
            <p className="fw-semibold">Semibold weight (600)</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Font style</h2>
        <p>
          Toggle italic rendering. Use <code>.fs-normal</code> to reset an
          inherited italic, or <code>.fs-italic</code> to apply it.
        </p>
        <div className="component-demo">
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
        <div className="component-demo">
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
        <h2>Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>.fw-normal</code></td>
              <td><code>font-weight</code></td>
              <td>400</td>
            </tr>
            <tr>
              <td><code>.fw-medium</code></td>
              <td><code>font-weight</code></td>
              <td>500</td>
            </tr>
            <tr>
              <td><code>.fw-semibold</code></td>
              <td><code>font-weight</code></td>
              <td>600</td>
            </tr>
            <tr>
              <td><code>.fs-normal</code></td>
              <td><code>font-style</code></td>
              <td>normal</td>
            </tr>
            <tr>
              <td><code>.fs-italic</code></td>
              <td><code>font-style</code></td>
              <td>italic</td>
            </tr>
            <tr>
              <td><code>.font-prose</code></td>
              <td><code>font-family</code></td>
              <td><code>var(--font-prose)</code></td>
            </tr>
            <tr>
              <td><code>.font-ui</code></td>
              <td><code>font-family</code></td>
              <td><code>var(--font-ui)</code></td>
            </tr>
            <tr>
              <td><code>.font-mono</code></td>
              <td><code>font-family</code></td>
              <td><code>var(--font-mono)</code></td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
