import type { Metadata } from "next";

import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Principles",
  description: "The design decisions behind Linea UI: minimalism, specificity, ease of use, accessibility, small footprint, readability, responsiveness and native-first.",
};

export default function PrinciplesPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Principles</h1>
        <p className="lead text-subtle">
          Every decision in Linea UI traces back to one of these. Each one is
          a SASS variable or a single layer away from your own rules.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Minimalism</h2>
        <p>
          Each component ships the styles it needs and nothing more. There are
          no elaborate themes, no animation libraries, and no decorative
          defaults. The baseline appearance is intentionally plain so that your
          brand and content stand out, not the framework.
        </p>
        <p>
          Modifiers add variations on demand rather than bundling every possible
          state up front. If a component can be simple, it stays simple. Fewer
          decisions to undo when your design takes over.
        </p>
      </section>

      <section className="docs-section">
        <h2>Specificity</h2>
        <p>
          Every component follows the Block Element Modifier convention,
          namespaced with a configurable prefix (<code>ln-</code> by default).
          BEM class names describe what an element is and keep every rule scoped
          to its block. No selector reaches into another component, so styles
          never collide.
        </p>
        <p>
          This strict naming removes the need for deep nesting, descendant
          selectors, or specificity battles. Each block owns a flat set of
          classes that never leak into other components.
        </p>
      </section>

      <section className="docs-section">
        <h2>Ease of use</h2>
        <p>
          Link one stylesheet and write semantic HTML. Headings, lists and
          tables look right before you add a single class. Components are built
          with semantic HTML and follow WAI-ARIA patterns where applicable, so
          the markup you write is the markup your users get.
        </p>
      </section>

      <section className="docs-section">
        <h2>Accessibility</h2>
        <p>
          Contrast-checked tokens, visible focus states and scripts that respect
          keyboard users and reduced motion settings. Focus states, color
          contrast, and keyboard navigation are considered part of the baseline,
          not optional extras.
        </p>
      </section>

      <section className="docs-section">
        <h2>Small footprint</h2>
        <p>
          Import modules one by one through SASS <code>@use</code>. The JS
          layer is optional and adds behavior only where markup asks for it.
          The library is pure CSS and Sass with no runtime JavaScript
          dependency.
        </p>
        <p>
          CSS cascade layers (<code>@layer</code>) eliminate specificity
          conflicts without resorting to <code>!important</code> or deeply
          nested selectors. The layer order&mdash;reset, tokens, base, layout,
          blocks, helpers, utilities&mdash;means utilities always win by layer
          precedence, keeping the compiled output lean and predictable.
        </p>
        <p>
          Unused blocks can be excluded at compile time via the{" "}
          <code>$blocks</code> setting, so production stylesheets contain only
          what the project actually uses.
        </p>
      </section>

      <section className="docs-section">
        <h2>Readability</h2>
        <p>
          Text follows a vertical rhythm: every size and space snap to a grid,
          and lines flow on a stable baseline. The eye moves down the page at a
          steady pace.
        </p>
        <p>
          All spacing, sizing, and line-height tokens are derived from two
          values: an 8px base grid (<code>$g</code>) and a 24px line grid
          (<code>$r</code>). Every margin, padding, and component height snaps
          to a multiple of 8px, and every line of text sits on a 24px baseline
          grid. Whitespace stops being arbitrary and becomes part of the system.
        </p>
      </section>

      <section className="docs-section">
        <h2>Responsiveness</h2>
        <p>
          Layouts, headings and utilities adapt through breakpoint suffixes
          like <code>@md</code> and <code>@lg</code>. The rhythm holds at every
          screen size.
        </p>
        <p>
          Responsive modifiers use a clear <code>@&#123;bp&#125;</code> suffix
          so breakpoint behavior is visible directly in the markup. No hidden
          media queries or magic values&mdash;the class name tells you exactly
          when a rule takes effect.
        </p>
      </section>

      <section className="docs-section">
        <h2>Native first</h2>
        <p>
          Built on what browsers already support: cascade layers, custom
          properties and <code>light-dark()</code>. No vendor prefixes,
          polyfills or workarounds to carry around.
        </p>
        <p>
          Color tokens use <code>light-dark()</code> to automatically respect
          the user&apos;s OS preference, with a <code>data-theme</code>{" "}
          attribute available for manual overrides.
        </p>
      </section>
    </article>
  );
}
