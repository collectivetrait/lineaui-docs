import { NavToggle } from "./NavToggle";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

export function SiteHeader({ before }: { before?: React.ReactNode }) {
  return (
    <header className="docs-shell__header">
      <div className="docs-shell__header-inner">
        {before}
        <Link href="/" className="docs-site-logo">
          ln
        </Link>
        <nav className="docs-shell__nav" aria-label="Main">
          <Link href="/getting-started" className="docs-shell__nav-link">Documentation</Link>
          <Link href="#" className="docs-shell__nav-link">Icons</Link>
          <Link href="#" className="docs-shell__nav-link">Showcase</Link>
          <Link href="#" className="docs-shell__nav-link">About</Link>
        </nav>
        <div className="docs-shell__actions">
          <input
            className="docs-shell__search"
            type="search"
            placeholder="Search..."
            aria-label="Search documentation"
          />
          <a className="docs-shell__github" href="#" aria-label="GitHub">
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <ThemeToggle />
        </div>
        <NavToggle />
      </div>
      <div className="docs-shell__nav-panel">
        <nav aria-label="Main (mobile)">
          <Link href="/getting-started" className="docs-shell__nav-panel-link">Documentation</Link>
          <Link href="#" className="docs-shell__nav-panel-link">Icons</Link>
          <Link href="#" className="docs-shell__nav-panel-link">Showcase</Link>
          <Link href="#" className="docs-shell__nav-panel-link">About</Link>
        </nav>
        <input
          className="docs-shell__nav-panel-search"
          type="search"
          placeholder="Search..."
          aria-label="Search documentation"
        />
      </div>
    </header>
  );
}
