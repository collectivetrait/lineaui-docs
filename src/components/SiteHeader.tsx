import { NavToggle } from "./NavToggle";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";
import Link from "next/link";

export function SiteHeader({ before }: { before?: React.ReactNode }) {
  return (
    <header className="docs-shell__header">
      <div className="docs-shell__header-inner">
        {before}
        <Link href="/" className="docs-site-logo">
          <span className="docs-site-logo__name">Linea</span>{" "}
          <span className="docs-site-logo__ui">UI</span>
        </Link>
        <nav className="docs-shell__nav" aria-label="Main">
          <Link href="/getting-started" className="docs-shell__nav-link">Documentation</Link>
          <Link href="/icons" className="docs-shell__nav-link">Icons</Link>
          <Link href="/about" className="docs-shell__nav-link">About</Link>
        </nav>
        <div className="docs-shell__actions">
          <SearchBar />
          <a className="docs-shell__github" href="https://github.com/collectivetrait/linea-ui" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
          <ThemeToggle />
        </div>
        <NavToggle />
      </div>
      <div className="docs-shell__nav-panel">
        <nav aria-label="Main (mobile)">
          <Link href="/getting-started" className="docs-shell__nav-panel-link">Documentation</Link>
          <Link href="/icons" className="docs-shell__nav-panel-link">Icons</Link>
          <Link href="/about" className="docs-shell__nav-panel-link">About</Link>
        </nav>
        <SearchBar className="docs-search--panel" />
      </div>
    </header>
  );
}
