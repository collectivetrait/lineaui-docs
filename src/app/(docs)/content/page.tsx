import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content",
  description: "Blocks for displaying text, media and structured information.",
};

const PAGES = [
  { href: "/content/avatar", label: "Avatar", description: "Circular image or initials for user identities." },
  { href: "/content/meta", label: "Meta", description: "Small metadata lines for dates, authors and tags." },
  { href: "/content/prose", label: "Prose", description: "Long-form text with typographic defaults for articles." },
  { href: "/content/quote", label: "Quote", description: "Blockquote and pull-quote styles." },
  { href: "/content/code", label: "Code", description: "Inline code, code blocks and syntax highlighting." },
  { href: "/content/accordion", label: "Accordion", description: "Collapsible disclosure panels." },
  { href: "/content/list", label: "List", description: "Styled ordered, unordered and description lists." },
  { href: "/content/card", label: "Card", description: "Contained surface for grouped content." },
  { href: "/content/page-header", label: "Page Header", description: "Hero and standard page title blocks." },
];

export default function ContentIndex() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Content</h1>
        <p className="lead text-subtle">
          Blocks for displaying text, media and structured information.
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
