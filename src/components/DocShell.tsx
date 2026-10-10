import { SideNav } from "./SideNav";
import { SidebarToggle } from "./SidebarToggle";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { GridToggle } from "./GridToggle";
import { TocToggle } from "./TocToggle";
import { BackToTop } from "./BackToTop";
import { PreviewGridToggles } from "./PreviewGridToggles";
import { CookieConsentReset } from "./CookieConsentReset";

const showGridTools = process.env.NEXT_PUBLIC_SHOW_GRID_TOOLS !== "false";

export function DocShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-shell docs-docs">
      <SiteHeader before={<SidebarToggle />} />
      <div className="docs-shell__body">
        <aside className="docs-shell__sidebar">
          <SideNav />
        </aside>
        <main className="docs-shell__main">
          <div className="docs-page-content">{children}</div>
        </main>
      </div>
      <div className="docs-fixed-buttons">
        {showGridTools && <GridToggle />}
        <TocToggle />
        <BackToTop />
        {showGridTools && <PreviewGridToggles />}
        {process.env.NEXT_PUBLIC_SHOW_COOKIE_CONSENT !== "false" && (
          <CookieConsentReset />
        )}
      </div>
      <SiteFooter />
    </div>
  );
}
