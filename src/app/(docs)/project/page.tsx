import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project",
  description: "About Linea UI, changelog, and project resources.",
};

const PAGES = [
  { href: "/project/about", label: "About", description: "The story behind Linea UI, its principles, and Collective Trait." },
  { href: "/project/changelog", label: "Changelog", description: "All notable changes to Linea UI." },
];

export default function ProjectIndex() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Project</h1>
        <p className="lead text-subtle">
          About Linea UI, changelog, and project resources.
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
