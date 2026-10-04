import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function GettingStarted() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Getting Started</h1>
        <p className="lead text-subtle">
          Install ln via npm, import the compiled CSS, and add the JS bundle to
          your page.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Installation</h2>
        <p>
          Add ln to your project as a dependency. For local development, use the
          file: protocol to link the local package directly.
        </p>
        <CodeBlock language="shell">npm install ln</CodeBlock>
      </section>

      <section className="docs-section">
        <h2>Usage</h2>
        <p>
          Import the compiled stylesheet at the root of your application. The JS
          bundle is optional — it only adds interactive enhancements.
        </p>
        <CodeBlock language="css">{`import 'ln/dist/styles.css';`}</CodeBlock>
      </section>

      <section className="docs-section">
        <h2>Customisation</h2>
        <p>
          To override the class prefix or design tokens, use the Sass source
          directly via <code>@use</code>:
        </p>
        <CodeBlock language="scss">{`@use 'ln/scss' with (
  $prefix: 'my-',
  $g: 4px
);`}</CodeBlock>
      </section>

      <section className="docs-section">
        <h2>Dark mode</h2>
        <p>
          Colour tokens use <code>light-dark()</code>, so they automatically
          follow the user&apos;s OS preference. To force a theme, add{" "}
          <code>data-theme=&quot;dark&quot;</code> or{" "}
          <code>data-theme=&quot;light&quot;</code> to any ancestor element.
        </p>
        <CodeBlock language="html">{`<!-- force dark on the whole page -->
<html data-theme="dark">…</html>

<!-- light island inside a dark page -->
<section data-theme="light">…</section>`}</CodeBlock>
      </section>
    </article>
  );
}
