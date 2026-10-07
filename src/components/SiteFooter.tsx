import Link from "next/link";

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

export function SiteFooter() {
  return (
    <footer className="ln-site-footer docs-footer">
      <div className="ln-site-footer__inner docs-footer__inner">
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
  );
}
