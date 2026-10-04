import { CodeBlock } from "@/components/CodeBlock";

export default function SpinnerPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Spinner</h1>
        <p className="lead text-subtle">
          A CSS-only loading indicator. Defaults to <code>currentColor</code> and
          24px. Three sizes: <code>--sm</code> (16px), <code>--md</code> (24px),
          and <code>--lg</code> (32px). Role modifiers set the spinner color.
        </p>
      </section>

      <section className="docs-section">
        <h2>Sizes</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<span class="ln-spinner ln-spinner--sm"></span>
<span class="ln-spinner"></span>
<span class="ln-spinner ln-spinner--lg"></span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-3">
              <span className="ln-spinner ln-spinner--sm"></span>
              <span className="ln-spinner"></span>
              <span className="ln-spinner ln-spinner--lg"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Spinner role colors</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<span class="ln-spinner ln-spinner--primary"></span>
<span class="ln-spinner ln-spinner--success"></span>
<span class="ln-spinner ln-spinner--danger"></span>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-3">
              <span className="ln-spinner ln-spinner--primary"></span>
              <span className="ln-spinner ln-spinner--success"></span>
              <span className="ln-spinner ln-spinner--danger"></span>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
