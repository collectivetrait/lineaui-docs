import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forms",
  description: "Form fields, input groups, choices and form layout.",
};

const PAGES = [
  { href: "/forms/field", label: "Field", description: "Labels, inputs, help text and validation states." },
  { href: "/forms/input-group", label: "Input Group", description: "Inputs combined with buttons or addons." },
  { href: "/forms/choice", label: "Choice", description: "Checkboxes, radios and toggle switches." },
  { href: "/forms/form", label: "Form", description: "Form layout, actions and fieldset grouping." },
];

export default function FormsIndex() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Forms</h1>
        <p className="lead text-subtle">
          Form fields, input groups, choices and form layout.
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
