import Link from "next/link";

const FOOTER_COLS = [
  {
    heading: "Docs",
    links: [
      { label: "Getting started", href: "/getting-started" },
      { label: "Principles", href: "/getting-started/principles" },
      { label: "Customization", href: "/getting-started/customization" },
    ],
  },
  {
    heading: "Reference",
    links: [
      { label: "Foundation", href: "/foundation" },
      { label: "Layout", href: "/layout" },
      { label: "Components", href: "/components" },
    ],
  },
  {
    heading: "Project",
    links: [
      { label: "About", href: "/project/about" },
      { label: "Changelog", href: "/project/changelog" },
      { label: "GitHub", href: "https://github.com/collectivetrait/lineaui" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="ln-site-footer docs-footer">
      <div className="ln-site-footer__inner docs-footer__inner">
        <div className="ln-site-footer__columns">
          <div>
            <p className="ln-site-footer__heading">
              <Link href="/" className="docs-site-logo">
                <img src="/logo-mono-light.svg" alt="Linea UI" className="docs-site-logo__img docs-site-logo__img--light" width="395" height="66" />
                <img src="/logo-mono-dark.svg" alt="Linea UI" className="docs-site-logo__img docs-site-logo__img--dark" width="395" height="66" />
              </Link>
            </p>
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
          <span className="ln-site-footer__legal">
            Built with Linea UI. MIT License.
          </span>
          <span className="ln-site-footer__legal">
            A{" "}
            <a href="https://collectivetrait.com" target="_blank" rel="noopener noreferrer" className="ln-site-footer__link">
              Collective Trait
            </a>{" "}
            project.
          </span>
        </div>
      </div>
    </footer>
  );
}
