import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Code",
  description: "Styling for inline code and code blocks. Includes syntax highlighting integration and copy-to-clipboard support.",
};

export default function CodePage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Code</h1>
        <p className="lead text-subtle">
          A structured code container with an optional header bar showing
          filename, language badge, and copy button. Syntax tokens are
          defined as custom properties so any highlighter can use them.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Default</h2>
        <div className="component-demo shadow-2">
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
        <div className="component-demo shadow-2">
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

      <section className="docs-section">
        <h2>Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>.ln-code</code></td>
              <td>Code block container with syntax highlighting</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-code__header</code></td>
              <td>File name and language label bar</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-code__lang</code></td>
              <td>Language label in the header</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-code__body</code></td>
              <td>Scrollable code area (<code>&lt;pre&gt;</code>)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-code__line</code></td>
              <td>Individual line with line number</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-code__line--highlight</code></td>
              <td>Highlighted line with accent border</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-code--wrap</code></td>
              <td>Enable word wrapping</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-code--flush</code></td>
              <td>Remove border-radius and bottom margin</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
