import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Utilities",
  description: "Single-purpose utility classes for spacing, display, color and more.",
};

const PAGES = [
  { href: "/utilities/background", label: "Background", description: "Background color utilities." },
  { href: "/utilities/borders", label: "Borders", description: "Border width, style and radius utilities." },
  { href: "/utilities/colors", label: "Colors", description: "Text and foreground color utilities." },
  { href: "/utilities/display", label: "Display", description: "Block, inline, flex and hidden utilities." },
  { href: "/utilities/flex", label: "Flex", description: "Flex direction, wrap, align and justify utilities." },
  { href: "/utilities/float", label: "Float", description: "Float and clearfix utilities." },
  { href: "/utilities/opacity", label: "Opacity", description: "Opacity level utilities." },
  { href: "/utilities/overflow", label: "Overflow", description: "Overflow visible, hidden, scroll and auto utilities." },
  { href: "/utilities/pointer-events", label: "Pointer Events", description: "Enable or disable pointer events." },
  { href: "/utilities/position", label: "Position", description: "Static, relative, absolute, fixed and sticky utilities." },
  { href: "/utilities/shadows", label: "Shadows", description: "Box-shadow elevation utilities." },
  { href: "/utilities/sizing", label: "Sizing", description: "Width and height utilities." },
  { href: "/utilities/spacing", label: "Spacing", description: "Margin and padding utilities." },
  { href: "/utilities/accessibility", label: "Accessibility", description: "Screen-reader-only and visually-hidden utilities." },
];

export default function UtilitiesIndex() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Utilities</h1>
        <p className="lead text-subtle">
          Single-purpose utility classes for spacing, display, color and more.
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
