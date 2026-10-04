import { CodeBlock } from "@/components/CodeBlock";

export default function BorderUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Borders</h1>
        <p className="lead text-subtle">
          Border utilities render an inset outline that looks like a border
          without affecting the box model or breaking vertical rhythm. Border
          radius utilities control corner rounding.
        </p>
      </section>

      <section className="docs-section">
        <h2>Border weight</h2>
        <p>
          Use <code>border</code> for a standard 1px outline,{" "}
          <code>border-2</code> or <code>border-3</code> for heavier weights,
          and <code>border-0</code> to remove it.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="border rounded-sm p-2 mb-3">border — 1px solid</div>
<div class="border-2 rounded-sm p-2 mb-3">border-2 — 2px solid</div>
<div class="border-3 rounded-sm p-2 mb-3">border-3 — 3px solid</div>
<div class="border-0 rounded-sm p-2">border-0 — no border</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="border rounded-sm p-2 mb-3">border — 1px solid</div>
            <div className="border-2 rounded-sm p-2 mb-3">border-2 — 2px solid</div>
            <div className="border-3 rounded-sm p-2 mb-3">border-3 — 3px solid</div>
            <div className="border-0 rounded-sm p-2">border-0 — no border</div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Border radius</h2>
        <p>
          Radius utilities set <code>border-radius</code> from token values.
          Use <code>rounded-pill</code> for fully rounded ends and{" "}
          <code>rounded-circle</code> for a perfect circle (requires equal
          width and height).
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<span class="d-inline-block border p-2 rounded-none mb-3">rounded-none</span>
<span class="d-inline-block border p-2 rounded-xs mb-3">rounded-xs</span>
<span class="d-inline-block border p-2 rounded-sm mb-3">rounded-sm</span>
<span class="d-inline-block border p-2 rounded-md mb-3">rounded-md</span>
<span class="d-inline-block border p-2 rounded-lg mb-3">rounded-lg</span>
<span class="d-inline-block border p-2 rounded-xl mb-3">rounded-xl</span>
<span class="d-inline-block border px-3 py-1 rounded-pill mb-3">rounded-pill</span>
<span class="d-inline-block border p-3 rounded-circle mb-3">rounded-circle</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <span className="d-inline-block border p-2 rounded-none mb-3">rounded-none</span>
            {" "}
            <span className="d-inline-block border p-2 rounded-xs mb-3">rounded-xs</span>
            {" "}
            <span className="d-inline-block border p-2 rounded-sm mb-3">rounded-sm</span>
            {" "}
            <span className="d-inline-block border p-2 rounded-md mb-3">rounded-md</span>
            {" "}
            <span className="d-inline-block border p-2 rounded-lg mb-3">rounded-lg</span>
            {" "}
            <span className="d-inline-block border p-2 rounded-xl mb-3">rounded-xl</span>
            {" "}
            <span className="d-inline-block border px-3 py-1 rounded-pill mb-3">rounded-pill</span>
            {" "}
            <span className="d-inline-block border p-3 rounded-circle mb-3">rounded-circle</span>
          </div>
        </div>
      </section>
    </article>
  );
}
