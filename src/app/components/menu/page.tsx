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

      <section className="docs-section">
        <h2>Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>.ln-menu</code></td>
              <td>Menu container</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu__group</code></td>
              <td>Section group with top border separator</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu__heading</code></td>
              <td>Section heading label</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu__item</code></td>
              <td>List item wrapper</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu__link</code></td>
              <td>Clickable menu link</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu__icon</code></td>
              <td>Leading icon</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu__label</code></td>
              <td>Item text label</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu__badge</code></td>
              <td>Trailing badge or count</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu__shortcut</code></td>
              <td>Keyboard shortcut hint</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu__submenu</code></td>
              <td>Nested submenu list</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu__divider</code></td>
              <td>Separator line</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu--compact</code></td>
              <td>Smaller item height and font size</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu--rail</code></td>
              <td>Icon-only collapsed sidebar</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu--toc</code></td>
              <td>Table-of-contents style with left indicator</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu--pills</code></td>
              <td>Pill-shaped active indicator</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-menu--&#123;role&#125;</code></td>
              <td>Role modifier (primary, secondary, success, warning, danger, info)</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
