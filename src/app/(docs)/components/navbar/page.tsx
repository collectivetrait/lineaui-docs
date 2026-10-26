import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Navbar",
  description: "A responsive top navigation bar with collapse mode, submenus, megamenus, and named panel toggles.",
};

export default function NavbarPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Navbar</h1>
        <p className="lead text-subtle">
          A top navigation bar with brand, links, and action slots. Supports
          two responsive strategies: an explicit mobile panel, or{" "}
          <code>--collapse</code> mode where JS turns <code>__nav</code> into
          a panel on mobile — same styling, no link duplication. Set inner
          padding via <code>--_px</code> so the panel renders identically
          inside or outside <code>__inner</code>.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Standard navbar</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<nav class="ln-navbar border">
  <div class="ln-navbar__inner py-1" style="--_px: 1rem">
    <a class="ln-navbar__brand" href="#">Acme</a>
    <div class="ln-navbar__nav">
      <a class="ln-navbar__link" href="#" aria-current="page">Home</a>
      <a class="ln-navbar__link" href="#">Products</a>
      <a class="ln-navbar__link" href="#">About</a>
      <a class="ln-navbar__link" href="#">Contact</a>
    </div>
    <div class="ln-navbar__actions">
      <a class="ln-navbar__link" href="#">Sign in</a>
    </div>
  </div>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-navbar border">
              <div className="ln-navbar__inner py-1" style={{"--_px": "1rem"} as React.CSSProperties}>
                <a className="ln-navbar__brand" href="#">Acme</a>
                <div className="ln-navbar__nav">
                  <a className="ln-navbar__link" href="#" aria-current="page">Home</a>
                  <a className="ln-navbar__link" href="#">Products</a>
                  <a className="ln-navbar__link" href="#">About</a>
                  <a className="ln-navbar__link" href="#">Contact</a>
                </div>
                <div className="ln-navbar__actions">
                  <a className="ln-navbar__link" href="#">Sign in</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Collapse navbar</h2>
        <p>
          The <code>--collapse</code> modifier lets JS turn <code>__nav</code>{" "}
          into a panel on mobile — no <code>__panel</code> element, no link
          duplication. Set <code>--_px</code> on <code>__inner</code> to match
          the padding value so the panel aligns edge to edge.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<nav class="ln-navbar ln-navbar--collapse border">
  <div class="ln-navbar__inner py-1" style="--_px: 1rem">
    <a class="ln-navbar__brand" href="#">Acme</a>
    <div class="ln-navbar__nav">
      <a class="ln-navbar__link" href="#" aria-current="page">Home</a>
      <a class="ln-navbar__link" href="#">Products</a>
      <a class="ln-navbar__link" href="#">About</a>
      <a class="ln-navbar__link" href="#">Contact</a>
    </div>
    <button class="ln-navbar__toggle" data-ln-navbar-toggle
            aria-expanded="false" aria-label="Toggle menu">
      <i class="fa-solid fa-bars ln-navbar__toggle-open"></i>
      <i class="fa-solid fa-xmark ln-navbar__toggle-close"></i>
    </button>
  </div>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-navbar ln-navbar--collapse border">
              <div className="ln-navbar__inner py-1" style={{"--_px": "1rem"} as React.CSSProperties}>
                <a className="ln-navbar__brand" href="#">Acme</a>
                <div className="ln-navbar__nav">
                  <a className="ln-navbar__link" href="#" aria-current="page">Home</a>
                  <a className="ln-navbar__link" href="#">Products</a>
                  <a className="ln-navbar__link" href="#">About</a>
                  <a className="ln-navbar__link" href="#">Contact</a>
                </div>
                <button className="ln-navbar__toggle" data-ln-navbar-toggle=""
                        aria-expanded="false" aria-label="Toggle menu">
                  <i className="fa-solid fa-bars ln-navbar__toggle-open"></i>
                  <i className="fa-solid fa-xmark ln-navbar__toggle-close"></i>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Keeping links visible</h2>
        <p>
          In <code>--collapse</code> mode, place the links you want to keep
          visible on mobile inside <code>__keep</code> — a sibling of{" "}
          <code>__nav</code> inside <code>__inner</code>. The keep group stays
          in the bar while <code>__nav</code> collapses behind the toggle.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<nav class="ln-navbar ln-navbar--collapse border">
  <div class="ln-navbar__inner py-1" style="--_px: 1rem">
    <a class="ln-navbar__brand" href="#">Acme</a>
    <div class="ln-navbar__keep">
      <a class="ln-navbar__link" href="#" aria-current="page">Home</a>
      <a class="ln-navbar__link" href="#">About</a>
    </div>
    <div class="ln-navbar__nav">
      <a class="ln-navbar__link" href="#">Products</a>
      <a class="ln-navbar__link" href="#">Pricing</a>
      <a class="ln-navbar__link" href="#">Blog</a>
    </div>
    <button class="ln-navbar__toggle" data-ln-navbar-toggle
            aria-expanded="false" aria-label="Toggle menu">
      <i class="fa-solid fa-bars ln-navbar__toggle-open"></i>
      <i class="fa-solid fa-xmark ln-navbar__toggle-close"></i>
    </button>
  </div>
