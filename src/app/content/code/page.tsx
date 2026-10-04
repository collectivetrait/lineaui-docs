import { CodeBlock } from "@/components/CodeBlock";

export default function CodePage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Code block</h1>
        <p className="lead text-subtle">
          A structured code container with an optional header bar showing
          filename, language badge, and copy button. Syntax tokens are
          defined as custom properties so any highlighter can use them.
        </p>
      </section>

      <section className="docs-section">
        <h2>Default</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-code">
  <div class="ln-code__header">
    <span class="ln-code__filename">index.js</span>
    <span class="ln-code__lang">JS</span>
  </div>
  <pre class="ln-code__body"><code>function greet(name) {
  return \`Hello, \${name}!\`;
}

export default greet;</code></pre>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-code">
              <div className="ln-code__header">
                <span className="ln-code__filename">index.js</span>
                <span className="ln-code__lang">JS</span>
              </div>
              <pre className="ln-code__body"><code>{`function greet(name) {
  return \`Hello, \${name}!\`;
}

export default greet;`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Flush variant</h2>
        <p>
          The <code>--flush</code> modifier removes border-radius and bottom
          margin for embedding inside other containers.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-code ln-code--flush">
  <pre class="ln-code__body"><code>npm install ln</code></pre>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-code ln-code--flush">
              <pre className="ln-code__body"><code>npm install ln</code></pre>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
