import { CodeBlock } from "@/components/CodeBlock";

export default function ShadowUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Shadows</h1>
        <p className="lead text-subtle">
          Shadow utilities apply elevation levels via <code>box-shadow</code>{" "}
          from design tokens. Use <code>shadow-0</code> to remove shadows and{" "}
          <code>shadow-inset</code> for an inner shadow.
        </p>
      </section>

      <section className="docs-section">
        <h2>Elevation levels</h2>
        <p>
          Six levels from <code>shadow-0</code> (none) through{" "}
          <code>shadow-4</code> (highest), plus <code>shadow-inset</code>.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="d-flex flex-wrap gap-4">
  <div class="bg-surface border rounded-md p-3 shadow-0">shadow-0</div>
  <div class="bg-surface border rounded-md p-3 shadow-1">shadow-1</div>
  <div class="bg-surface border rounded-md p-3 shadow-2">shadow-2</div>
  <div class="bg-surface border rounded-md p-3 shadow-3">shadow-3</div>
  <div class="bg-surface border rounded-md p-3 shadow-4">shadow-4</div>
  <div class="bg-surface border rounded-md p-3 shadow-inset">shadow-inset</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex flex-wrap gap-4">
              <div className="bg-surface border rounded-md p-3 shadow-0">shadow-0</div>
              <div className="bg-surface border rounded-md p-3 shadow-1">shadow-1</div>
              <div className="bg-surface border rounded-md p-3 shadow-2">shadow-2</div>
              <div className="bg-surface border rounded-md p-3 shadow-3">shadow-3</div>
              <div className="bg-surface border rounded-md p-3 shadow-4">shadow-4</div>
              <div className="bg-surface border rounded-md p-3 shadow-inset">shadow-inset</div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
