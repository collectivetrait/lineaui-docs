import { CodeBlock } from "@/components/CodeBlock";

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

      <section className="docs-section">
        <h2>Static tooltip</h2>
        <div className="component-demo">
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
    </article>
  );
}
