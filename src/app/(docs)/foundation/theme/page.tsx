import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Theme",
  description: "Light and dark mode support out of the box. Colour tokens adapt automatically with a data attribute or media query.",
};

export default function ThemePage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Theme</h1>
        <p className="lead text-subtle">
          The library supports light and dark modes out of the box. Colour
          tokens resolve automatically based on the OS preference, or you can
          force a specific theme with the <code>data-theme</code> attribute.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>How it works</h2>
        <p>
          All colour tokens are defined with the CSS{" "}
          <code>light-dark()</code> function. The root element declares{" "}
          <code>color-scheme: light dark</code>, which lets the browser resolve
          every token to its light or dark value based on the operating
          system preference — no JavaScript required.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="css">{`:root {
  color-scheme: light dark;
  --canvas: light-dark(#FAFAFA, #09090B);
  --text:   light-dark(#09090B, #FAFAFA);
  /* … */
}`}</CodeBlock>
        </div>
      </section>

      <section className="docs-section">
        <h2>Forcing a theme</h2>
        <p>
          Set <code>data-theme</code> on the <code>&lt;html&gt;</code> element
          to override the OS preference for the whole page. Use{" "}
          <code>data-theme=&quot;dark&quot;</code> or{" "}
          <code>data-theme=&quot;light&quot;</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<html data-theme="dark">…</html>`}</CodeBlock>
        </div>
        <p>
          When <code>data-theme=&quot;dark&quot;</code> is set, the root element
          gets <code>color-scheme: dark</code>, forcing all{" "}
          <code>light-dark()</code> tokens to resolve to their dark value. The
          opposite applies for <code>data-theme=&quot;light&quot;</code>.
        </p>
      </section>

      <section className="docs-section">
        <h2>Inverted surfaces</h2>
        <p>
          To create a visually inverted region — for example, a dark section
          inside a light page — use the{" "}
          <code>ln-section--surface-inverse</code> modifier or the{" "}
          <code>bg-surface-inverse</code> and <code>text-inverse</code>{" "}
          utility classes.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<!-- Dark section on a light page -->
<section class="ln-section ln-section--surface-inverse">
  <div class="ln-container">…</div>
</section>

<!-- Or with utility classes on any element -->
<div class="bg-surface-inverse text-inverse p-5">…</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <section className="ln-section ln-section--surface-inverse">
              <div className="ln-container">
                <p>A section with an inverted surface.</p>
              </div>
            </section>
          </div>
        </div>
        <p>
          These approaches flip the background and text colour of the element
          itself. Child components — buttons, badges, cards, and other blocks —
          still resolve their tokens from the root theme, so their borders,
          shadows, and role colours remain unchanged.
        </p>
      </section>

      <section className="docs-section">
        <h2>Theme toggle with persistence</h2>
        <p>
          A common pattern is to let users pick their preferred theme and store
          it in <code>localStorage</code>. When the stored preference differs
          from the OS setting, the page can flash the wrong theme on load
          because the CSS resolves tokens before JavaScript runs.
        </p>
        <p>
          The library ships a small blocking script,{" "}
          <code>theme-init.js</code>, that solves this. It reads the stored
          preference and sets <code>data-theme</code> on{" "}
          <code>&lt;html&gt;</code> synchronously — before the browser paints.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="js">{`// theme-init.js (shipped in ln/dist/)
(function() {
  try {
    var t = localStorage.getItem("ln:theme");
    if (t === "light" || t === "dark") {
      document.documentElement.dataset.theme = t;
    }
  } catch(e) {}
})();`}</CodeBlock>
        </div>
      </section>

      <section className="docs-section">
        <h2>Usage</h2>
        <p>
          Add the script to your document <code>&lt;head&gt;</code> before any
          stylesheets. It must be a blocking (non-deferred) script so it runs
          before the first paint.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<head>
  <script src="/theme-init.js"></script>
  <link rel="stylesheet" href="/styles.css" />
</head>`}</CodeBlock>
        </div>
        <p>
          When your toggle writes a new preference, store it under the same
          key the script reads:
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="js">{`// Toggle the theme
const next = current === "dark" ? "light" : "dark";
document.documentElement.dataset.theme = next;
localStorage.setItem("ln:theme", next);`}</CodeBlock>
        </div>
        <p>
          If no preference is stored, the script does nothing and the
          browser&rsquo;s default <code>color-scheme: light dark</code>{" "}
          resolves tokens based on the OS setting — no flash, no fallback
          needed.
        </p>
      </section>

      <section className="docs-section">
        <h2>React / Next.js</h2>
        <p>
          In a React framework with server rendering, the blocking script sets{" "}
          <code>data-theme</code> before hydration. Add{" "}
          <code>suppressHydrationWarning</code> to <code>&lt;html&gt;</code>{" "}
          so React does not warn about the mismatch between the server-rendered
          markup and the client DOM.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="tsx">{`export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="/theme-init.js"></script>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}`}</CodeBlock>
        </div>
        <p>
          Your toggle component should read the already-applied{" "}
          <code>data-theme</code> attribute inside{" "}
          <code>useLayoutEffect</code> (not <code>useEffect</code>) so the
          icon updates before the browser paints, avoiding a visual flicker.
        </p>
      </section>
    </article>
  );
}
