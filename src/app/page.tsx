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
              <Link href="/getting-started" className="ln-button ln-button--lg">
                <span className="ln-button__label">Get started</span>
                <span className="ln-button__icon">
                  <svg viewBox="0 0 640 640" fill="currentColor" aria-hidden="true">
                    <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                  </svg>
                </span>
              </Link>
              <Link href="/components/button" className="ln-button ln-button--outline ln-button--lg bg-surface-sunken">
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
                          <svg className="ln-alert__icon" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
                              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
                          </svg>
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

      {/* 2. Principles */}
      <section className="ln-section ln-section--wide ln-section--space-2xl ln-section--surface-sunken">
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
            <a href="https://github.com" className="ln-button ln-button--outline ln-button--lg">
              View source
            </a>
          </div>
        </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
