import type { Metadata } from "next";
import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";
import { TabsDemo } from "@/components/TabsDemo";

export const metadata: Metadata = {
  title: "Tabs",
  description: "Tabbed navigation for switching between content panels. Supports horizontal tabs with active state indicators.",
};

export default function TabsPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Tabs</h1>
        <p className="lead text-subtle">
          A tab bar with associated panels. The default variant uses an underline
          indicator. Without JavaScript, all panels are visible and stacked. The
          JS module adds <code>aria-selected</code>, roving focus, and panel
          toggling via the <code>hidden</code> attribute.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Underline tabs</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-tabs">
  <div class="ln-tabs__list">
    <button class="ln-tabs__tab" aria-selected="true">Overview</button>
    <button class="ln-tabs__tab" aria-selected="false">Features</button>
    <button class="ln-tabs__tab" aria-selected="false">Pricing</button>
  </div>
  <div class="ln-tabs__panel">Overview content goes here.</div>
  <div class="ln-tabs__panel" hidden>Features content goes here.</div>
  <div class="ln-tabs__panel" hidden>Pricing content goes here.</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <TabsDemo />
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Pill tabs</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-tabs ln-tabs--pills">
  <div class="ln-tabs__list">
    <button class="ln-tabs__tab" aria-selected="true">Day</button>
    <button class="ln-tabs__tab" aria-selected="false">Week</button>
    <button class="ln-tabs__tab" aria-selected="false">Month</button>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-tabs ln-tabs--pills">
              <div className="ln-tabs__list">
                <button className="ln-tabs__tab" aria-selected="true">Day</button>
                <button className="ln-tabs__tab" aria-selected="false">Week</button>
                <button className="ln-tabs__tab" aria-selected="false">Month</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Boxed tabs</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-tabs ln-tabs--boxed">
  <div class="ln-tabs__list">
    <button class="ln-tabs__tab" aria-selected="true">Code</button>
    <button class="ln-tabs__tab" aria-selected="false">Preview</button>
    <button class="ln-tabs__tab" aria-selected="false">Tests</button>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-tabs ln-tabs--boxed">
              <div className="ln-tabs__list">
                <button className="ln-tabs__tab" aria-selected="true">Code</button>
                <button className="ln-tabs__tab" aria-selected="false">Preview</button>
                <button className="ln-tabs__tab" aria-selected="false">Tests</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>.ln-tabs</code></td><td>Tabs container</td><td>No</td></tr>
            <tr><td><code>.ln-tabs__list</code></td><td>Tab button row</td><td>No</td></tr>
            <tr><td><code>.ln-tabs__tab</code></td><td>Individual tab button</td><td>No</td></tr>
            <tr><td><code>.ln-tabs__icon</code></td><td>Tab icon</td><td>No</td></tr>
            <tr><td><code>.ln-tabs__badge</code></td><td>Tab count badge</td><td>No</td></tr>
            <tr><td><code>.ln-tabs__panel</code></td><td>Tab content panel</td><td>No</td></tr>
            <tr><td><code>.ln-tabs--pills</code></td><td>Pill-style segmented control</td><td>No</td></tr>
            <tr><td><code>.ln-tabs--boxed</code></td><td>Boxed tab style</td><td>No</td></tr>
            <tr><td><code>.ln-tabs--vertical</code></td><td>Vertical side-tab layout</td><td>No</td></tr>
            <tr><td><code>.ln-tabs--fill</code></td><td>Equal-width tabs</td><td>No</td></tr>
            <tr><td><code>.ln-tabs--sm</code></td><td>Smaller tab size</td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
