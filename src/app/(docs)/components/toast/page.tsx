import { CodeBlock } from "@/components/CodeBlock";
import { DismissInit } from "@/components/DismissInit";
import { TableOfContents } from "@/components/TableOfContents";

export default function ToastPage() {
  return (
    <article>
      <DismissInit />
      <section className="docs-section">
        <h1 className="text-display-2">Toast</h1>
        <p className="lead text-subtle">
          Ephemeral notifications that appear in a fixed-position region.
          Each toast has a title, optional body, close button, and timer bar.
          Width is constrained between <code>min-width: 300px</code> and{" "}
          <code>max-width: 420px</code>.
          The <code>--solid</code> variant uses a filled background. In production,
          toasts are created via <code>Toast.show()</code> in JavaScript.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Default toast</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-toast ln-toast--success border" role="alert" data-ln-dismissible>
  <div class="ln-toast__content">
    <div class="ln-toast__title">Changes saved</div>
    <div class="ln-toast__body">Your profile has been updated successfully.</div>
  </div>
  <button class="ln-toast__close" data-ln-dismiss aria-label="Close">&times;</button>
  <div class="ln-toast__timer" style="width: 70%"></div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-toast ln-toast--success border" role="alert" data-ln-dismissible>
              <div className="ln-toast__content">
                <div className="ln-toast__title">Changes saved</div>
                <div className="ln-toast__body">Your profile has been updated successfully.</div>
              </div>
              <button className="ln-toast__close" data-ln-dismiss aria-label="Close">&times;</button>
              <div className="ln-toast__timer" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Solid variant</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-toast ln-toast--solid ln-toast--danger" role="alert" data-ln-dismissible>
  <div class="ln-toast__content">
    <div class="ln-toast__title">Error</div>
    <div class="ln-toast__body">Failed to save changes. Please try again.</div>
  </div>
  <button class="ln-toast__close" data-ln-dismiss aria-label="Close">&times;</button>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-toast ln-toast--solid ln-toast--danger" role="alert" data-ln-dismissible>
              <div className="ln-toast__content">
                <div className="ln-toast__title">Error</div>
                <div className="ln-toast__body">Failed to save changes. Please try again.</div>
              </div>
              <button className="ln-toast__close" data-ln-dismiss aria-label="Close">&times;</button>
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
            <tr><td><code>.ln-toast</code></td><td>Toast notification container</td><td>No</td></tr>
            <tr><td><code>.ln-toast__icon</code></td><td>Leading status icon</td><td>No</td></tr>
            <tr><td><code>.ln-toast__content</code></td><td>Body content wrapper</td><td>No</td></tr>
            <tr><td><code>.ln-toast__title</code></td><td>Toast title</td><td>No</td></tr>
            <tr><td><code>.ln-toast__body</code></td><td>Toast body text</td><td>No</td></tr>
            <tr><td><code>.ln-toast__action</code></td><td>Action button area</td><td>No</td></tr>
            <tr><td><code>.ln-toast__close</code></td><td>Dismiss button</td><td>No</td></tr>
            <tr><td><code>.ln-toast__timer</code></td><td>Auto-dismiss progress bar</td><td>No</td></tr>
            <tr><td><code>.ln-toast--solid</code></td><td>Filled background variant</td><td>No</td></tr>
            <tr><td><code>.ln-toast-region</code></td><td>Fixed-position toast container</td><td>No</td></tr>
            <tr><td><code>.ln-toast-region--top-start</code></td><td>Position: top left</td><td>No</td></tr>
            <tr><td><code>.ln-toast-region--top-center</code></td><td>Position: top centre</td><td>No</td></tr>
            <tr><td><code>.ln-toast-region--top-end</code></td><td>Position: top right</td><td>No</td></tr>
            <tr><td><code>.ln-toast-region--bottom-start</code></td><td>Position: bottom left</td><td>No</td></tr>
            <tr><td><code>.ln-toast-region--bottom-center</code></td><td>Position: bottom centre</td><td>No</td></tr>
            <tr><td><code>.ln-toast-region--bottom-end</code></td><td>Position: bottom right</td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
