import { CodeBlock } from "@/components/CodeBlock";

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

      <section className="docs-section">
        <h2>Default figure</h2>
        <p>
          The <code>&lt;figure&gt;</code> element receives zero inline margin
          and a block margin of one rhythm line (24px). The{" "}
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
        <h2>Base styles reference</h2>
        <p>
          These styles are set in <code>base/_media.scss</code> inside{" "}
          <code>@layer base</code>.
        </p>
        <CodeBlock language="css">{`/* Applied automatically — no classes needed */
figure {
  margin-inline: 0;
  margin-block: 24px; /* one rhythm line */
}

figcaption {
  font-family: var(--font-ui);
  font-size: var(--type-body-sm-size);
  line-height: var(--type-body-sm-lh);
  color: var(--text-muted);
  margin-block-start: var(--space-1); /* 8px */
}`}</CodeBlock>
      </section>
    </article>
  );
}
