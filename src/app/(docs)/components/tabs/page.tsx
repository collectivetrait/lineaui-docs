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
          indicator. Add <code>data-ln-tabs</code> to the container so the JS
          module can wire up <code>aria-selected</code>, roving focus, and panel
          toggling via the <code>hidden</code> attribute.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Underline tabs</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-tabs" data-ln-tabs>
  <div class="ln-tabs__list">
    <button class="ln-tabs__tab" id="t1" aria-controls="p1" aria-selected="true">Overview</button>
    <button class="ln-tabs__tab" id="t2" aria-controls="p2" aria-selected="false">Features</button>
    <button class="ln-tabs__tab" id="t3" aria-controls="p3" aria-selected="false">Pricing</button>
  </div>
  <div class="ln-tabs__panel" id="p1" aria-labelledby="t1">
    A general overview of the product and its key benefits.
  </div>
  <div class="ln-tabs__panel" id="p2" aria-labelledby="t2">
    Detailed feature list with comparisons across plans.
  </div>
  <div class="ln-tabs__panel" id="p3" aria-labelledby="t3">
    Flexible pricing tiers for teams of any size.
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <TabsDemo
              panels={[
                "A general overview of the product and its key benefits.",
                "Detailed feature list with comparisons across plans.",
                "Flexible pricing tiers for teams of any size.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Pill tabs</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-tabs ln-tabs--pills" data-ln-tabs>
  <div class="ln-tabs__list">
    <button class="ln-tabs__tab" id="pill1" aria-controls="pp1" aria-selected="true">Day</button>
    <button class="ln-tabs__tab" id="pill2" aria-controls="pp2" aria-selected="false">Week</button>
    <button class="ln-tabs__tab" id="pill3" aria-controls="pp3" aria-selected="false">Month</button>
  </div>
  <div class="ln-tabs__panel" id="pp1" aria-labelledby="pill1">
    Showing today's schedule with hourly breakdown.
  </div>
  <div class="ln-tabs__panel" id="pp2" aria-labelledby="pill2">
    Weekly overview across all active projects.
  </div>
  <div class="ln-tabs__panel" id="pp3" aria-labelledby="pill3">
    Monthly summary with milestones and deadlines.
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <TabsDemo
              variant="pills"
              tabs={["Day", "Week", "Month"]}
              panels={[
                "Showing today's schedule with hourly breakdown.",
                "Weekly overview across all active projects.",
                "Monthly summary with milestones and deadlines.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Boxed tabs</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-tabs ln-tabs--boxed" data-ln-tabs>
  <div class="ln-tabs__list">
    <button class="ln-tabs__tab" id="box1" aria-controls="bp1" aria-selected="true">Code</button>
    <button class="ln-tabs__tab" id="box2" aria-controls="bp2" aria-selected="false">Preview</button>
    <button class="ln-tabs__tab" id="box3" aria-controls="bp3" aria-selected="false">Tests</button>
  </div>
  <div class="ln-tabs__panel" id="bp1" aria-labelledby="box1">
    Source code for the selected component.
  </div>
  <div class="ln-tabs__panel" id="bp2" aria-labelledby="box2">
    Live rendered output of the component.
  </div>
  <div class="ln-tabs__panel" id="bp3" aria-labelledby="box3">
    Unit and integration test results.
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <TabsDemo
              variant="boxed"
              tabs={["Code", "Preview", "Tests"]}
              panels={[
                "Source code for the selected component.",
                "Live rendered output of the component.",
                "Unit and integration test results.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Class / Attribute</th>
              <th>Description</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>.ln-tabs</code></td><td>Tabs container</td><td>No</td></tr>
            <tr><td><code>data-ln-tabs</code></td><td>Activates the JS module on the container</td><td>No</td></tr>
            <tr><td><code>.ln-tabs__list</code></td><td>Tab button row</td><td>No</td></tr>
            <tr><td><code>.ln-tabs__tab</code></td><td>Individual tab button</td><td>No</td></tr>
            <tr><td><code>.ln-tabs__icon</code></td><td>Tab icon</td><td>No</td></tr>
            <tr><td><code>.ln-tabs__badge</code></td><td>Tab count badge</td><td>No</td></tr>
            <tr><td><code>.ln-tabs__panel</code></td><td>Tab content panel</td><td>No</td></tr>
            <tr><td><code>.ln-tabs--pills</code></td><td>Pill-style tabs</td><td>No</td></tr>
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
