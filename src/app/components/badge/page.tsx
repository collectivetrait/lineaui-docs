import { CodeBlock } from "@/components/CodeBlock";

export default function BadgePage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Badge</h1>
        <p className="lead text-subtle">
          Small inline status labels. Default style is subtle with a tinted
          background. Variants include <code>--solid</code>, <code>--outline</code>,
          and <code>--count</code>. Add a <code>__dot</code> element for a
          colored status indicator. Accepts role modifiers.
        </p>
      </section>

      <section className="docs-section">
        <h2>Variants</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<span class="ln-badge ln-badge--primary">Subtle</span>
<span class="ln-badge ln-badge--solid ln-badge--primary">Solid</span>
<span class="ln-badge ln-badge--outline ln-badge--primary">Outline</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <span className="ln-badge ln-badge--primary">Subtle</span>
              <span className="ln-badge ln-badge--solid ln-badge--primary">Solid</span>
              <span className="ln-badge ln-badge--outline ln-badge--primary">Outline</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Roles</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<span class="ln-badge ln-badge--success">Success</span>
<span class="ln-badge ln-badge--warning">Warning</span>
<span class="ln-badge ln-badge--danger">Danger</span>
<span class="ln-badge ln-badge--info">Info</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <span className="ln-badge ln-badge--success">Success</span>
              <span className="ln-badge ln-badge--warning">Warning</span>
              <span className="ln-badge ln-badge--danger">Danger</span>
              <span className="ln-badge ln-badge--info">Info</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Dotted badges</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<span class="ln-badge ln-badge--success"><span class="ln-badge__dot"></span>Online</span>
<span class="ln-badge ln-badge--warning"><span class="ln-badge__dot"></span>Away</span>
<span class="ln-badge ln-badge--danger"><span class="ln-badge__dot"></span>Offline</span>
<span class="ln-badge"><span class="ln-badge__dot"></span>Neutral</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <span className="ln-badge ln-badge--success"><span className="ln-badge__dot"></span>Online</span>
              <span className="ln-badge ln-badge--warning"><span className="ln-badge__dot"></span>Away</span>
              <span className="ln-badge ln-badge--danger"><span className="ln-badge__dot"></span>Offline</span>
              <span className="ln-badge"><span className="ln-badge__dot"></span>Neutral</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Count</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<span class="ln-badge ln-badge--count ln-badge--solid ln-badge--danger">42</span>
<span class="ln-badge ln-badge--count ln-badge--primary">8</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <span className="ln-badge ln-badge--count ln-badge--solid ln-badge--danger">42</span>
              <span className="ln-badge ln-badge--count ln-badge--primary">8</span>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
