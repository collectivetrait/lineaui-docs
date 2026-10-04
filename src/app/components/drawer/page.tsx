import { CodeBlock } from "@/components/CodeBlock";
import { DismissInit } from "@/components/DismissInit";

export default function DrawerPage() {
  return (
    <article>
      <DismissInit />
      <section className="docs-section">
        <h1 className="text-display-2">Drawer</h1>
        <p className="lead text-subtle">
          A slide-in panel built on the native <code>&lt;dialog&gt;</code>{" "}
          element. The close button floats at the top right. Default border
          radius is 2px — use <code>rounded-*</code> utilities to override.
          Slides from the end (right) by default, with{" "}
          <code>--start</code> and <code>--bottom</code> direction modifiers.
        </p>
      </section>

      <section className="docs-section">
        <h2>Default drawer</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<dialog class="ln-drawer" data-ln-dismissible open>
  <button class="ln-drawer__close" data-ln-dismiss aria-label="Close">&times;</button>
  <div class="ln-drawer__header">
    <h3 class="ln-drawer__title">Drawer title</h3>
  </div>
  <div class="ln-drawer__body">
    <p>Drawer body content goes here. It scrolls when the content overflows the available height.</p>
  </div>
  <div class="ln-drawer__footer">
    <button class="ln-button ln-button--ghost">Cancel</button>
    <button class="ln-button ln-button--solid">Save changes</button>
  </div>
</dialog>`}</CodeBlock>
          <div className="component-demo__preview">
            <dialog className="ln-drawer" data-ln-dismissible open style={{position: "static", height: "240px"}}>
              <button className="ln-drawer__close" data-ln-dismiss aria-label="Close">&times;</button>
              <div className="ln-drawer__header">
                <h3 className="ln-drawer__title">Drawer title</h3>
              </div>
              <div className="ln-drawer__body">
                <p>Drawer body content goes here. It scrolls when the content overflows the available height.</p>
              </div>
              <div className="ln-drawer__footer">
                <button className="ln-button ln-button--ghost">Cancel</button>
                <button className="ln-button ln-button--solid">Save changes</button>
              </div>
            </dialog>
          </div>
        </div>
      </section>
    </article>
  );
}
