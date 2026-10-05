import Link from "next/link";
import { NavbarToggle } from "@/components/NavbarToggle";
import { GridToggle } from "@/components/GridToggle";
import { BackToTop } from "@/components/BackToTop";
import { PreviewGridToggles } from "@/components/PreviewGridToggles";

const FEATURES = [
  {
    title: "Zero-class typography",
    body: "Semantic HTML gets beautiful defaults out of the box. Headings, paragraphs, lists, and tables look right without a single class name.",
  },
  {
    title: "8px / 24px rhythm grid",
    body: "Every size, space, and line-height token snaps to an 8px base grid. Vertical rhythm flows from a 24px line grid.",
  },
  {
    title: "Configurable prefix",
    body: "The ln- class prefix is a Sass variable. Override it to avoid conflicts with any existing styles or libraries.",
  },
  {
    title: "CSS cascade layers",
    body: "Seven layers give you predictable specificity: reset, tokens, base, layout, blocks, helpers, utilities. Override any rule without fighting specificity wars.",
  },
  {
    title: "OS-aware dark mode",
    body: "Colour tokens use light-dark() so they follow the OS automatically. Toggle per-page with a data-theme attribute.",
  },
  {
    title: "Modular SCSS",
    body: "Import only what you need via Sass @use. No global namespace pollution, no deprecated @import chains.",
  },
];

const STATS = [
  { label: "Minified CSS", value: "165", unit: "KB" },
  { label: "Components", value: "30+" },
  { label: "JS required", value: "Zero" },
  { label: "Cascade layers", value: "7" },
];

