import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Navbar",
  description: "A responsive top navigation bar with brand, links, and action slots. Collapses to a hamburger menu on mobile.",
};

export default function NavbarPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Navbar</h1>
        <p className="lead text-subtle">
          A top navigation bar with brand, links, and action slots. Below the{" "}
          <code>md</code> breakpoint, the nav collapses into a toggleable
          panel. The panel must be a sibling of <code>__inner</code>, not
          nested inside it: <code>.ln-navbar &gt; .ln-navbar__inner +
          .ln-navbar__panel</code>.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Standard navbar</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<nav class="ln-navbar">
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
            <nav className="ln-navbar">
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
          a toggle button appears. Place both the open and close icons inside
          the toggle — CSS swaps them based on <code>aria-expanded</code>. Add{" "}
          <code>data-ln-navbar-toggle</code> to the button and place mobile
          links inside <code>__panel</code>. Resize the browser to see the
          collapse in action.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<nav class="ln-navbar border">
  <div class="ln-navbar__inner py-1 px-2">
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
      <i class="fa-solid fa-bars ln-navbar__toggle-open" aria-label="Open menu"></i>
      <i class="fa-solid fa-xmark ln-navbar__toggle-close" aria-label="Close menu"></i>
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
            <nav className="ln-navbar border">
              <div className="ln-navbar__inner py-1 px-2">
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
                  <i className="fa-solid fa-bars ln-navbar__toggle-open" aria-label="Open menu"></i>
                  <i className="fa-solid fa-xmark ln-navbar__toggle-close" aria-label="Close menu"></i>
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
            <tr><td><code>.ln-navbar</code></td><td>Top navigation bar container</td><td>No</td></tr>
            <tr><td><code>.ln-navbar__inner</code></td><td>Flex row centred at container-wide width</td><td>No</td></tr>
            <tr><td><code>.ln-navbar__brand</code></td><td>Brand logo / name link</td><td>No</td></tr>
            <tr><td><code>.ln-navbar__nav</code></td><td>Primary nav link group</td><td>No</td></tr>
            <tr><td><code>.ln-navbar__item</code></td><td>Nav list item</td><td>No</td></tr>
            <tr><td><code>.ln-navbar__link</code></td><td>Navigation link</td><td>No</td></tr>
            <tr><td><code>.ln-navbar__actions</code></td><td>Right-side action slot</td><td>No</td></tr>
            <tr><td><code>.ln-navbar__toggle</code></td><td>Mobile menu toggle button</td><td>No</td></tr>
            <tr><td><code>.ln-navbar__panel</code></td><td>Collapsible mobile nav panel</td><td>No</td></tr>
            <tr><td><code>.ln-navbar--sticky</code></td><td>Stick to viewport top</td><td>No</td></tr>
            <tr><td><code>.ln-navbar--transparent</code></td><td>Transparent background until scrolled</td><td>No</td></tr>
            <tr><td><code>.ln-navbar--center</code></td><td>Centre-align nav links</td><td>No</td></tr>
            <tr><td><code>.ln-navbar--actions-visible</code></td><td>Keep actions visible on mobile</td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
