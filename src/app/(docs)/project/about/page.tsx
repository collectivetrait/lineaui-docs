import type { Metadata } from "next";
import Link from "next/link";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Linea UI, its principles, and Collective Trait.",
};

export default function AboutPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">About Linea UI</h1>
        <p className="lead text-subtle">
          Linea UI is an opinionated SCSS and JS library for content sites,
          stores and dashboards, and the first public project from Collective
          Trait.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>How it started</h2>
        <p>
          <a href="https://andrezrv.com" target="_blank" rel="noopener noreferrer">Andrés Villarreal</a> started writing Linea UI around 2018, as a set
          of styles for his own projects. Each new site added a rule, a fix
          or a better default, and over the years those pieces settled into a
          system with clear ideas about naming, spacing and type.
        </p>
        <p>
          At some point it stopped feeling like a private toolkit and started
          looking like something other people could use. So it was cleaned
          up, documented and opened to anyone who wants it.
        </p>
      </section>

      <section className="docs-section">
        <h2>The principles</h2>
        <p>
          Eight principles shape every default in the library: minimalism,
          specificity, ease of use, accessibility, a small footprint,
          readability, responsiveness and a native first approach to browser
          features. They explain why Linea UI works the way it does, and each
          one is a SASS variable or a single layer away from your own rules.
        </p>
        <p>
          <Link href="/getting-started/principles">Read the principles</Link>
        </p>
      </section>

      <section className="docs-section">
        <h2>Collective Trait</h2>
        <p>
          Linea UI is the first public project from Collective Trait.
          It{"'"}s also the base of the agency{"'"}s client work, so its
          components run on real sites every day, and what comes up there
          finds its way back into the library.
        </p>
        <p>
          <a href="https://collectivetrait.com">Collective Trait</a>
        </p>
        <p>
          Questions, bugs and suggestions are welcome on{" "}
          <a href="https://github.com/collectivetrait/lineaui">GitHub</a>.
        </p>
      </section>
    </article>
  );
}
