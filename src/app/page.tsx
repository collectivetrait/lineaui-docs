import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { GridToggle } from "@/components/GridToggle";
import { BackToTop } from "@/components/BackToTop";
import { PreviewGridToggles } from "@/components/PreviewGridToggles";
import { HomeInstallBar } from "@/components/HomeInstallBar";
import { HomeSpecimenToggle } from "@/components/HomeSpecimenToggle";
import { HomeBaselineToggle } from "@/components/HomeBaselineToggle";
import { HomeCodeShowcase } from "@/components/HomeCodeShowcase";

const PRINCIPLES = [
  {
    number: "01",
    code: ".ln-*",
    title: "Minimalism",
    body: "Each component ships the styles it needs and nothing more. Fewer decisions to undo when your design takes over.",
  },
  {
    number: "02",
    code: ".__element",
    title: "Readability",
    body: "BEM class names describe what an element is. Your markup stays legible six months later, for you and for whoever comes next.",
  },
  {
    number: "03",
    code: "<h1> <p> <table>",
    title: "Ease of use",
    body: "Link one stylesheet and write semantic HTML. Headings, lists and tables look right before you add a single class.",
  },
  {
    number: "04",
    code: ":focus-visible",
    title: "Accessibility",
    body: "Contrast-checked tokens, visible focus rings and scripts that respect keyboard users and reduced motion settings.",
  },
  {
    number: "05",
    code: "Score",
    title: "Small footprint",
    body: "Import modules one by one through SASS @use. The JS layer is optional and lives only where markup asks for it.",
  },
  {
    number: "06",
    code: "8px / 24px",
    title: "Vertical rhythm",
    body: "Every size and space snaps to an 8px grid, and text flows on a 24px baseline. Pages line up without manual nudging.",
  },
];

const STATS = [
  { label: "CSS, min + gzip", value: "[XX]", unit: "KB" },
  { label: "JS, min + gzip", value: "[XX]", unit: "KB" },
  { label: "Components", value: "[NN]" },
  { label: "Base unit", value: "8", unit: "px" },
];