const FOOTER_COLS = [
  {
    heading: "Library",
    links: [
      { label: "Getting Started", href: "/getting-started" },
      { label: "Principles", href: "/getting-started/principles" },
      { label: "BEM", href: "/getting-started/bem" },
      { label: "Vertical Rhythm", href: "/getting-started/vertical-rhythm" },
    ],
  },
  {
    heading: "Docs",
    links: [
      { label: "Foundation", href: "/foundation/typography" },
      { label: "Layout", href: "/layout/grid" },
      { label: "Components", href: "/components/button" },
      { label: "Utilities", href: "/utilities/spacing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Customization", href: "/getting-started/customization" },
      { label: "Patterns", href: "/patterns/dashboard" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <GridToggle />
      <BackToTop />
      <PreviewGridToggles />

      {/* Navbar */}
      <nav className="ln-navbar ln-navbar--bordered ln-navbar--sticky">
        <div className="ln-navbar__inner">
          <Link href="/" className="ln-navbar__brand">
            ln
          </Link>
          <div className="ln-navbar__nav">
            <Link href="/getting-started" className="ln-navbar__link">
              Docs
            </Link>
            <Link href="/components/button" className="ln-navbar__link">
              Components
            </Link>
            <Link href="/layout/grid" className="ln-navbar__link">
              Layout
            </Link>
            <Link href="/utilities/spacing" className="ln-navbar__link">
              Utilities
            </Link>
          </div>
          <div className="ln-navbar__actions">
            <Link
              href="/getting-started"
              className="ln-button ln-button--sm"
            >
              Get Started
            </Link>
          </div>
          <NavbarToggle />
          <div className="ln-navbar__panel" aria-hidden="true">
            <Link href="/getting-started" className="ln-navbar__link">
              Docs
            </Link>
            <Link href="/components/button" className="ln-navbar__link">
              Components
            </Link>
            <Link href="/layout/grid" className="ln-navbar__link">
              Layout
            </Link>
            <Link href="/utilities/spacing" className="ln-navbar__link">
              Utilities
            </Link>
            <Link
              href="/getting-started"
              className="ln-button ln-button--sm ln-button--block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="ln-section ln-section--space-3xl ln-section--center">
        <div>
          <span className="ln-badge ln-badge--primary ln-badge--solid">
            v0.1
          </span>
        </div>
        <header className="ln-page-header ln-page-header--hero ln-page-header--center">
          <p className="ln-page-header__eyebrow">
            SCSS / BEM / Cascade Layers
          </p>
          <h1 className="ln-page-header__title">
            Build interfaces with rhythm.
          </h1>
          <p className="ln-page-header__lead">
            ln is a CSS library built on an 8px grid, cascade layers, and
            semantic HTML. No framework lock-in. No build magic required.
            Just clean, predictable styles.
          </p>
          <div className="ln-page-header__actions">
            <Link
              href="/getting-started"
              className="ln-button ln-button--lg"
            >
              Get Started
            </Link>
            <a
              href="https://github.com"
              className="ln-button ln-button--outline ln-button--lg"
            >
              View on GitHub
            </a>
          </div>
        </header>
      </section>

      {/* Feature grid */}
      <section className="ln-section ln-section--space-xl ln-section--surface-sunken">
        <header className="ln-section__header">
          <p className="ln-section__eyebrow">Why ln</p>
          <h2 className="ln-section__title">Designed for clarity</h2>
        </header>
        <div className="ln-grid ln-grid--cols-1 ln-grid--cols-2@sm ln-grid--cols-3@md ln-grid--gap-md">
          {FEATURES.map((f) => (
            <div key={f.title} className="ln-card">
              <h3 className="ln-card__title">{f.title}</h3>
              <div className="ln-card__body">
                <p>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Code showcase */}
      <section className="ln-section ln-section--space-xl">
        <header className="ln-section__header ln-section--center">
          <p className="ln-section__eyebrow">Markup</p>
          <h2 className="ln-section__title">
            Minimal markup, maximum clarity
          </h2>
          <p className="ln-section__lead">
            BEM class names read like documentation. No utility soup, no
            magic incantations.
          </p>
        </header>
        <div className="ln-grid ln-grid--cols-1 ln-grid--cols-2@md ln-grid--gap-lg">
          <div className="home-code-block">
            <pre className="home-hero-code">
              <code>{`<div class="ln-card">
  <h3 class="ln-card__title">
    Card title
  </h3>
  <div class="ln-card__body">
    <p>Card content goes here.</p>
  </div>
  <div class="ln-card__actions">
    <a class="ln-button" href="#">
      Action
    </a>
  </div>
</div>`}</code>
            </pre>
          </div>
          <div className="home-code-preview">
            <div className="ln-card">
              <h3 className="ln-card__title">Card title</h3>
              <div className="ln-card__body">
                <p>Card content goes here.</p>
              </div>
              <div className="ln-card__actions">
                <span className="ln-button">Action</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="ln-section ln-section--space-lg ln-section--surface-sunken ln-section--bordered">
        <div className="ln-grid ln-grid--cols-2 ln-grid--cols-4@md ln-grid--gap-md">
          {STATS.map((s) => (
            <div key={s.label} className="ln-stat ln-stat--flat">
              <span className="ln-stat__label">{s.label}</span>
              <span className="ln-stat__value">
                {s.value}
                {s.unit && (
                  <span className="ln-stat__unit">{s.unit}</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ln-section ln-section--space-2xl ln-section--center ln-section--surface-inverse">
        <div className="ln-page-header ln-page-header--center">
          <h2 className="ln-page-header__title">Ready to build?</h2>
          <p className="ln-page-header__lead">
            Get up and running in minutes. Install the library, link the
            stylesheet, and start writing semantic HTML.
          </p>
          <div className="ln-page-header__actions">
            <Link
              href="/getting-started"
              className="ln-button ln-button--lg"
            >
              Get Started
            </Link>
            <a
              href="https://github.com"
              className="ln-button ln-button--ghost ln-button--lg"
            >
              View Source
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ln-site-footer">
        <div className="ln-site-footer__inner">
          <div className="ln-site-footer__columns">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <p className="ln-site-footer__heading">{col.heading}</p>
                <ul className="ln-site-footer__links">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="ln-site-footer__link"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="ln-site-footer__bottom">
            <p className="ln-site-footer__legal">
              Built with ln. MIT License.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
