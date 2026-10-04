"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState(0);

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

      <section className="docs-section">
        <h2>Underline tabs</h2>
        <div className="component-demo">
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
            <div className="ln-tabs">
              <div className="ln-tabs__list">
                {["Overview", "Features", "Pricing"].map((label, i) => (
                  <button
                    key={label}
                    className="ln-tabs__tab"
                    aria-selected={activeTab === i ? "true" : "false"}
                    onClick={() => setActiveTab(i)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="ln-tabs__panel" hidden={activeTab !== 0}>Overview content goes here.</div>
              <div className="ln-tabs__panel" hidden={activeTab !== 1}>Features content goes here.</div>
              <div className="ln-tabs__panel" hidden={activeTab !== 2}>Pricing content goes here.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Pill tabs</h2>
        <div className="component-demo">
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
        <div className="component-demo">
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
    </article>
  );
}