const FOOTER_COLS = [
  {
    heading: "Library",
    links: [
      { label: "Getting started", href: "/getting-started" },
      { label: "Principles", href: "/getting-started/principles" },
      { label: "BEM conventions", href: "/getting-started/bem" },
      { label: "Vertical rhythm", href: "/getting-started/vertical-rhythm" },
    ],
  },
  {
    heading: "Docs",
    links: [
      { label: "Foundation", href: "/foundation/typography" },
      { label: "Layout", href: "/layout/grid" },
      { label: "Components", href: "/components/button" },
      { label: "JavaScript modules", href: "/components/button" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Customization", href: "/getting-started/customization" },
      { label: "Accessibility notes", href: "/getting-started/principles" },
      { label: "Changelog", href: "#" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
];

const SPECIMEN_ROWS = [
  { size: "80", lh: "96", text: "Display", className: "text-display-1" },
  { size: "40", lh: "48", text: "Heading one", className: "h1" },
  { size: "32", lh: "48", text: "Heading two", className: "h2 fs-italic" },
  {
    size: "20",
    lh: "24",
    text: "Heading three, set in the sans",
    className: "h3 font-ui fw-semibold",
  },
  {
    size: "16",
    lh: "24",
    text: "Body copy runs on a 24px line. Paragraph spacing is one full line, so a page of mixed content keeps its cadence from top to bottom.",
    className: "",
  },
  { size: "12", lh: "16", text: "CAPTION AND MONO LABELS", className: "h6" },
];

export default function Home() {
  return (
    <div className="docs-shell home-full-width">
      <SiteHeader />
      <GridToggle />
      <BackToTop />
      <PreviewGridToggles />

      {/* 1. Hero */}
      <section className="ln-section ln-section--wide ln-section--space-2xl">
        <div className="ln-section__inner">
        <div className="ln-grid ln-grid--cols-1 ln-grid--cols-2@md ln-grid--gap-lg">
          <div>
            <div className="mb-2">
              <span className="ln-badge ln-badge--primary">
                <span className="ln-badge__dot" />
                v1.0
              </span>
            </div>
            <p className="ln-section__eyebrow">BEM / Vertical rhythm / Cascade layers</p>
            <h1 className="text-display-1 font-prose fw-bold mb-4">
              Interfaces that keep the{" "}
              <em className="home-accent fs-italic">beat.</em>
            </h1>
            <p className="lead mb-4">
              linea-ui is a small CSS and JS library built on BEM naming and an
              8px vertical rhythm. Readable class names, accessible defaults and
              a footprint you can reason about.
            </p>
            <div className="ln-cluster ln-cluster--gap-sm mb-4">
              <Link href="/getting-started" className="ln-button ln-button--lg rounded-none">
                Get started &rarr;
              </Link>
              <Link href="/components/button" className="ln-button ln-button--outline ln-button--lg rounded-none">
                Explore components
              </Link>
            </div>
            <HomeInstallBar />
          </div>

          <div>
              <div className="home-specimen bg-surface" id="home-specimen">
                  <div className="home-specimen__header">
                      <span>specimen.html</span>
                      <HomeSpecimenToggle />
                  </div>
                  <div className="home-specimen__body">
                      <div className="ln-alert ln-alert--success bg-surface-sunken border mb-1">
                          <svg className="ln-alert__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <div className="ln-alert__content">
                              <p className="ln-alert__body"><strong>Saved.</strong> ln-alert ln-alert--success</p>
                          </div>
                      </div>
                      <div className="ln-field mb-1">
                          <label className="ln-field__label">Email address</label>
                          <div className="ln-field__control">
                              <input className="bg-surface-sunken" type="email" defaultValue="ada@example.com" readOnly />
                          </div>
                      </div>
                      <div className="ln-cluster ln-cluster--gap-sm mb-1">
                          <span className="ln-button">Subscribe</span>
                          <span className="ln-button ln-button--outline">Cancel</span>
                      </div>
                      <div className="ln-card bg-surface-sunken">
                          <h3 className="ln-card__title h2">Card title</h3>
                          <div className="ln-card__body">
                              <p>
                                  Every block above sits on the same 24px line. Toggle the
                                  baseline to check.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
      </section>

      {/* 2. Ticker band */}
      <div className="bg-primary py-3 home-ticker" aria-hidden="true">
        <div className="ln-cluster ln-cluster--justify-center ln-cluster--gap-md ln-cluster--nowrap">
          <span className="text-display-2 font-prose text-inverse">Ease of use</span>
          <span className="text-display-2 font-prose text-inverse">/</span>
          <span className="text-display-2 font-prose text-inverse fs-italic">Accessibility</span>
          <span className="text-display-2 font-prose text-inverse">/</span>
          <span className="text-display-2 font-prose text-inverse">Small footprint</span>
          <span className="text-display-2 font-prose text-inverse">/</span>
          <span className="text-display-2 font-prose text-inverse fs-italic">Vertical rhythm</span>
          <span className="text-display-2 font-prose text-inverse">/</span>
          <span className="text-display-2 font-prose text-inverse">Minimalism</span>
        </div>
      </div>

      {/* 3. Principles */}
      <section className="ln-section ln-section--wide ln-section--space-2xl">
        <div className="ln-section__inner">
        <p className="ln-section__eyebrow">
          <span className="home-accent">01</span> / Principles
        </p>
        <h2 className="text-display-2 font-prose">
          Six opinions, written down so you can disagree with them.
        </h2>
        <p className="prose font-ui">
          Every default in linea-ui traces back to one of these. Each one is
          a SASS variable or a single layer away from your own rules.
        </p>

        <div className="ln-grid ln-grid--cols-1 ln-grid--cols-2@sm ln-grid--cols-4@lg ln-grid--gap-0 bg-surface-raised border">
          {PRINCIPLES.map((p) => (
            <div key={p.number} className="ln-card">
              <div className="ln-card__eyebrow">
                <div className="home-principle__header">
                  <span className="home-principle__number">{p.number}</span>
                  <code>{p.code}</code>
                </div>
              </div>
              <h3 className="ln-card__title">{p.title}</h3>
              <div className="ln-card__body home-principle__accent">
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* 4. Code showcase */}
      <section className="ln-section ln-section--wide ln-section--space-2xl ln-section--surface-sunken">
        <div className="ln-section__inner">
        <div className="ln-section__header">
          <p className="ln-section__eyebrow">
            <span className="home-accent">02</span> / Markup
          </p>
          <h2 className="text-display-2 font-prose">
            Class names that read like documentation.
          </h2>
          <p className="ln-section__lead">
            Block, element, modifier. Pick a component and read its markup next
            to the result.
          </p>
        </div>
        <HomeCodeShowcase />
        </div>
      </section>

      {/* 5. Rhythm */}
      <section className="ln-section ln-section--wide ln-section--space-2xl">
        <div className="ln-section__inner">
        <div className="ln-grid ln-grid--cols-1 ln-grid--cols-2@md ln-grid--gap-lg">
          <div>
            <p className="ln-section__eyebrow">
              <span className="home-accent">03</span> / Rhythm
            </p>
            <h2 className="text-display-2 font-prose mb-3">
              Everything lands on the line.
            </h2>
            <p className="mb-3">
              Type sizes, margins and component heights resolve to multiples of
              one base unit. Line heights step in 8px increments, so every block
              starts where the grid expects it.
            </p>
            <HomeBaselineToggle />
          </div>
          <div id="home-rhythm">
            {SPECIMEN_ROWS.map((row) => (
              <div key={row.size + row.text} className="home-specimen-row">
                <div className="home-specimen-meta">
                  {row.size} / {row.lh}
                </div>
                <div className={`home-specimen-sample ${row.className}`}>
                  {row.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* 6. Stats row */}
      <section className="ln-section ln-section--wide ln-section--space-lg ln-section--bordered">
        <div className="ln-section__inner">
        <div className="ln-grid ln-grid--cols-2 ln-grid--cols-4@md ln-grid--gap-md home-stats">
          {STATS.map((s) => (
            <div key={s.label} className="ln-stat ln-stat--flat home-stats__item">
              <span className="ln-stat__label">{s.label}</span>
              <span className="ln-stat__value">
                {s.value}
                {s.unit && <span className="ln-stat__unit">{s.unit}</span>}
              </span>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="ln-section ln-section--wide ln-section--space-2xl ln-section--surface-inverse">
        <div className="ln-section__inner">
        <div className="ln-grid ln-grid--cols-1 ln-grid--cols-2@md ln-grid--gap-lg">
          <div>
            <h2 className="text-display-2 font-prose">Ready to build?</h2>
            <p className="mt-2">
              Install the package, link the stylesheet and start writing semantic
              HTML. Reach for the JS modules only when a component needs them.
            </p>
          </div>
          <div className="ln-cluster ln-cluster--justify-end@md ln-cluster--gap-sm align-self-center">
            <Link href="/getting-started" className="ln-button ln-button--lg">
              Read the docs
            </Link>
            <a href="https://github.com" className="ln-button ln-button--outline ln-button--lg">
              View source
            </a>
          </div>
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
                      <Link href={link.href} className="ln-site-footer__link">
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
              Built with linea-ui. MIT License.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
