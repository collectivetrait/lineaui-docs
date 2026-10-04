import { CodeBlock } from "@/components/CodeBlock";

export default function MetaPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Metadata line</h1>
        <p className="lead text-subtle">
          An inline row of metadata items separated by dots. Uses the UI font
          at small size with muted color. Common for article bylines, product
          details, and timestamps.
        </p>
      </section>

      <section className="docs-section">
        <h2>Default</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-meta">
  <span class="ln-meta__item">Essay</span>
  <span class="ln-meta__separator"></span>
  <span class="ln-meta__item">Sep 2026</span>
  <span class="ln-meta__separator"></span>
  <span class="ln-meta__item">6 min read</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-meta">
              <span className="ln-meta__item">Essay</span>
              <span className="ln-meta__separator"></span>
              <span className="ln-meta__item">Sep 2026</span>
              <span className="ln-meta__separator"></span>
              <span className="ln-meta__item">6 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Small size</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-meta ln-meta--sm">
  <span class="ln-meta__item">SKU-4821</span>
  <span class="ln-meta__separator"></span>
  <span class="ln-meta__item">In Stock</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-meta ln-meta--sm">
              <span className="ln-meta__item">SKU-4821</span>
              <span className="ln-meta__separator"></span>
              <span className="ln-meta__item">In Stock</span>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
