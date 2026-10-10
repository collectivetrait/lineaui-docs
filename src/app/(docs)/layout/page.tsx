import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Layout",
  description: "Breakpoints, containers, grids, clusters, sections and z-index layers.",
};

const PAGES = [
  { href: "/layout/breakpoints", label: "Breakpoints", description: "Responsive breakpoints and media-query tokens." },
  { href: "/layout/container", label: "Container", description: "Max-width wrappers with inline padding." },
  { href: "/layout/grid", label: "Grid", description: "CSS Grid columns, gaps and responsive variants." },
  { href: "/layout/cluster", label: "Cluster", description: "Inline-flex grouping for buttons, tags and controls." },
  { href: "/layout/section", label: "Section", description: "Full-width sections with inner containers and spacing." },
  { href: "/layout/z-index", label: "Z-index", description: "Named z-index layers for predictable stacking." },
];

export default function LayoutIndex() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Layout</h1>
        <p className="lead text-subtle">
          Breakpoints, containers, grids, clusters, sections and z-index layers.
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
