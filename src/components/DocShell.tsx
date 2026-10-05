import { SideNav } from "./SideNav";
import { SidebarToggle } from "./SidebarToggle";
import { SiteHeader } from "./SiteHeader";
import { GridToggle } from "./GridToggle";
import { TocToggle } from "./TocToggle";
import { BackToTop } from "./BackToTop";
import { PreviewGridToggles } from "./PreviewGridToggles";

export function DocShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-shell">
      <SiteHeader before={<SidebarToggle />} />
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
