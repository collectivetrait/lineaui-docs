import { CodeBlock } from "@/components/CodeBlock";
import { GridDemo } from "@/components/GridDemo";

export default function GridOverlayHelpers() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Grid overlay</h1>
        <p className="lead text-subtle">
          Grid overlay helpers display an 8px / 24px baseline grid on any
          element to verify vertical rhythm. The overlay is scoped to the
          element it is applied to.
        </p>
      </section>

      <section className="docs-section">
        <h2>Show grid</h2>
        <p>
          Add the <code>.show-grid</code> class to any element to overlay the
          baseline grid. Faint lines mark the 8px base grid and stronger lines
          mark the 24px line grid.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="show-grid border rounded-sm p-3">
  <h4>Heading four</h4>
  <p>Body text sits on the 24px line grid.</p>
  <p>A second paragraph to show rhythm continuity.</p>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="show-grid border rounded-sm p-3">
              <h4>Heading four</h4>
              <p>Body text sits on the 24px line grid.</p>
              <p>A second paragraph to show rhythm continuity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Grid toggle button</h2>
        <p>
          The <code>.grid-toggle</code> class styles a fixed-position button.
          Add a <code>data-ln-grid-toggle</code> attribute to wire up
          automatic toggling of <code>.show-grid</code> on the parent element
          (or a specific target via a CSS selector value).
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="border rounded-sm p-3">
  <button class="grid-toggle" data-ln-grid-toggle aria-pressed="false" aria-label="Toggle grid">
    <svg viewBox="0 0 16 16" fill="none"><path d="M1 4h14M1 8h14M1 12h14M4 1v14M8 1v14M12 1v14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
  </button>
  <h4>Heading four</h4>
  <p>Body text sits on the 24px line grid. The faint lines mark the 8px base grid.</p>
  <p>A second paragraph to show rhythm continuity.</p>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <GridDemo>
              <h4>Heading four</h4>
              <p>Body text sits on the 24px line grid. The faint lines mark the 8px base grid.</p>
              <p>A second paragraph to show rhythm continuity.</p>
            </GridDemo>
          </div>
        </div>
      </section>
    </article>
  );
}
