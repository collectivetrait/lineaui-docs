import { CodeBlock } from "@/components/CodeBlock";

export default function BreadcrumbPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Breadcrumb</h1>
        <p className="lead text-subtle">
          A horizontal path showing the user&apos;s position in a site hierarchy.
          Uses a <code>&lt;nav&gt;</code> wrapper with an ordered list inside.
          Separators between items are auto-generated via <code>__item::before</code>.
        </p>
      </section>

      <section className="docs-section">
        <h2>Default breadcrumb</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<nav class="ln-breadcrumb" aria-label="Breadcrumb">
  <ol class="ln-breadcrumb__list">
    <li class="ln-breadcrumb__item">
      <a class="ln-breadcrumb__link" href="#">Home</a>
    </li>
    <li class="ln-breadcrumb__item">
      <a class="ln-breadcrumb__link" href="#">Products</a>
    </li>
    <li class="ln-breadcrumb__item">
      <span class="ln-breadcrumb__current">Running Shoes</span>
    </li>
  </ol>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-breadcrumb" aria-label="Breadcrumb">
              <ol className="ln-breadcrumb__list">
                <li className="ln-breadcrumb__item">
                  <a className="ln-breadcrumb__link" href="#">Home</a>
                </li>
                <li className="ln-breadcrumb__item">
                  <a className="ln-breadcrumb__link" href="#">Products</a>
                </li>
                <li className="ln-breadcrumb__item">
                  <span className="ln-breadcrumb__current">Running Shoes</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Small breadcrumb</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<nav class="ln-breadcrumb ln-breadcrumb--sm" aria-label="Breadcrumb">
  <ol class="ln-breadcrumb__list">
    <li class="ln-breadcrumb__item">
      <a class="ln-breadcrumb__link" href="#">Dashboard</a>
    </li>
    <li class="ln-breadcrumb__item">
      <a class="ln-breadcrumb__link" href="#">Settings</a>
    </li>
    <li class="ln-breadcrumb__item">
      <span class="ln-breadcrumb__current">Profile</span>
    </li>
  </ol>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-breadcrumb ln-breadcrumb--sm" aria-label="Breadcrumb">
              <ol className="ln-breadcrumb__list">
                <li className="ln-breadcrumb__item">
                  <a className="ln-breadcrumb__link" href="#">Dashboard</a>
                </li>
                <li className="ln-breadcrumb__item">
                  <a className="ln-breadcrumb__link" href="#">Settings</a>
                </li>
                <li className="ln-breadcrumb__item">
                  <span className="ln-breadcrumb__current">Profile</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
    </article>
  );
}
