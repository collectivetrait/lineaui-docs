import { CodeBlock } from "@/components/CodeBlock";

export default function NavbarPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Navbar</h1>
        <p className="lead text-subtle">
          A top navigation bar with brand, links, and action slots. Default
          height is 72px (3 line rows). The <code>--compact</code> modifier
          shrinks to 48px. Below the <code>md</code> breakpoint, the nav
          collapses into a toggleable panel.
        </p>
      </section>

      <section className="docs-section">
        <h2>Standard navbar</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<nav class="ln-navbar ln-navbar--bordered">
  <div class="ln-navbar__inner">
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
            <nav className="ln-navbar ln-navbar--bordered">
              <div className="ln-navbar__inner">
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
        <h2>Responsive navbar with mobile panel</h2>
        <p>
          Below the <code>md</code> breakpoint, nav links and actions hide and
          a toggle button appears. Clicking it reveals the panel with a
          slide-down transition and backdrop overlay. Add{" "}
          <code>data-ln-navbar-toggle</code> to the button and place mobile
          links inside <code>__panel</code>. Resize the browser to see the
          collapse in action.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<nav class="ln-navbar ln-navbar--bordered">
  <div class="ln-navbar__inner">
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
    <button class="ln-navbar__toggle" data-ln-navbar-toggle
            aria-expanded="false" aria-label="Toggle menu">
      ☰
    </button>
  </div>
  <div class="ln-navbar__panel" aria-hidden="true">
    <a class="ln-navbar__link" href="#" aria-current="page">Home</a>
    <a class="ln-navbar__link" href="#">Products</a>
    <a class="ln-navbar__link" href="#">About</a>
    <a class="ln-navbar__link" href="#">Contact</a>
    <a class="ln-navbar__link" href="#">Sign in</a>
  </div>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-navbar ln-navbar--bordered">
              <div className="ln-navbar__inner">
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
                <button className="ln-navbar__toggle" data-ln-navbar-toggle=""
                        aria-expanded="false" aria-label="Toggle menu">
                  ☰
                </button>
              </div>
              <div className="ln-navbar__panel" aria-hidden="true">
                <a className="ln-navbar__link" href="#" aria-current="page">Home</a>
                <a className="ln-navbar__link" href="#">Products</a>
                <a className="ln-navbar__link" href="#">About</a>
                <a className="ln-navbar__link" href="#">Contact</a>
                <a className="ln-navbar__link" href="#">Sign in</a>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Compact navbar</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<nav class="ln-navbar ln-navbar--compact ln-navbar--bordered">
  <div class="ln-navbar__inner">
    <a class="ln-navbar__brand" href="#">Dashboard</a>
    <div class="ln-navbar__nav">
      <a class="ln-navbar__link" href="#" aria-current="page">Overview</a>
      <a class="ln-navbar__link" href="#">Analytics</a>
      <a class="ln-navbar__link" href="#">Settings</a>
    </div>
  </div>
</nav>`}</CodeBlock>
          <div className="component-demo__preview">
            <nav className="ln-navbar ln-navbar--compact ln-navbar--bordered">
              <div className="ln-navbar__inner">
                <a className="ln-navbar__brand" href="#">Dashboard</a>
                <div className="ln-navbar__nav">
                  <a className="ln-navbar__link" href="#" aria-current="page">Overview</a>
                  <a className="ln-navbar__link" href="#">Analytics</a>
                  <a className="ln-navbar__link" href="#">Settings</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </article>
  );
}
