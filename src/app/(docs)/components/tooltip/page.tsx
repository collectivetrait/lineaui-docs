import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function TooltipPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Tooltip</h1>
        <p className="lead text-subtle">
          A small popup label for hover or focus context. Position modifiers:
          <code>--top</code> (default), <code>--bottom</code>, <code>--start</code>,
          <code>--end</code>. In production, tooltips are created dynamically
          via <code>data-ln-tooltip</code>; the example below shows the static
          markup.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Static tooltip</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-tooltip ln-tooltip--top" style="position: relative; display: inline-block">
  This is a tooltip
  <div class="ln-tooltip__arrow"></div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-tooltip ln-tooltip--top" style={{ position: "relative", display: "inline-block" }}>
              This is a tooltip
              <div className="ln-tooltip__arrow"></div>
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
            <tr><td><code>.ln-tooltip</code></td><td>Tooltip container</td><td>No</td></tr>
            <tr><td><code>.ln-tooltip__arrow</code></td><td>Directional arrow</td><td>No</td></tr>
            <tr><td><code>.ln-tooltip--top</code></td><td>Arrow on bottom (tooltip above)</td><td>No</td></tr>
            <tr><td><code>.ln-tooltip--bottom</code></td><td>Arrow on top (tooltip below)</td><td>No</td></tr>
            <tr><td><code>.ln-tooltip--start</code></td><td>Arrow on right (tooltip left)</td><td>No</td></tr>
            <tr><td><code>.ln-tooltip--end</code></td><td>Arrow on left (tooltip right)</td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
