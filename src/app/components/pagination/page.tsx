import { CodeBlock } from "@/components/CodeBlock";

export default function PaginationPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Pagination</h1>
        <p className="lead text-subtle">
          Numbered page links with previous/next controls and ellipsis for
          collapsed ranges. The active page uses{" "}
          <code>aria-current=&quot;page&quot;</code>. Sizes go from{" "}
          <code>--sm</code> (32px) to <code>--lg</code> (48px).
        </p>
      </section>

      <section className="docs-section">
        <h2>Default pagination</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<nav class="ln-pagination" aria-label="Pagination">
  <ul class="ln-pagination__list">
    <li><a class="ln-pagination__link" href="#">&larr; Prev</a></li>
    <li><a class="ln-pagination__link" href="#">1</a></li>
    <li><a class="ln-pagination__link" href="#">2</a></li>
    <li><a class="ln-pagination__link" href="#" aria-current="page">3</a></li>
    <li><a class="ln-pagination__link" href="#">4</a></li>
    <li><span class="ln-pagination__ellipsis">&hellip;</span></li>
    <li><a class="ln-pagination__link" href="#">12</a></li>
    <li><a class="ln-pagination__link" href="#">Next &rarr;</a></li>
  </ul>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-pagination" aria-label="Pagination">
              <ul className="ln-pagination__list">
                <li><a className="ln-pagination__link" href="#">&larr; Prev</a></li>
                <li><a className="ln-pagination__link" href="#">1</a></li>
                <li><a className="ln-pagination__link" href="#">2</a></li>
                <li><a className="ln-pagination__link" href="#" aria-current="page">3</a></li>
                <li><a className="ln-pagination__link" href="#">4</a></li>
                <li><span className="ln-pagination__ellipsis">&hellip;</span></li>
                <li><a className="ln-pagination__link" href="#">12</a></li>
                <li><a className="ln-pagination__link" href="#">Next &rarr;</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Simple pagination</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<nav class="ln-pagination ln-pagination--simple" aria-label="Pagination">
  <ul class="ln-pagination__list">
    <li><a class="ln-pagination__link" href="#">&larr; Previous</a></li>
    <li><a class="ln-pagination__link" href="#">Next &rarr;</a></li>
  </ul>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-pagination ln-pagination--simple" aria-label="Pagination">
              <ul className="ln-pagination__list">
                <li><a className="ln-pagination__link" href="#">&larr; Previous</a></li>
                <li><a className="ln-pagination__link" href="#">Next &rarr;</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Compact pagination</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<nav class="ln-pagination ln-pagination--compact" aria-label="Pagination">
  <ul class="ln-pagination__list">
    <li><a class="ln-pagination__link" href="#">&larr;</a></li>
    <li><span class="ln-pagination__summary">Page 3 of 12</span></li>
    <li><a class="ln-pagination__link" href="#">&rarr;</a></li>
  </ul>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-pagination ln-pagination--compact" aria-label="Pagination">
              <ul className="ln-pagination__list">
                <li><a className="ln-pagination__link" href="#">&larr;</a></li>
                <li><span className="ln-pagination__summary">Page 3 of 12</span></li>
                <li><a className="ln-pagination__link" href="#">&rarr;</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Text pagination</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<nav class="ln-pagination ln-pagination--text" aria-label="Pagination">
  <ul class="ln-pagination__list">
    <li><a class="ln-pagination__link" href="#">&larr; Prev</a></li>
    <li><a class="ln-pagination__link" href="#">1</a></li>
    <li><a class="ln-pagination__link" href="#">2</a></li>
    <li><a class="ln-pagination__link" href="#" aria-current="page">3</a></li>
    <li><a class="ln-pagination__link" href="#">4</a></li>
    <li><span class="ln-pagination__ellipsis">&hellip;</span></li>
    <li><a class="ln-pagination__link" href="#">12</a></li>
    <li><a class="ln-pagination__link" href="#">Next &rarr;</a></li>
  </ul>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-pagination ln-pagination--text" aria-label="Pagination">
              <ul className="ln-pagination__list">
                <li><a className="ln-pagination__link" href="#">&larr; Prev</a></li>
                <li><a className="ln-pagination__link" href="#">1</a></li>
                <li><a className="ln-pagination__link" href="#">2</a></li>
                <li><a className="ln-pagination__link" href="#" aria-current="page">3</a></li>
                <li><a className="ln-pagination__link" href="#">4</a></li>
                <li><span className="ln-pagination__ellipsis">&hellip;</span></li>
                <li><a className="ln-pagination__link" href="#">12</a></li>
                <li><a className="ln-pagination__link" href="#">Next &rarr;</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </article>
  );
}
