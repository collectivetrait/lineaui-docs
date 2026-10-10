import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GridToggle } from "@/components/GridToggle";
import { BackToTop } from "@/components/BackToTop";
import { PreviewGridToggles } from "@/components/PreviewGridToggles";
import { HomeInstallBar } from "@/components/HomeInstallBar";
import { HomeSpecimenToggle } from "@/components/HomeSpecimenToggle";
import { HomeBaselineToggle } from "@/components/HomeBaselineToggle";
import { HomeCodeShowcase } from "@/components/HomeCodeShowcase";
import { CookieConsentReset } from "@/components/CookieConsentReset";

const PRINCIPLES = [
  {
    number: "01",
    code: ".ln-*",
    title: "Minimalism",
    body: "Each component ships the styles it needs and nothing more. Fewer decisions to undo when your design takes over.",
  },
  {
    number: "02",
    code: "__element",
    title: "Specificity",
    body: "BEM class names describe what an element is and keep every rule scoped to its block. No selector reaches into another component, so styles never collide.",
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
    body: "Contrast-checked tokens, visible focus states and scripts that respect keyboard users and reduced motion settings.",
  },
  {
    number: "05",
    code: "@use",
    title: "Small footprint",
    body: "Import modules one by one through SASS @use. The JS layer is optional and adds behavior only where markup asks for it.",
  },
  {
    number: "06",
    code: "8px / 24px",
    title: "Readability",
    body: "Text follows a vertical rhythm: every size and space snap to a grid, and lines flow on a stable baseline. The eye moves down the page at a steady pace.",
  },
  {
    number: "07",
    code: "@md @lg",
    title: "Responsiveness",
    body: "Layouts, headings and utilities adapt through breakpoint suffixes like @md and @lg. The rhythm holds at every screen size.",
  },
  {
    number: "08",
    code: "light-dark()",
    title: "Native first",
    body: "Built on what browsers already support: cascade layers, custom properties and light-dark(). No vendor prefixes, polyfills or workarounds to carry around.",
  },
];

