import { CodeBlock } from "@/components/CodeBlock";
import { DismissInit } from "@/components/DismissInit";

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

      <section className="docs-section">
        <h2>Default modal</h2>
        <div className="component-demo">
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
        <div className="component-demo">
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
        <div className="component-demo">
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
    </article>
  );
}
