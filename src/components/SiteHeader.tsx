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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
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
