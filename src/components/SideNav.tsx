"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    group: "Getting Started",
    links: [
      { label: "Introduction", href: "/getting-started" },
      { label: "BEM", href: "/getting-started/bem" },
      { label: "Vertical Rhythm", href: "/getting-started/vertical-rhythm" },
      { label: "Customization", href: "/getting-started/customization" },
    ],
  },
  {
    group: "Foundation",
    links: [
      { label: "Typography", href: "/foundation/typography" },
      { label: "Text", href: "/foundation/text" },
      { label: "Fonts", href: "/foundation/fonts" },
      { label: "Media", href: "/foundation/media" },
      { label: "Figures", href: "/foundation/figures" },
      { label: "Tables", href: "/foundation/tables" },
    ],
  },
  {
    group: "Layout",
    links: [
      { label: "Breakpoints", href: "/layout/breakpoints" },
      { label: "Container", href: "/layout/container" },
      { label: "Grid", href: "/layout/grid" },
      { label: "Cluster", href: "/layout/cluster" },
      { label: "Section", href: "/layout/section" },
      { label: "Z-index", href: "/layout/z-index" },
    ],
  },
  {
    group: "Content",
    links: [
      { label: "Avatar", href: "/content/avatar" },
      { label: "Meta", href: "/content/meta" },
      { label: "Prose", href: "/content/prose" },
      { label: "Quote", href: "/content/quote" },
      { label: "Code", href: "/content/code" },
      { label: "Accordion", href: "/content/accordion" },
      { label: "List", href: "/content/list" },
      { label: "Card", href: "/content/card" },
      { label: "Page Header", href: "/content/page-header" },
    ],
  },
  {
    group: "Forms",
    links: [
      { label: "Field", href: "/forms/field" },
      { label: "Input Group", href: "/forms/input-group" },
      { label: "Choice", href: "/forms/choice" },
      { label: "Form", href: "/forms/form" },
    ],
  },
  {
    group: "Components",
    links: [
      { label: "Alert", href: "/components/alert" },
      { label: "Badge", href: "/components/badge" },
      { label: "Breadcrumb", href: "/components/breadcrumb" },
      { label: "Button", href: "/components/button" },
      { label: "Button Group", href: "/components/button-group" },
      { label: "Divider", href: "/components/divider" },
      { label: "Drawer", href: "/components/drawer" },
      { label: "Dropdown", href: "/components/dropdown" },
      { label: "Empty State", href: "/components/empty-state" },
      { label: "Menu", href: "/components/menu" },
      { label: "Modal", href: "/components/modal" },
      { label: "Navbar", href: "/components/navbar" },
      { label: "Pagination", href: "/components/pagination" },
      { label: "Progress", href: "/components/progress" },
      { label: "Site Footer", href: "/components/site-footer" },
      { label: "Skeleton", href: "/components/skeleton" },
      { label: "Spinner", href: "/components/spinner" },
      { label: "Steps", href: "/components/steps" },
      { label: "Tabs", href: "/components/tabs" },
      { label: "Tag", href: "/components/tag" },
      { label: "Toast", href: "/components/toast" },
      { label: "Tooltip", href: "/components/tooltip" },
    ],
  },
  {
    group: "Patterns",
    links: [
      { label: "E-commerce", href: "/patterns/ecommerce" },
      { label: "Dashboard", href: "/patterns/dashboard" },
    ],
  },
  {
    group: "Utilities",
    links: [
      { label: "Background", href: "/utilities/background" },
      { label: "Borders", href: "/utilities/borders" },
      { label: "Colors", href: "/utilities/colors" },
      { label: "Display", href: "/utilities/display" },
      { label: "Flex", href: "/utilities/flex" },
      { label: "Float", href: "/utilities/float" },
      { label: "Opacity", href: "/utilities/opacity" },
      { label: "Overflow", href: "/utilities/overflow" },
      { label: "Position", href: "/utilities/position" },
      { label: "Shadows", href: "/utilities/shadows" },
      { label: "Sizing", href: "/utilities/sizing" },
      { label: "Spacing", href: "/utilities/spacing" },
    ],
  },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation navigation">
      <ul className="docs-sidenav">
        {NAV.map((section) => (
          <li key={section.group} className="docs-sidenav-section">
            <span className="docs-sidenav-group">{section.group}</span>
            <ul className="docs-sidenav-links">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`docs-sidenav-link${pathname === link.href ? " docs-sidenav-link--active" : ""}`}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
