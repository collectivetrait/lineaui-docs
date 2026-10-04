import { CodeBlock } from "@/components/CodeBlock";

export default function SizingUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Sizing</h1>
        <p className="lead text-subtle">
          Sizing utilities control width, height, max-width, and max-height
          using percentage values and semantic size tokens.
        </p>
      </section>

      <section className="docs-section">
        <h2>Width</h2>
        <p>
          Width utilities set the <code>width</code> property to percentage
          values or semantic tokens. <code>w-auto</code> resets to the
          intrinsic width.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="border rounded-sm p-2 w-25 mb-3">w-25</div>
<div class="border rounded-sm p-2 w-50 mb-3">w-50</div>
<div class="border rounded-sm p-2 w-75 mb-3">w-75</div>
<div class="border rounded-sm p-2 w-100 mb-3">w-100</div>
<div class="border rounded-sm p-2 w-auto">w-auto</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border rounded-sm p-2 w-25 mb-3">w-25</div>
            <div className="border rounded-sm p-2 w-50 mb-3">w-50</div>
            <div className="border rounded-sm p-2 w-75 mb-3">w-75</div>
            <div className="border rounded-sm p-2 w-100 mb-3">w-100</div>
            <div className="border rounded-sm p-2 w-auto">w-auto</div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Height</h2>
        <p>
          Height utilities set the <code>height</code> property as a
          percentage of the parent. The parent must have an explicit height
          for percentage values to take effect.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="d-flex gap-3 border rounded-sm p-2 docs-height-container">
  <div class="border rounded-sm p-2 h-25">h-25</div>
  <div class="border rounded-sm p-2 h-50">h-50</div>
  <div class="border rounded-sm p-2 h-75">h-75</div>
  <div class="border rounded-sm p-2 h-100">h-100</div>
  <div class="border rounded-sm p-2 h-auto">h-auto</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex gap-3 border rounded-sm p-2 docs-height-container">
              <div className="border rounded-sm p-2 h-25">h-25</div>
              <div className="border rounded-sm p-2 h-50">h-50</div>
              <div className="border rounded-sm p-2 h-75">h-75</div>
              <div className="border rounded-sm p-2 h-100">h-100</div>
              <div className="border rounded-sm p-2 h-auto">h-auto</div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Max-width and max-height</h2>
        <p>
          <code>mw-100</code> caps width at 100% of the parent.{" "}
          <code>mh-100</code> caps height at 100% of the parent.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="border rounded-sm p-2 mw-100 mb-3">mw-100 — never exceeds parent width</div>
<div class="border rounded-sm p-2 mh-100">mh-100 — never exceeds parent height</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border rounded-sm p-2 mw-100 mb-3">mw-100 — never exceeds parent width</div>
            <div className="border rounded-sm p-2 mh-100">mh-100 — never exceeds parent height</div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive</h2>
        <p>
          Width utilities generate responsive variants:{" "}
          <code>.w-*@sm</code>, <code>.w-*@md</code>, <code>.w-*@lg</code>,{" "}
          <code>.w-*@xl</code>, <code>.w-*@2xl</code>.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="border rounded-sm p-2 w-100 w-50@lg">Full width on mobile, half at lg</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border rounded-sm p-2 w-100 w-50@lg">Full width on mobile, half at lg</div>
          </div>
        </div>
      </section>
    </article>
  );
}
