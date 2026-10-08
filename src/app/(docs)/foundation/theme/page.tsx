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
          Set <code>data-theme</code> on any ancestor element to override the
          OS preference. Use <code>data-theme=&quot;dark&quot;</code> or{" "}
          <code>data-theme=&quot;light&quot;</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Force dark on the whole page -->
<html data-theme="dark">…</html>

<!-- Light island inside a dark page -->
<section data-theme="light">…</section>`}</CodeBlock>
        </div>
        <p>
          When <code>data-theme=&quot;light&quot;</code> is set, the element
          gets <code>color-scheme: light</code>, forcing all{" "}
          <code>light-dark()</code> tokens to their first value. The opposite
          applies for <code>data-theme=&quot;dark&quot;</code>.
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
          <CodeBlock language="tsx">{`export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="/theme-init.js" />
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
