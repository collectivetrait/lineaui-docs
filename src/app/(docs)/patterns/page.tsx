import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patterns",
  description: "Full-page layout patterns built with Linea UI components.",
};

const PAGES = [
  { href: "/patterns/ecommerce", label: "E-commerce", description: "Product listing and detail page layouts." },
  { href: "/patterns/dashboard", label: "Dashboard", description: "Admin and analytics dashboard layouts." },
];

export default function PatternsIndex() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Patterns</h1>
        <p className="lead text-subtle">
          Full-page layout patterns built with Linea UI components.
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
