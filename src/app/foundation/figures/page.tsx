import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function FiguresPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Figures</h1>
        <p className="lead text-subtle">
          Base styling for the <code>&lt;figure&gt;</code> and{" "}
          <code>&lt;figcaption&gt;</code> elements. No classes required — the
          base layer applies sensible defaults automatically.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Default figure</h2>
        <p>
          The <code>&lt;figure&gt;</code> element receives zero top and inline
          margins and a bottom margin of one rhythm line (24px), removed when
          it is the last child of its container. The{" "}
          <code>&lt;figcaption&gt;</code> uses the UI font at small body size
          with muted colour and an 8px top margin.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<figure>
  <img src="/placeholder.svg" alt="Example figure image">
  <figcaption>A descriptive caption for the image above.</figcaption>
</figure>`}</CodeBlock>
          <div className="component-demo__preview">
            <figure>
              <img src="/placeholder.svg" alt="Example figure image" />
              <figcaption>A descriptive caption for the image above.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Figure with code</h2>
        <p>
          Figures can wrap any block content, not just images. Use them to
          annotate code samples, diagrams, or embedded content.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<figure>
  <pre><code>@use 'ln/scss' with ($prefix: 'my-');</code></pre>
  <figcaption>Importing the library with a custom prefix.</figcaption>
</figure>`}</CodeBlock>
          <div className="component-demo__preview">
            <figure>
              <pre><code>{"@use 'ln/scss' with ($prefix: 'my-');"}</code></pre>
              <figcaption>Importing the library with a custom prefix.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Property</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>figure</code></td>
              <td><code>margin-top: 0</code></td>
            </tr>
            <tr>
              <td><code>figure</code></td>
              <td><code>margin-bottom: 24px</code> (0 when last child)</td>
            </tr>
            <tr>
              <td><code>figure</code></td>
              <td><code>margin-inline: 0</code></td>
            </tr>
            <tr>
              <td><code>figcaption</code></td>
              <td><code>font-family: var(--font-ui)</code></td>
            </tr>
            <tr>
              <td><code>figcaption</code></td>
              <td><code>font-size: var(--type-body-sm-size)</code></td>
            </tr>
            <tr>
              <td><code>figcaption</code></td>
              <td><code>line-height: var(--type-body-sm-lh)</code></td>
            </tr>
            <tr>
              <td><code>figcaption</code></td>
              <td><code>color: var(--text-muted)</code></td>
            </tr>
            <tr>
              <td><code>figcaption</code></td>
              <td><code>margin-top: var(--space-1)</code></td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
