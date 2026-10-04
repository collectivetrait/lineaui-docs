import { CodeBlock } from "@/components/CodeBlock";
import { DismissInit } from "@/components/DismissInit";

export default function AlertPage() {
  return (
    <article>
      <DismissInit />
      <section className="docs-section">
        <h1 className="text-display-2">Alert</h1>
        <p className="lead text-subtle">
          Contextual message banners with icon, content, and optional dismiss button.
          Style variants: <code>--subtle</code> (default), <code>--accent</code>,
          <code>--solid</code>, <code>--outline</code>. Accepts role modifiers for
          info, success, warning, and danger.
        </p>
      </section>

      <section className="docs-section">
        <h2>Roles</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-alert ln-alert--info">
  <div class="ln-alert__content">
    <div class="ln-alert__title">Information</div>
    <div class="ln-alert__body">This is an informational message.</div>
  </div>
</div>
<div class="ln-alert ln-alert--success">
  <div class="ln-alert__content">
    <div class="ln-alert__title">Success</div>
    <div class="ln-alert__body">Your changes have been saved.</div>
  </div>
</div>
<div class="ln-alert ln-alert--warning">
  <div class="ln-alert__content">
    <div class="ln-alert__title">Warning</div>
    <div class="ln-alert__body">Please review before proceeding.</div>
  </div>
</div>
<div class="ln-alert ln-alert--danger">
  <div class="ln-alert__content">
    <div class="ln-alert__title">Error</div>
    <div class="ln-alert__body">Something went wrong. Please try again.</div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex flex-column gap-2">
              <div className="ln-alert ln-alert--info">
                <div className="ln-alert__content">
                  <div className="ln-alert__title">Information</div>
                  <div className="ln-alert__body">This is an informational message.</div>
                </div>
              </div>
              <div className="ln-alert ln-alert--success">
                <div className="ln-alert__content">
                  <div className="ln-alert__title">Success</div>
                  <div className="ln-alert__body">Your changes have been saved.</div>
                </div>
              </div>
              <div className="ln-alert ln-alert--warning">
                <div className="ln-alert__content">
                  <div className="ln-alert__title">Warning</div>
                  <div className="ln-alert__body">Please review before proceeding.</div>
                </div>
              </div>
              <div className="ln-alert ln-alert--danger">
                <div className="ln-alert__content">
                  <div className="ln-alert__title">Error</div>
                  <div className="ln-alert__body">Something went wrong. Please try again.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Accent variant</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-alert ln-alert--accent ln-alert--info">
  <div class="ln-alert__content">
    <div class="ln-alert__title">Tip</div>
    <div class="ln-alert__body">The accent variant adds a colored left border.</div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-alert ln-alert--accent ln-alert--info">
              <div className="ln-alert__content">
                <div className="ln-alert__title">Tip</div>
                <div className="ln-alert__body">The accent variant adds a colored left border.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Dismissible</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-alert ln-alert--success" data-ln-dismissible>
  <div class="ln-alert__content">
    <div class="ln-alert__title">Saved</div>
    <div class="ln-alert__body">Your profile has been updated.</div>
  </div>
  <button class="ln-alert__dismiss" data-ln-dismiss aria-label="Dismiss">&times;</button>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-alert ln-alert--success" data-ln-dismissible>
              <div className="ln-alert__content">
                <div className="ln-alert__title">Saved</div>
                <div className="ln-alert__body">Your profile has been updated.</div>
              </div>
              <button className="ln-alert__dismiss" data-ln-dismiss aria-label="Dismiss">&times;</button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
