import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "Guides for installing, configuring and understanding Linea UI.",
};

const PAGES = [
  { href: "/getting-started/introduction", label: "Introduction", description: "Install Linea UI, import the CSS and JS, and write your first page." },
  { href: "/getting-started/principles", label: "Principles", description: "The eight design principles that shape every default in the library." },
  { href: "/getting-started/bem", label: "BEM", description: "How Linea UI uses Block, Element, Modifier naming for predictable selectors." },
  { href: "/getting-started/vertical-rhythm", label: "Vertical Rhythm", description: "The 8 px grid and 24 px baseline that keep every page aligned." },
  { href: "/getting-started/customization", label: "Customization", description: "Override tokens, swap layers and build a custom stylesheet." },
];

export default function GettingStartedIndex() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Getting Started</h1>
        <p className="lead text-subtle">
          Guides for installing, configuring and understanding Linea UI.
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