</nav>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--full-contained">
            <nav className="ln-navbar ln-navbar--collapse border">
              <div className="ln-navbar__inner py-1" style={{"--_px": "1rem"} as React.CSSProperties}>
                <a className="ln-navbar__brand" href="#">Acme</a>
                <div className="ln-navbar__keep">
                  <a className="ln-navbar__link" href="#" aria-current="page">Home</a>
                  <a className="ln-navbar__link" href="#">About</a>
                </div>
                <div className="ln-navbar__nav">
                  <a className="ln-navbar__link" href="#">Products</a>
                  <a className="ln-navbar__link" href="#">Pricing</a>
                  <a className="ln-navbar__link" href="#">Blog</a>
                </div>
                <button className="ln-navbar__toggle" data-ln-navbar-toggle=""
                        aria-expanded="false" aria-label="Toggle menu">
                  <i className="fa-solid fa-bars ln-navbar__toggle-open"></i>
                  <i className="fa-solid fa-xmark ln-navbar__toggle-close"></i>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Panel toggle</h2>
        <p>
          Use <code>data-ln-navbar-panel</code> on a button to toggle a named
          panel at any viewport. The button{"'"}s value matches the panel{"'"}s{" "}
          <code>id</code>. Opening one named panel closes any other open panel
          or megamenu in the same navbar. Clicking outside or pressing Escape
          closes it.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<nav class="ln-navbar border">
  <div class="ln-navbar__inner py-1" style="--_px: 1rem">
    <a class="ln-navbar__brand" href="#">Acme</a>
    <div class="ln-navbar__nav">
      <a class="ln-navbar__link" href="#" aria-current="page">Home</a>
      <a class="ln-navbar__link" href="#">Products</a>
    </div>
    <button class="ln-navbar__toggle" data-ln-navbar-panel="more-links"
            aria-expanded="false" aria-label="Toggle more">
      <i class="fa-solid fa-bars ln-navbar__toggle-open"></i>
      <i class="fa-solid fa-xmark ln-navbar__toggle-close"></i>
    </button>
  </div>
  <div class="ln-navbar__panel" id="more-links" aria-hidden="true">
    <a class="ln-navbar__link" href="#">Resources</a>
    <a class="ln-navbar__link" href="#">Blog</a>
    <a class="ln-navbar__link" href="#">Careers</a>
  </div>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-navbar border">
              <div className="ln-navbar__inner py-1" style={{"--_px": "1rem"} as React.CSSProperties}>
                <a className="ln-navbar__brand" href="#">Acme</a>
                <div className="ln-navbar__nav">
                  <a className="ln-navbar__link" href="#" aria-current="page">Home</a>
                  <a className="ln-navbar__link" href="#">Products</a>
                </div>
                <button className="ln-navbar__toggle" data-ln-navbar-panel="more-links"
                        aria-expanded="false" aria-label="Toggle more">
                  <i className="fa-solid fa-bars ln-navbar__toggle-open"></i>
                  <i className="fa-solid fa-xmark ln-navbar__toggle-close"></i>
                </button>
              </div>
              <div className="ln-navbar__panel" id="more-links" aria-hidden="true">
                <a className="ln-navbar__link" href="#">Resources</a>
                <a className="ln-navbar__link" href="#">Blog</a>
                <a className="ln-navbar__link" href="#">Careers</a>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Submenus</h2>
        <p>
          Nest an <code>ln-dropdown</code> inside <code>__nav</code> to create
          a submenu. The dropdown toggle doubles as a navbar link. Do not add
          the <code>popover</code> attribute — submenus use the{" "}
          <code>aria-expanded</code> CSS path so they render inline on mobile
          inside the panel.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<nav class="ln-navbar ln-navbar--collapse border">
  <div class="ln-navbar__inner py-1" style="--_px: 1rem">
    <a class="ln-navbar__brand" href="#">Acme</a>
    <div class="ln-navbar__nav">
      <a class="ln-navbar__link" href="#" aria-current="page">Home</a>
      <div class="ln-dropdown" data-ln-dropdown>
        <button class="ln-navbar__link ln-dropdown__toggle"
                aria-expanded="false">Products ▾</button>
        <div class="ln-dropdown__menu">
          <a class="ln-dropdown__item" href="#">Widgets</a>
          <a class="ln-dropdown__item" href="#">Gadgets</a>
          <a class="ln-dropdown__item" href="#">Tools</a>
        </div>
      </div>
      <a class="ln-navbar__link" href="#">About</a>
    </div>
    <button class="ln-navbar__toggle" data-ln-navbar-toggle
            aria-expanded="false" aria-label="Toggle menu">
      <i class="fa-solid fa-bars ln-navbar__toggle-open"></i>
      <i class="fa-solid fa-xmark ln-navbar__toggle-close"></i>
    </button>
  </div>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-navbar ln-navbar--collapse border">
              <div className="ln-navbar__inner py-1" style={{"--_px": "1rem"} as React.CSSProperties}>
                <a className="ln-navbar__brand" href="#">Acme</a>
                <div className="ln-navbar__nav">
                  <a className="ln-navbar__link" href="#" aria-current="page">Home</a>
                  <div className="ln-dropdown" data-ln-dropdown="">
                    <button className="ln-navbar__link ln-dropdown__toggle"
                            aria-expanded="false">Products ▾</button>
                    <div className="ln-dropdown__menu">
                      <a className="ln-dropdown__item" href="#">Widgets</a>
                      <a className="ln-dropdown__item" href="#">Gadgets</a>
                      <a className="ln-dropdown__item" href="#">Tools</a>
                    </div>
                  </div>
                  <a className="ln-navbar__link" href="#">About</a>
                </div>
                <button className="ln-navbar__toggle" data-ln-navbar-toggle=""
                        aria-expanded="false" aria-label="Toggle menu">
                  <i className="fa-solid fa-bars ln-navbar__toggle-open"></i>
                  <i className="fa-solid fa-xmark ln-navbar__toggle-close"></i>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Megamenu</h2>
        <p>
          A full-width panel below the bar, toggled by{" "}
          <code>data-ln-navbar-panel</code>. The <code>__megamenu-inner</code>{" "}
          element constrains content to <code>--container-wide</code>. Opening
          one megamenu closes any other open panel or megamenu in the same
          navbar.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<nav class="ln-navbar ln-navbar--collapse border">
  <div class="ln-navbar__inner py-1" style="--_px: 1rem">
    <a class="ln-navbar__brand" href="#">Acme</a>
    <div class="ln-navbar__nav">
      <a class="ln-navbar__link" href="#" aria-current="page">Home</a>
      <button class="ln-navbar__link" data-ln-navbar-panel="mega-products"
              aria-expanded="false">Products ▾</button>
      <a class="ln-navbar__link" href="#">About</a>
    </div>
    <button class="ln-navbar__toggle" data-ln-navbar-toggle
            aria-expanded="false" aria-label="Toggle menu">
      <i class="fa-solid fa-bars ln-navbar__toggle-open"></i>
      <i class="fa-solid fa-xmark ln-navbar__toggle-close"></i>
    </button>
  </div>
  <div class="ln-navbar__megamenu" id="mega-products" aria-hidden="true">
    <div class="ln-navbar__megamenu-inner">
      <div class="ln-grid ln-grid--cols-3 ln-grid--gap-lg">
        <div>
          <p class="h5 mb-2">Widgets</p>
          <a class="ln-navbar__link" href="#">Widget A</a>
          <a class="ln-navbar__link" href="#">Widget B</a>
        </div>
        <div>
          <p class="h5 mb-2">Gadgets</p>
          <a class="ln-navbar__link" href="#">Gadget X</a>
          <a class="ln-navbar__link" href="#">Gadget Y</a>
        </div>
        <div>
          <p class="h5 mb-2">Tools</p>
          <a class="ln-navbar__link" href="#">Tool 1</a>
          <a class="ln-navbar__link" href="#">Tool 2</a>
        </div>
      </div>
    </div>
  </div>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-navbar ln-navbar--collapse border">
              <div className="ln-navbar__inner py-1" style={{"--_px": "1rem"} as React.CSSProperties}>
                <a className="ln-navbar__brand" href="#">Acme</a>
                <div className="ln-navbar__nav">
                  <a className="ln-navbar__link" href="#" aria-current="page">Home</a>
                  <button className="ln-navbar__link" data-ln-navbar-panel="mega-products"
                          aria-expanded="false">Products ▾</button>
                  <a className="ln-navbar__link" href="#">About</a>
                </div>
                <button className="ln-navbar__toggle" data-ln-navbar-toggle=""
                        aria-expanded="false" aria-label="Toggle menu">
                  <i className="fa-solid fa-bars ln-navbar__toggle-open"></i>
                  <i className="fa-solid fa-xmark ln-navbar__toggle-close"></i>
                </button>
              </div>
              <div className="ln-navbar__megamenu" id="mega-products" aria-hidden="true">
                <div className="ln-navbar__megamenu-inner">
                  <div className="ln-grid ln-grid--cols-3 ln-grid--gap-lg">
                    <div>
                      <p className="h5 mb-2">Widgets</p>
                      <a className="ln-navbar__link" href="#">Widget A</a>
                      <a className="ln-navbar__link" href="#">Widget B</a>
                    </div>
                    <div>
                      <p className="h5 mb-2">Gadgets</p>
                      <a className="ln-navbar__link" href="#">Gadget X</a>
                      <a className="ln-navbar__link" href="#">Gadget Y</a>
                    </div>
                    <div>
                      <p className="h5 mb-2">Tools</p>
                      <a className="ln-navbar__link" href="#">Tool 1</a>
                      <a className="ln-navbar__link" href="#">Tool 2</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Explicit panel</h2>
        <p>
          The original responsive pattern: a separate <code>__panel</code>{" "}
          with its own links. Use this when the mobile navigation should
          differ from the desktop version.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<nav class="ln-navbar border">
  <div class="ln-navbar__inner py-1" style="--_px: 1rem">
    <a class="ln-navbar__brand" href="#">Acme</a>
    <div class="ln-navbar__nav">
      <a class="ln-navbar__link" href="#" aria-current="page">Home</a>
      <a class="ln-navbar__link" href="#">Products</a>
      <a class="ln-navbar__link" href="#">About</a>
    </div>
    <button class="ln-navbar__toggle" data-ln-navbar-toggle
            aria-expanded="false" aria-label="Toggle menu">
      <i class="fa-solid fa-bars ln-navbar__toggle-open"></i>
      <i class="fa-solid fa-xmark ln-navbar__toggle-close"></i>
    </button>
  </div>
  <div class="ln-navbar__panel" aria-hidden="true">
    <a class="ln-navbar__link" href="#" aria-current="page">Home</a>
    <a class="ln-navbar__link" href="#">Products</a>
    <a class="ln-navbar__link" href="#">About</a>
    <a class="ln-navbar__link" href="#">Sign in</a>
  </div>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-navbar border">
              <div className="ln-navbar__inner py-1" style={{"--_px": "1rem"} as React.CSSProperties}>
                <a className="ln-navbar__brand" href="#">Acme</a>
                <div className="ln-navbar__nav">
                  <a className="ln-navbar__link" href="#" aria-current="page">Home</a>
                  <a className="ln-navbar__link" href="#">Products</a>
                  <a className="ln-navbar__link" href="#">About</a>
                </div>
                <button className="ln-navbar__toggle" data-ln-navbar-toggle=""
                        aria-expanded="false" aria-label="Toggle menu">
                  <i className="fa-solid fa-bars ln-navbar__toggle-open"></i>
                  <i className="fa-solid fa-xmark ln-navbar__toggle-close"></i>
                </button>
              </div>
              <div className="ln-navbar__panel" aria-hidden="true">
                <a className="ln-navbar__link" href="#" aria-current="page">Home</a>
                <a className="ln-navbar__link" href="#">Products</a>
                <a className="ln-navbar__link" href="#">About</a>
                <a className="ln-navbar__link" href="#">Sign in</a>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Class / Attribute</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>.ln-navbar</code></td><td>Top navigation bar container</td></tr>
            <tr><td><code>.ln-navbar__inner</code></td><td>Flex row; set <code>--_px</code> for inline padding</td></tr>
            <tr><td><code>.ln-navbar__brand</code></td><td>Brand logo / name link</td></tr>
            <tr><td><code>.ln-navbar__nav</code></td><td>Primary nav link group</td></tr>
            <tr><td><code>.ln-navbar__link</code></td><td>Navigation link</td></tr>
            <tr><td><code>.ln-navbar__actions</code></td><td>Right-side action slot</td></tr>
            <tr><td><code>.ln-navbar__toggle</code></td><td>Menu toggle button</td></tr>
            <tr><td><code>.ln-navbar__panel</code></td><td>Collapsible panel (explicit or JS-added)</td></tr>
            <tr><td><code>.ln-navbar__keep</code></td><td>Link group that stays visible on mobile</td></tr>
            <tr><td><code>.ln-navbar__megamenu</code></td><td>Full-width dropdown panel below the bar</td></tr>
            <tr><td><code>.ln-navbar__megamenu-inner</code></td><td>Container-wide content wrapper</td></tr>
            <tr><td><code>.ln-navbar--sticky</code></td><td>Stick to viewport top</td></tr>
            <tr><td><code>.ln-navbar--transparent</code></td><td>Transparent background until scrolled</td></tr>
            <tr><td><code>.ln-navbar--center</code></td><td>Centre-align nav links</td></tr>
            <tr><td><code>.ln-navbar--collapse</code></td><td>Auto-collapse __nav to panel on mobile</td></tr>
            <tr><td><code>.ln-navbar--actions-visible</code></td><td>Keep actions visible on mobile</td></tr>
            <tr><td><code>data-ln-navbar-toggle</code></td><td>Global toggle: opens panel or collapse nav</td></tr>
            <tr><td><code>data-ln-navbar-panel</code></td><td>Named toggle: opens a panel or megamenu by id</td></tr>
            <tr><td><code>--_px</code></td><td>Inner inline padding; panel auto-corrects with negative margin</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
