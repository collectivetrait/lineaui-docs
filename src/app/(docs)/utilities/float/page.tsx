import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function FloatUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Float</h1>
        <p className="lead text-subtle">
          Float utilities position an element to the left or right of its
          container, allowing inline content to wrap around it.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Float classes</h2>
        <p>
          Use <code>float-start</code> to float left, <code>float-end</code>{" "}
          to float right, and <code>float-none</code> to clear float.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="border rounded-sm p-2 mb-3">
  <div class="float-start bg-surface-raised rounded-sm p-2 me-2 mb-1">float-start</div>
  <p>This text wraps around the floated element on the left side. The float-start utility positions the element to the inline start edge.</p>
</div>

<div class="border rounded-sm p-2 mb-3">
  <div class="float-end bg-surface-raised rounded-sm p-2 ms-2 mb-1">float-end</div>
  <p>This text wraps around the floated element on the right side. The float-end utility positions the element to the inline end edge.</p>
</div>

<div class="border rounded-sm p-2">
  <div class="float-none bg-surface-raised rounded-sm p-2 mb-1">float-none</div>
  <p>This element is not floated. The float-none utility clears any inherited float.</p>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border rounded-sm p-2 mb-3">
              <div className="float-start bg-surface-raised rounded-sm p-2 me-2 mb-1">float-start</div>
              <p>This text wraps around the floated element on the left side. The float-start utility positions the element to the inline start edge.</p>
            </div>
            <div className="border rounded-sm p-2 mb-3">
              <div className="float-end bg-surface-raised rounded-sm p-2 ms-2 mb-1">float-end</div>
              <p>This text wraps around the floated element on the right side. The float-end utility positions the element to the inline end edge.</p>
            </div>
            <div className="border rounded-sm p-2">
              <div className="float-none bg-surface-raised rounded-sm p-2 mb-1">float-none</div>
              <p>This element is not floated. The float-none utility clears any inherited float.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive</h2>
        <p>
          Add breakpoint suffixes for responsive behavior:{" "}
          <code>.float-start@sm</code>, <code>.float-end@md</code>,{" "}
          <code>.float-none@lg</code>, <code>.float-*@xl</code>,{" "}
          <code>.float-*@2xl</code>.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="border rounded-sm p-2">
  <div class="float-none float-end@md bg-surface-raised rounded-sm p-2 ms-2 mb-1">Floats right from md up</div>
  <p>On small screens this element sits in normal flow. From the md breakpoint upward it floats to the end edge.</p>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border rounded-sm p-2">
              <div className="float-none float-end@md bg-surface-raised rounded-sm p-2 ms-2 mb-1">Floats right from md up</div>
              <p>On small screens this element sits in normal flow. From the md breakpoint upward it floats to the end edge.</p>
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
            <tr><td><code>.float-start</code></td><td><code>float: left</code></td><td>Yes</td></tr>
            <tr><td><code>.float-end</code></td><td><code>float: right</code></td><td>Yes</td></tr>
            <tr><td><code>.float-none</code></td><td><code>float: none</code></td><td>Yes</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
