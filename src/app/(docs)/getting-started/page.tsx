import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function GettingStarted() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Introduction</h1>
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
        <div className="component-demo shadow-2">
        <CodeBlock language="shell">npm install ln</CodeBlock>
        </div>
      </section>

      <section className="docs-section">
        <h2>Usage</h2>
        <p>
          Import the compiled stylesheet at the root of your application. The JS
          bundle is optional — it only adds interactive enhancements.
        </p>
        <div className="component-demo shadow-2">
        <CodeBlock language="css">{`import 'ln/dist/styles.css';`}</CodeBlock>
        </div>
      </section>
    </article>
  );
}
