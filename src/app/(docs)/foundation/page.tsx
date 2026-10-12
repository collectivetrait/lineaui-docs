import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation",
  description: "Base styles for typography, text, fonts, media, figures, tables and theming.",
};

const PAGES = [
  { href: "/foundation/typography", label: "Typography", description: "Type scale, line heights and heading styles." },
  { href: "/foundation/text", label: "Text", description: "Inline text utilities and semantic text elements." },
  { href: "/foundation/fonts", label: "Fonts", description: "Font stacks and loading strategy." },
  { href: "/foundation/media", label: "Media", description: "Responsive images, video and embedded content." },
  { href: "/foundation/figures", label: "Figures", description: "Figure and figcaption styles." },
  { href: "/foundation/tables", label: "Tables", description: "Table base styles and modifiers." },
  { href: "/foundation/icons", label: "Icons", description: "Icon library integration and usage with Linea UI components." },
  { href: "/foundation/theme", label: "Theme", description: "Light and dark mode tokens and switching." },
];

export default function FoundationIndex() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Foundation</h1>
        <p className="lead text-subtle">
          Base styles for typography, text, fonts, media, figures, tables and theming.
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
