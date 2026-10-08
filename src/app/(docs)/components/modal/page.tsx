import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { DismissInit } from "@/components/DismissInit";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Modal",
  description: "A dialog overlay for confirmations, forms, or focused content. Includes header, body, and footer sections.",
};

export default function ModalPage() {
  return (
    <article>
      <DismissInit />
      <section className="docs-section">
        <h1 className="text-display-2">Modal</h1>
        <p className="lead text-subtle">
          A dialog overlay built on the native <code>&lt;dialog&gt;</code>{" "}
          element. The close button floats at the top right. Default border
          radius is 2px — use <code>rounded-*</code> utilities to override.
          Sizes from <code>--sm</code> (400px) to <code>--full</code>.
          Trigger with <code>data-ln-dialog</code> on a button.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Default modal</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<dialog class="ln-modal" data-ln-dismissible open>
  <button class="ln-modal__close" data-ln-dismiss aria-label="Close">&times;</button>
  <div class="ln-modal__header">
    <h3 class="ln-modal__title">Modal title</h3>
  </div>
  <div class="ln-modal__body">
    <p>This is the modal body content. It can contain any markup.</p>
  </div>
  <div class="ln-modal__footer">
    <button class="ln-button ln-button--ghost">Cancel</button>
    <button class="ln-button ln-button--solid">Confirm</button>
  </div>
</dialog>`}</CodeBlock>
          <div className="component-demo__preview">
            <dialog className="ln-modal" data-ln-dismissible open style={{position: "static"}}>
              <button className="ln-modal__close" data-ln-dismiss aria-label="Close">&times;</button>
              <div className="ln-modal__header">
                <h3 className="ln-modal__title">Modal title</h3>
              </div>
              <div className="ln-modal__body">
                <p>This is the modal body content. It can contain any markup.</p>
              </div>
              <div className="ln-modal__footer">
                <button className="ln-button ln-button--ghost">Cancel</button>
                <button className="ln-button ln-button--solid">Confirm</button>
              </div>
            </dialog>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Small modal</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<dialog class="ln-modal ln-modal--sm" data-ln-dismissible open>
  <button class="ln-modal__close" data-ln-dismiss aria-label="Close">&times;</button>
  <div class="ln-modal__header">
    <h3 class="ln-modal__title">Delete item?</h3>
  </div>
  <div class="ln-modal__body">
    <p>This action cannot be undone.</p>
  </div>
  <div class="ln-modal__footer">
    <button class="ln-button ln-button--ghost">Cancel</button>
    <button class="ln-button ln-button--solid ln-button--danger">Delete</button>
  </div>
</dialog>`}</CodeBlock>
          <div className="component-demo__preview">
            <dialog className="ln-modal ln-modal--sm" data-ln-dismissible open style={{position: "static"}}>
              <button className="ln-modal__close" data-ln-dismiss aria-label="Close">&times;</button>
              <div className="ln-modal__header">
                <h3 className="ln-modal__title">Delete item?</h3>
              </div>
              <div className="ln-modal__body">
                <p>This action cannot be undone.</p>
              </div>
              <div className="ln-modal__footer">
                <button className="ln-button ln-button--ghost">Cancel</button>
                <button className="ln-button ln-button--solid ln-button--danger">Delete</button>
              </div>
            </dialog>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Danger modal</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<dialog class="ln-modal ln-modal--danger" data-ln-dismissible open>
  <button class="ln-modal__close" data-ln-dismiss aria-label="Close">&times;</button>
  <div class="ln-modal__header">
    <h3 class="ln-modal__title">Destructive action</h3>
  </div>
  <div class="ln-modal__body">
    <p>Are you sure you want to delete this project? All data will be permanently removed.</p>
  </div>
  <div class="ln-modal__footer">
    <button class="ln-button ln-button--ghost">Cancel</button>
    <button class="ln-button ln-button--solid ln-button--danger">Delete project</button>
  </div>
</dialog>`}</CodeBlock>
          <div className="component-demo__preview">
            <dialog className="ln-modal ln-modal--danger" data-ln-dismissible open style={{position: "static"}}>
              <button className="ln-modal__close" data-ln-dismiss aria-label="Close">&times;</button>
              <div className="ln-modal__header">
                <h3 className="ln-modal__title">Destructive action</h3>
              </div>
              <div className="ln-modal__body">
                <p>Are you sure you want to delete this project? All data will be permanently removed.</p>
              </div>
              <div className="ln-modal__footer">
                <button className="ln-button ln-button--ghost">Cancel</button>
                <button className="ln-button ln-button--solid ln-button--danger">Delete project</button>
              </div>
            </dialog>
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
              <td><code>.ln-modal</code></td>
              <td>Modal container (applied to <code>&lt;dialog&gt;</code>)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-modal__close</code></td>
              <td>Close button</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-modal__header</code></td>
              <td>Header area</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-modal__title</code></td>
              <td>Modal heading</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-modal__body</code></td>
              <td>Scrollable body area</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-modal__footer</code></td>
              <td>Footer with action buttons</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-modal--sm</code></td>
              <td>Small modal (400px max-width)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-modal--md</code></td>
              <td>Medium modal (560px, default)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-modal--lg</code></td>
              <td>Large modal (800px)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-modal--full</code></td>
              <td>Full viewport modal</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-modal--scroll-body</code></td>
              <td>Constrains height with scrollable body</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-modal--center</code></td>
              <td>Centre-align text and actions</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-modal--danger</code></td>
              <td>Danger-coloured title</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
