import { CodeBlock } from "@/components/CodeBlock";

export default function PageHeaderPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Page header</h1>
        <p className="lead text-subtle">
          A page-level title block with slots for breadcrumb, eyebrow, title,
          lead text, metadata, and actions. The <code>--hero</code> modifier
          uses display sizes; <code>--compact</code> produces a minimal
          dashboard header.
        </p>
      </section>

      <section className="docs-section">
        <h2>Standard page header</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-page-header ln-page-header--bordered">
  <span class="ln-page-header__eyebrow">Documentation</span>
  <h1 class="ln-page-header__title">Getting Started</h1>
  <p class="ln-page-header__lead">Install ln via npm, import the compiled
     CSS, and add the JS bundle to your page.</p>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-page-header ln-page-header--bordered">
              <span className="ln-page-header__eyebrow">Documentation</span>
              <h1 className="ln-page-header__title">Getting Started</h1>
              <p className="ln-page-header__lead">Install ln via npm, import the compiled
                 CSS, and add the JS bundle to your page.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Compact variant</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-page-header ln-page-header--compact">
  <h1 class="ln-page-header__title">Dashboard</h1>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-page-header ln-page-header--compact">
              <h1 className="ln-page-header__title">Dashboard</h1>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
