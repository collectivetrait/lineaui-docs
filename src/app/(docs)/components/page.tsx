import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Components",
  description: "Interactive and presentational UI components.",
};

const PAGES = [
  { href: "/components/alert", label: "Alert", description: "Contextual feedback messages." },
  { href: "/components/badge", label: "Badge", description: "Small status indicators and counters." },
  { href: "/components/breadcrumb", label: "Breadcrumb", description: "Navigation trail for page hierarchy." },
  { href: "/components/button", label: "Button", description: "Primary, outline, ghost and icon button styles." },
  { href: "/components/button-group", label: "Button Group", description: "Grouped buttons with shared borders." },
  { href: "/components/divider", label: "Divider", description: "Horizontal and vertical content separators." },
  { href: "/components/drawer", label: "Drawer", description: "Off-canvas sliding panels." },
  { href: "/components/dropdown", label: "Dropdown", description: "Toggle-triggered floating menus." },
  { href: "/components/empty-state", label: "Empty State", description: "Placeholder content for empty views." },
  { href: "/components/menu", label: "Menu", description: "Vertical navigation and action lists." },
  { href: "/components/modal", label: "Modal", description: "Dialog overlays for focused tasks." },
  { href: "/components/navbar", label: "Navbar", description: "Responsive top navigation bar." },
  { href: "/components/pagination", label: "Pagination", description: "Page navigation controls." },
  { href: "/components/progress", label: "Progress", description: "Progress bars and indicators." },
  { href: "/components/site-footer", label: "Site Footer", description: "Multi-column page footer." },
  { href: "/components/skeleton", label: "Skeleton", description: "Loading placeholder shapes." },
  { href: "/components/spinner", label: "Spinner", description: "Animated loading indicators." },
  { href: "/components/steps", label: "Steps", description: "Multi-step progress indicators." },
  { href: "/components/tabs", label: "Tabs", description: "Tabbed content panels." },
  { href: "/components/tag", label: "Tag", description: "Labels, chips and removable tags." },
  { href: "/components/toast", label: "Toast", description: "Brief notification pop-ups." },
  { href: "/components/tooltip", label: "Tooltip", description: "Contextual hover and focus hints." },
];

export default function ComponentsIndex() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Components</h1>
        <p className="lead text-subtle">
          Interactive and presentational UI components.
        </p>
      </section>

      <section className="docs-section">
        <ul className="docs-index-list">
          {PAGES.map((page) => (
            <li key={page.href}>
              <Link href={page.href}>{page.label}</Link>
              <span>{page.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
