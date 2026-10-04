import { CodeBlock } from "@/components/CodeBlock";

export default function MenuPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Menu</h1>
        <p className="lead text-subtle">
          A sidebar navigation list with grouped items, icons, badges, and
          keyboard shortcuts. Supports <code>aria-current</code> for active
          states and <code>aria-expanded</code> for collapsible submenus.
        </p>
      </section>

      <section className="docs-section">
        <h2>Sidebar menu</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<nav class="ln-menu">
  <div class="ln-menu__group">
    <div class="ln-menu__heading">Main</div>
    <ul>
      <li class="ln-menu__item">
        <a class="ln-menu__link" href="#" aria-current="page">
          <span class="ln-menu__label">Dashboard</span>
          <span class="ln-menu__badge">3</span>
        </a>
      </li>
      <li class="ln-menu__item">
        <a class="ln-menu__link" href="#">
          <span class="ln-menu__label">Orders</span>
        </a>
      </li>
      <li class="ln-menu__item">
        <a class="ln-menu__link" href="#">
          <span class="ln-menu__label">Products</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="ln-menu__group">
    <div class="ln-menu__heading">Settings</div>
    <ul>
      <li class="ln-menu__item">
        <a class="ln-menu__link" href="#">
          <span class="ln-menu__label">Account</span>
          <span class="ln-menu__shortcut">⌘K</span>
        </a>
      </li>
    </ul>
  </div>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-menu" style={{ maxWidth: '240px' }}>
              <div className="ln-menu__group">
                <div className="ln-menu__heading">Main</div>
                <ul>
                  <li className="ln-menu__item">
                    <a className="ln-menu__link" href="#" aria-current="page">
                      <span className="ln-menu__label">Dashboard</span>
                      <span className="ln-menu__badge">3</span>
                    </a>
                  </li>
                  <li className="ln-menu__item">
                    <a className="ln-menu__link" href="#">
                      <span className="ln-menu__label">Orders</span>
                    </a>
                  </li>
                  <li className="ln-menu__item">
                    <a className="ln-menu__link" href="#">
                      <span className="ln-menu__label">Products</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ln-menu__group">
                <div className="ln-menu__heading">Settings</div>
                <ul>
                  <li className="ln-menu__item">
                    <a className="ln-menu__link" href="#">
                      <span className="ln-menu__label">Account</span>
                      <span className="ln-menu__shortcut">⌘K</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Table of contents menu</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<nav class="ln-menu ln-menu--toc">
  <ul>
    <li class="ln-menu__item">
      <a class="ln-menu__link" href="#" aria-current="page">
        <span class="ln-menu__label">Introduction</span>
      </a>
    </li>
    <li class="ln-menu__item">
      <a class="ln-menu__link" href="#">
        <span class="ln-menu__label">Installation</span>
      </a>
    </li>
    <li class="ln-menu__item">
      <a class="ln-menu__link" href="#">
        <span class="ln-menu__label">Configuration</span>
      </a>
    </li>
    <li class="ln-menu__item">
      <a class="ln-menu__link" href="#">
        <span class="ln-menu__label">API Reference</span>
      </a>
    </li>
  </ul>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-menu ln-menu--toc" style={{ maxWidth: '200px' }}>
              <ul>
                <li className="ln-menu__item">
                  <a className="ln-menu__link" href="#" aria-current="page">
                    <span className="ln-menu__label">Introduction</span>
                  </a>
                </li>
                <li className="ln-menu__item">
                  <a className="ln-menu__link" href="#">
                    <span className="ln-menu__label">Installation</span>
                  </a>
                </li>
                <li className="ln-menu__item">
                  <a className="ln-menu__link" href="#">
                    <span className="ln-menu__label">Configuration</span>
                  </a>
                </li>
                <li className="ln-menu__item">
                  <a className="ln-menu__link" href="#">
                    <span className="ln-menu__label">API Reference</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Pill menu</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<nav class="ln-menu ln-menu--pills">
  <ul>
    <li class="ln-menu__item">
      <a class="ln-menu__link" href="#" aria-current="page">
        <span class="ln-menu__label">Overview</span>
      </a>
    </li>
    <li class="ln-menu__item">
      <a class="ln-menu__link" href="#">
        <span class="ln-menu__label">Analytics</span>
      </a>
    </li>
    <li class="ln-menu__item">
      <a class="ln-menu__link" href="#">
        <span class="ln-menu__label">Reports</span>
      </a>
    </li>
  </ul>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-menu ln-menu--pills" style={{ maxWidth: '200px' }}>
              <ul>
                <li className="ln-menu__item">
                  <a className="ln-menu__link" href="#" aria-current="page">
                    <span className="ln-menu__label">Overview</span>
                  </a>
                </li>
                <li className="ln-menu__item">
                  <a className="ln-menu__link" href="#">
                    <span className="ln-menu__label">Analytics</span>
                  </a>
                </li>
                <li className="ln-menu__item">
                  <a className="ln-menu__link" href="#">
                    <span className="ln-menu__label">Reports</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </article>
  );
}
