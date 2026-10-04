import { SideNav } from "./SideNav";
import { SidebarToggle } from "./SidebarToggle";
import { ThemeToggle } from "./ThemeToggle";
import { GridToggle } from "./GridToggle";
import { PreviewGridToggles } from "./PreviewGridToggles";
import { TableOfContents } from "./TableOfContents";
import Link from "next/link";

export function DocShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="ln-shell">
      <header className="ln-shell__header">
        <SidebarToggle />
        <Link href="/" className="docs-site-logo">
          ln
        </Link>
        <ThemeToggle />
      </header>
      <GridToggle />
      <PreviewGridToggles />
      <aside className="ln-shell__sidebar">
        <SideNav />
      </aside>
      <main className="ln-shell__main">
        <div className="docs-page-layout">
          <div className="docs-page-content">{children}</div>
          <TableOfContents />
        </div>
      </main>
    </div>
  );
}
