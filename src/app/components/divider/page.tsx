import { CodeBlock } from "@/components/CodeBlock";

export default function DividerPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Divider</h1>
        <p className="lead text-subtle">
          A horizontal or vertical separator line. Uses{" "}
          <code>border-top</code> for rhythm-safe rendering. Supports
          labels, vertical orientation, and spacing modifiers.
        </p>
      </section>

      <section className="docs-section">
        <h2>Default horizontal</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<p>Content above the divider.</p>
<hr class="ln-divider" />
<p>Content below the divider.</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p>Content above the divider.</p>
            <hr className="ln-divider" />
            <p>Content below the divider.</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>With label</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-divider">
  <span class="ln-divider__label">Or continue with</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-divider">
              <span className="ln-divider__label">Or continue with</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Vertical</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="d-flex align-items-center gap-3" style="height:48px">
  <span>Left</span>
  <div class="ln-divider ln-divider--vertical"></div>
  <span>Right</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-3" style={{ height: "48px" }}>
              <span>Left</span>
              <div className="ln-divider ln-divider--vertical"></div>
              <span>Right</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Strong variant</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<hr class="ln-divider ln-divider--strong" />`}</CodeBlock>
          <div className="component-demo__preview">
            <hr className="ln-divider ln-divider--strong" />
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Spacing modifiers</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<p>Content above medium spacing.</p>
<hr class="ln-divider ln-divider--space-md" />
<p>Content above large spacing.</p>
<hr class="ln-divider ln-divider--space-lg" />
<p>Content above extra-large spacing.</p>
<hr class="ln-divider ln-divider--space-xl" />
<p>Content below extra-large spacing.</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p>Content above medium spacing.</p>
            <hr className="ln-divider ln-divider--space-md" />
            <p>Content above large spacing.</p>
            <hr className="ln-divider ln-divider--space-lg" />
            <p>Content above extra-large spacing.</p>
            <hr className="ln-divider ln-divider--space-xl" />
            <p>Content below extra-large spacing.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
