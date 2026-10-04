import { CodeBlock } from "@/components/CodeBlock";

export default function ProsePage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Prose</h1>
        <p className="lead text-subtle">
          A descendant-styling wrapper for CMS and markdown content. It sets
          the prose font, applies consistent spacing, and maps WordPress
          alignment classes. No BEM elements — it styles all child HTML.
        </p>
      </section>

      <section className="docs-section">
        <h2>Default</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-prose">
  <h2>The vertical rhythm system</h2>
  <p>The library runs on two nested grids: a base grid of 8px for every box,
     and a line grid of 24px that every line of text sits on.</p>
  <ul>
    <li>Line-heights are whole lines</li>
    <li>Boxes sit on the base grid</li>
    <li>Borders never add height</li>
  </ul>
  <blockquote>
    <p>Every vertical measurement lands on an 8px grid.</p>
  </blockquote>
  <p>Inline elements like <code>code</code>, <strong>bold</strong>, and
     <em>italic</em> are styled by the base layer and work inside prose.</p>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-prose">
              <h2>The vertical rhythm system</h2>
              <p>The library runs on two nested grids: a base grid of 8px for every box,
                 and a line grid of 24px that every line of text sits on.</p>
              <ul>
                <li>Line-heights are whole lines</li>
                <li>Boxes sit on the base grid</li>
                <li>Borders never add height</li>
              </ul>
              <blockquote>
                <p>Every vertical measurement lands on an 8px grid.</p>
              </blockquote>
              <p>Inline elements like <code>code</code>, <strong>bold</strong>, and <em>italic</em> are styled by the base layer and work inside prose.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>UI variant</h2>
        <p>
          The <code>--ui</code> modifier switches to the sans-serif font for
          help text and documentation contexts.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-prose ln-prose--ui">
  <p>This prose block uses the system sans-serif font instead of the
     default serif stack. Useful for documentation and help text.</p>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-prose ln-prose--ui">
              <p>This prose block uses the system sans-serif font instead of the
                 default serif stack. Useful for documentation and help text.</p>
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
              <td><code>.ln-prose</code></td>
              <td>Long-form content wrapper (serif font, prose measure)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-prose--sm</code></td>
              <td>Smaller body text size</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-prose--lg</code></td>
              <td>Larger body text size</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-prose--ui</code></td>
              <td>Sans-serif font instead of serif</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-prose--wide-media</code></td>
              <td>Allow images and figures to break out to container width</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
