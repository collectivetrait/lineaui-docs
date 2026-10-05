import { SideNav } from "./SideNav";
import { SidebarToggle } from "./SidebarToggle";
import { ThemeToggle } from "./ThemeToggle";
import { GridToggle } from "./GridToggle";
import { TocToggle } from "./TocToggle";
import { BackToTop } from "./BackToTop";
import { PreviewGridToggles } from "./PreviewGridToggles";
import Link from "next/link";

export function DocShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-shell">
      <header className="docs-shell__header">
        <div className="docs-shell__header-inner">
          <SidebarToggle />
          <Link href="/" className="docs-site-logo">
            ln
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <GridToggle />
      <TocToggle />
      <BackToTop />
      <PreviewGridToggles />
      <div className="docs-shell__body">
        <aside className="docs-shell__sidebar">
          <SideNav />
        </aside>
        <main className="docs-shell__main">
          <div className="docs-page-content">{children}</div>
        </main>
      </div>
    </div>
  );
}
