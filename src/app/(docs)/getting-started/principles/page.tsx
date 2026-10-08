import type { Metadata } from "next";

import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Principles",
  description: "The design decisions behind linea-ui: minimalism, readability, ease of use, accessibility, small footprint, and vertical rhythm.",
};

export default function PrinciplesPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Principles</h1>
        <p className="lead text-subtle">
          The design decisions behind ln and the ideas that shape every
          component.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>BEM naming</h2>
        <p>
          Every component follows the Block Element Modifier convention,
          namespaced with a configurable prefix (<code>ln-</code> by default).
          BEM makes the relationship between markup and styles explicit: you can
          read a class name and know exactly which component it belongs to, what
          part of the component it styles, and which variant it represents.
        </p>
        <p>
          This strict naming removes the need for deep nesting, descendant
          selectors, or specificity battles. Each block owns a flat set of
          classes that never leak into other components.
        </p>
      </section>

      <section className="docs-section">
        <h2>Vertical rhythm</h2>
        <p>
          All spacing, sizing, and line-height tokens are derived from two
          values: an 8px base grid (<code>$g</code>) and a 24px line grid
          (<code>$r</code>). Every margin, padding, and component height snaps
          to a multiple of 8px, and every line of text sits on a 24px baseline
          grid.
        </p>
        <p>
          Consistent vertical rhythm creates a visual cadence that makes pages
          feel orderly even when they combine many different components.
          Whitespace stops being arbitrary and becomes part of the system.
        </p>
      </section>

      <section className="docs-section">
        <h2>Minimalism</h2>
        <p>
          Components ship with only the styles they need. There are no elaborate
          themes, no animation libraries, and no decorative defaults. The
          baseline appearance is intentionally plain so that your brand and
          content stand out, not the framework.
        </p>
        <p>
          Modifiers add variations on demand rather than bundling every possible
          state up front. If a component can be simple, it stays simple.
        </p>
      </section>

      <section className="docs-section">
        <h2>Reduced footprint</h2>
        <p>
          The library is pure CSS and Sass with no runtime JavaScript
          dependency. Interactive enhancements are provided by a small,
          optional JS bundle that progressively enhances components that need
          it.
        </p>
        <p>
          CSS cascade layers (<code>@layer</code>) eliminate specificity
          conflicts without resorting to <code>!important</code> or deeply
          nested selectors. The layer order&nbsp;&mdash; reset, tokens, base,
          layout, blocks, helpers, utilities&nbsp;&mdash; means utilities always
          win by layer precedence, keeping the compiled output lean and
          predictable.
        </p>
        <p>
          Unused blocks can be excluded at compile time via the{" "}
          <code>$blocks</code> setting, so production stylesheets contain only
          what the project actually uses.
        </p>
      </section>

      <section className="docs-section">
        <h2>Usability</h2>
        <p>
          Components are built with semantic HTML and follow WAI-ARIA patterns
          where applicable. Focus states, colour contrast, and keyboard
          navigation are considered part of the baseline, not optional extras.
        </p>
        <p>
          Colour tokens use <code>light-dark()</code> to automatically respect
          the user&apos;s OS preference, with a <code>data-theme</code>{" "}
          attribute available for manual overrides. Responsive modifiers use a
          clear <code>@&#123;bp&#125;</code> suffix so breakpoint behaviour is
          visible directly in the markup.
        </p>
      </section>
    </article>
  );
}
