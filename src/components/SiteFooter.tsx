import Link from "next/link";

const FOOTER_COLS = [
  {
    heading: "Docs",
    links: [
      { label: "Getting started", href: "/getting-started" },
      { label: "Principles", href: "/getting-started/principles" },
      { label: "BEM", href: "/getting-started/bem" },
      { label: "Vertical rhythm", href: "/getting-started/vertical-rhythm" },
      { label: "Customization", href: "/getting-started/customization" },
    ],
  },
  {
    heading: "Reference",
    links: [
      { label: "Foundation", href: "/foundation/typography" },
      { label: "Layout", href: "/layout/grid" },
      { label: "Components", href: "/components/alert" },
      { label: "Icons", href: "/icons" },
    ],
  },
  {
    heading: "Project",
    links: [
      { label: "About", href: "/about" },
      { label: "Showcase", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "GitHub", href: "https://github.com/collectivetrait/linea-ui" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="ln-site-footer docs-footer">
      <div className="ln-site-footer__inner docs-footer__inner">
        <div className="ln-site-footer__columns">
          <div>
            <Link href="/" className="docs-site-logo">
              <span className="docs-site-logo__name">Linea</span>{" "}
              <span className="docs-site-logo__ui">UI</span>
            </Link>
            <p className="ln-site-footer__description">
              An opinionated SCSS and JS library for content sites, stores and dashboards.
            </p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <p className="ln-site-footer__heading">{col.heading}</p>
              <ul className="ln-site-footer__links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="ln-site-footer__link">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="ln-site-footer__link">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ln-site-footer__bottom">
          <p className="ln-site-footer__legal">
            Built with Linea UI. MIT License.
          </p>
          <p className="ln-site-footer__legal">
            A{" "}
            <a href="https://collectivetrait.com" target="_blank" rel="noopener noreferrer" className="ln-site-footer__link">
              Collective Trait
            </a>{" "}
            project.
          </p>
        </div>
      </div>
    </footer>
  );
}
