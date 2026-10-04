import { CodeBlock } from "@/components/CodeBlock";

export default function ShellPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Shell</h1>
        <p className="lead text-subtle">
          The shell block creates a full-page layout with a sticky header,
          collapsible sidebar, and scrollable main area. Use{" "}
          <code>ln-shell</code> as the outer wrapper.
        </p>
      </section>

      <section className="docs-section">
        <h2>Basic structure</h2>
        <p>
          This docs site is built on the shell block — open the sidebar toggle
          to see the <code>data-sidebar</code> state change.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-shell">
  <header class="ln-shell__header">…</header>
  <aside class="ln-shell__sidebar">…</aside>
  <main class="ln-shell__main">…</main>
</div>

<!-- Sidebar open state — set by JS via initNavigation() -->
<div class="ln-shell" data-sidebar="open">…</div>`}</CodeBlock>
        </div>
      </section>
    </article>
  );
}
