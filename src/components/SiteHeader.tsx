"use client";

import { usePathname } from "next/navigation";
import { NavToggle } from "./NavToggle";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/getting-started", label: "Documentation", match: (p: string) => p !== "/" && !p.startsWith("/foundation/icons") && !p.startsWith("/project") },
  { href: "/foundation/icons", label: "Icons", match: (p: string) => p.startsWith("/foundation/icons") },
  { href: "/project/about", label: "About", match: (p: string) => p.startsWith("/project") },
];

export function SiteHeader({ before }: { before?: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <header className="docs-shell__header">
      <div className="docs-shell__header-inner">
        {before}
        <Link href="/" className="docs-site-logo">
          <img src="/logo-light.svg" alt="Linea UI" className="docs-site-logo__img docs-site-logo__img--light" width="395" height="66" />
          <img src="/logo-dark.svg" alt="Linea UI" className="docs-site-logo__img docs-site-logo__img--dark" width="395" height="66" />
        </Link>
        <nav className="docs-shell__nav" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.match(pathname) ? "docs-shell__nav-link is-active" : "docs-shell__nav-link"}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="docs-shell__actions">
          <SearchBar />
          <a className="docs-shell__github" href="#" aria-label="GitHub">
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
          <ThemeToggle />
        </div>
        <NavToggle />
      </div>
      <div className="docs-shell__nav-panel">
        <nav aria-label="Main (mobile)">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.match(pathname) ? "docs-shell__nav-panel-link is-active" : "docs-shell__nav-panel-link"}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <SearchBar className="docs-search--panel" />
      </div>
    </header>
  );
}
