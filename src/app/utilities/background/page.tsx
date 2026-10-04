import { CodeBlock } from "@/components/CodeBlock";

export default function BackgroundUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Background</h1>
        <p className="lead text-subtle">
          Background color utilities set <code>background-color</code> from
          role and surface tokens.
        </p>
      </section>

      <section className="docs-section">
        <h2>Role backgrounds</h2>
        <p>
          Solid role backgrounds pair with <code>text-inverse</code> for
          contrast. Subtle variants use a lighter tint and keep default text
          color.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="bg-primary text-inverse border rounded-sm p-2 mb-3">bg-primary</div>
<div class="bg-secondary text-inverse border rounded-sm p-2 mb-3">bg-secondary</div>
<div class="bg-success text-inverse border rounded-sm p-2 mb-3">bg-success</div>
<div class="bg-warning border rounded-sm p-2 mb-3">bg-warning</div>
<div class="bg-danger text-inverse border rounded-sm p-2 mb-3">bg-danger</div>
<div class="bg-info text-inverse border rounded-sm p-2 mb-3">bg-info</div>
<div class="bg-primary-subtle border rounded-sm p-2 mb-3">bg-primary-subtle</div>
<div class="bg-secondary-subtle border rounded-sm p-2 mb-3">bg-secondary-subtle</div>
<div class="bg-success-subtle border rounded-sm p-2 mb-3">bg-success-subtle</div>
<div class="bg-warning-subtle border rounded-sm p-2 mb-3">bg-warning-subtle</div>
<div class="bg-danger-subtle border rounded-sm p-2 mb-3">bg-danger-subtle</div>
<div class="bg-info-subtle border rounded-sm p-2">bg-info-subtle</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="bg-primary text-inverse border rounded-sm p-2 mb-3">bg-primary</div>
            <div className="bg-secondary text-inverse border rounded-sm p-2 mb-3">bg-secondary</div>
            <div className="bg-success text-inverse border rounded-sm p-2 mb-3">bg-success</div>
            <div className="bg-warning border rounded-sm p-2 mb-3">bg-warning</div>
            <div className="bg-danger text-inverse border rounded-sm p-2 mb-3">bg-danger</div>
            <div className="bg-info text-inverse border rounded-sm p-2 mb-3">bg-info</div>
            <div className="bg-primary-subtle border rounded-sm p-2 mb-3">bg-primary-subtle</div>
            <div className="bg-secondary-subtle border rounded-sm p-2 mb-3">bg-secondary-subtle</div>
            <div className="bg-success-subtle border rounded-sm p-2 mb-3">bg-success-subtle</div>
            <div className="bg-warning-subtle border rounded-sm p-2 mb-3">bg-warning-subtle</div>
            <div className="bg-danger-subtle border rounded-sm p-2 mb-3">bg-danger-subtle</div>
            <div className="bg-info-subtle border rounded-sm p-2">bg-info-subtle</div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Surface backgrounds</h2>
        <p>
          Surface tokens create depth layers. Use <code>bg-canvas</code> for
          the page base, <code>bg-surface</code> for cards, and{" "}
          <code>bg-surface-raised</code> / <code>bg-surface-sunken</code> for
          elevation variation.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="bg-canvas border rounded-sm p-2 mb-3">bg-canvas</div>
<div class="bg-surface border rounded-sm p-2 mb-3">bg-surface</div>
<div class="bg-surface-raised border rounded-sm p-2 mb-3">bg-surface-raised</div>
<div class="bg-surface-sunken border rounded-sm p-2 mb-3">bg-surface-sunken</div>
<div class="bg-surface-inverse text-inverse border rounded-sm p-2">bg-surface-inverse</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="bg-canvas border rounded-sm p-2 mb-3">bg-canvas</div>
            <div className="bg-surface border rounded-sm p-2 mb-3">bg-surface</div>
            <div className="bg-surface-raised border rounded-sm p-2 mb-3">bg-surface-raised</div>
            <div className="bg-surface-sunken border rounded-sm p-2 mb-3">bg-surface-sunken</div>
            <div className="bg-surface-inverse text-inverse border rounded-sm p-2">bg-surface-inverse</div>
          </div>
        </div>
      </section>
    </article>
  );
}