const STATS = [
  { label: "CSS, min + gzip", value: "26", unit: "KB" },
  { label: "JS, min + gzip", value: "6", unit: "KB" },
  { label: "Components", value: "52" },
  { label: "Base unit", value: "8", unit: "px" },
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

const showGridTools = process.env.NEXT_PUBLIC_SHOW_GRID_TOOLS !== "false";

export default function Home() {
  return (
    <div className="docs-shell home-full-width">
      <SiteHeader />

      {/* 1. Hero */}
      <section className="home-hero show-grid ln-section ln-section--wide ln-section--space-2xl">
        <div className="home-hero__inner ln-section__inner">
        <div className="ln-grid ln-grid--cols-1 ln-grid--cols-2@md ln-grid--gap-lg">
          <div>
            <div className="mb-2">
              <span className="ln-badge ln-badge--secondary">
                <span className="ln-badge__dot" />
                v1.0
              </span>
            </div>
            <p className="ln-section__eyebrow">BEM / VERTICAL RHYTHM / CASCADE LAYERS</p>
            <h1 className="text-display-1 font-prose fw-bold mb-4">
              Interfaces that keep the{" "}
              <em className="home-accent fs-italic">beat.</em>
            </h1>
            <p className="lead mb-4">
              Linea UI is a small SCSS and JS library built on BEM and vertical
              rhythm principles. Intuitive class names, accessible defaults and
              a light footprint.
            </p>
            <div className="ln-cluster ln-cluster--gap-sm mb-4">
              <Link href="/getting-started" className="ln-button ln-button--lg">
                <span className="ln-button__label">Get started</span>
                <span className="ln-button__icon">
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </span>
              </Link>
              <Link href="/components/alert" className="ln-button ln-button--outline ln-button--lg bg-surface-sunken">
                Explore components
              </Link>
            </div>
            <HomeInstallBar />
          </div>

          <div>
              <div className="home-specimen bg-surface shadow-4" id="home-specimen">
                  <div className="home-specimen__header">
                      <span>specimen.html</span>
                      <HomeSpecimenToggle />
                  </div>
                  <div className="home-specimen__body">
                      <div className="ln-alert ln-alert--success bg-surface-sunken border mb-1">
                          <i className="fa-solid fa-circle-check ln-alert__icon" aria-hidden="true"></i>
                          <div className="ln-alert__content">
                              <p className="ln-alert__body"><strong>Saved.</strong> ln-alert ln-alert--success</p>
                          </div>
                      </div>
                      <div className="ln-field mb-1">
                          <label className="ln-field__label">Email address</label>
                          <div className="ln-field__control">
                              <input className="bg-surface-sunken pointer-none" type="email" defaultValue="ada@example.com" readOnly autoComplete="off" data-lpignore="true" />
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
                                  Every block above sits on the same regular line. Sizes and gaps come in consistent steps, three to a line. Toggle the baseline to draw that grid over the panel.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
      </section>

      {/* 2. Principles */}
      <section className="ln-section ln-section--wide ln-section--space-2xl ln-section--surface-sunken">
        <div className="ln-section__inner">
        <p className="ln-section__eyebrow">
          <span className="home-accent">01</span> / Principles
        </p>
        <h2 className="text-display-2 font-prose">
          Strong opinions built into every component.
        </h2>
        <p className="prose font-ui">
          Every decision in Linea UI traces back to one of these. Each one is
          a SASS variable or a single layer away from your own rules.
        </p>

        <div className="home-principles ln-grid ln-grid--cols-1 ln-grid--cols-2@sm ln-grid--cols-4@lg ln-grid--gap-0 bg-surface-raised shadow-2">
          {PRINCIPLES.map((p) => (
            <div key={p.number} className="ln-card border-0">
              <div className="ln-card__eyebrow home-principle__eyebrow">
                <div className="home-principle__header">
                  <span className="home-principle__number">{p.number}</span>
                  <code>{p.code}</code>
                </div>
              </div>
              <h3 className="ln-card__title h2 font-prose mb-2">{p.title}</h3>
              <div className="ln-card__body home-principle__accent">
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* 3. Code showcase */}
      <section className="ln-section ln-section--wide ln-section--space-2xl">
        <div className="ln-section__inner">
        <div className="ln-section__header">
          <p className="ln-section__eyebrow">
            <span className="home-accent">02</span> / Markup playground
          </p>
          <h2 className="text-display-2 font-prose">
            Class names that say what each element is.
          </h2>
          <p className="ln-section__lead">
            Block, element, modifier. Every block and its internal components follow a standard naming pattern, so the markup alone tells you what each part is and which block its styles belong to. If you know BEM, you already know how to use Linea UI.
          </p>
        </div>
        <HomeCodeShowcase />
        </div>
      </section>

      {/* 4. Rhythm */}
      <section className="ln-section ln-section--wide ln-section--space-2xl ln-section--surface-sunken">
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
              one base unit. Line heights step in regular increments, so every
              block starts where the grid expects it.
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

      {/* 5. Stats row */}
      <section className="ln-section ln-section--wide ln-section--space-lg">
        <div className="ln-section__inner">
        <div className="ln-grid ln-grid--cols-2 ln-grid--cols-4@md ln-grid--gap-md home-stats">
          {STATS.map((s) => (
            <div key={s.label} className="ln-stat ln-stat--flat home-stats__item">
              <span className="ln-stat__label">{s.label}</span>
              <span className="ln-stat__value home-stats__value">
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
          <div className="ln-cluster ln-cluster--justify-center ln-cluster--gap-sm align-self-center">
            <Link href="/getting-started" className="ln-button ln-button--lg">
              Read the docs
            </Link>
            <a href="https://github.com/collectivetrait/linea-ui" target="_blank" rel="noopener noreferrer" className="ln-button ln-button--outline ln-button--lg">
              View source
            </a>
          </div>
        </div>
        </div>
      </section>

      <div className="docs-fixed-buttons">
        {showGridTools && <GridToggle />}
        <BackToTop />
        {showGridTools && <PreviewGridToggles />}
        {process.env.NEXT_PUBLIC_SHOW_COOKIE_CONSENT !== "false" && (
          <CookieConsentReset />
        )}
      </div>
      <SiteFooter />
    </div>
  );
}
