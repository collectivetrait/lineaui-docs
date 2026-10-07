import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function PointerEventsUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Pointer events</h1>
        <p className="lead text-subtle">
          Pointer-event utilities control whether an element reacts to pointer
          interactions. Use <code>pointer-none</code> to make an element
          click-through and <code>pointer-auto</code> to restore default
          behavior.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Disabling pointer events</h2>
        <p>
          Apply <code>pointer-none</code> to prevent an element from receiving
          any pointer interaction — clicks, hovers and cursors pass through to
          whatever is behind it.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<a href="#" class="ln-button pointer-none">Disabled link</a>
<a href="#" class="ln-button">Normal link</a>`}</CodeBlock>
          <div className="component-demo__preview">
            <a href="#" className="ln-button pointer-none">Disabled link</a>
            <a href="#" className="ln-button">Normal link</a>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Restoring pointer events</h2>
        <p>
          Use <code>pointer-auto</code> on a child to re-enable interaction
          inside a <code>pointer-none</code> parent.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="pointer-none border p-3 mb-3">
  <p class="mb-2">This text is click-through.</p>
  <a href="#" class="ln-button pointer-auto">But this button works</a>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="pointer-none border p-3 mb-3">
              <p className="mb-2">This text is click-through.</p>
              <a href="#" className="ln-button pointer-auto">But this button works</a>
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
              <th>Property</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>.pointer-none</code></td><td><code>pointer-events: none</code></td><td>No</td></tr>
            <tr><td><code>.pointer-auto</code></td><td><code>pointer-events: auto</code></td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
