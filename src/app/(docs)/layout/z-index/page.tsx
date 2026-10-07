import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function ZIndexPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Z-index</h1>
        <p className="lead text-subtle">
          Utility classes for controlling stacking order, plus the cascade layer
          system that eliminates specificity wars.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Z-index utilities</h2>
        <p>
          Set the stacking order of positioned elements with{" "}
          <code>.z-&#123;value&#125;</code> classes. Values follow a
          stepped scale so layers stay consistent across the project.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="docs-z-stack">
  <div class="docs-z-stack__layer docs-z-stack__layer--1 z-10 border p-2 bg-surface">z-10</div>
  <div class="docs-z-stack__layer docs-z-stack__layer--2 z-20 border p-2 bg-surface">z-20</div>
  <div class="docs-z-stack__layer docs-z-stack__layer--3 z-30 border p-2 bg-surface">z-30</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="docs-z-stack">
              <div className="docs-z-stack__layer docs-z-stack__layer--1 z-10 border p-2 bg-surface">z-10</div>
              <div className="docs-z-stack__layer docs-z-stack__layer--2 z-20 border p-2 bg-surface">z-20</div>
              <div className="docs-z-stack__layer docs-z-stack__layer--3 z-30 border p-2 bg-surface">z-30</div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Cascade layer order</h2>
        <p>
          The library organises all styles into CSS cascade layers. Layers listed
          later take precedence over earlier ones when specificity is equal,
          eliminating selector-weight hacks.
        </p>
        <table>
          <thead>
            <tr>
              <th>Layer</th>
              <th>Priority</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>reset</code></td>
              <td>1 (lowest)</td>
              <td>Browser normalisation and box-sizing defaults</td>
            </tr>
            <tr>
              <td><code>tokens</code></td>
              <td>2</td>
              <td>CSS custom properties for spacing, colour, type scale</td>
            </tr>
            <tr>
              <td><code>base</code></td>
              <td>3</td>
              <td>Element defaults for headings, paragraphs, tables, media</td>
            </tr>
            <tr>
              <td><code>layout</code></td>
              <td>4</td>
              <td>Structural blocks like shell, container, grid, section</td>
            </tr>
            <tr>
              <td><code>blocks</code></td>
              <td>5</td>
              <td>Component blocks like card, button, badge, table</td>
            </tr>
            <tr>
              <td><code>helpers</code></td>
              <td>6</td>
              <td>Named helper classes for typography and visibility</td>
            </tr>
            <tr>
              <td><code>utilities</code></td>
              <td>7 (highest)</td>
              <td>Single-property overrides that always win</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2>How layers affect specificity</h2>
        <p>
          Because utilities sit in the highest layer, a simple utility class
          like <code>.text-center</code> will always override a lower-layer
          rule, even if the lower rule has higher selector specificity. This
          means you can always apply a utility on top of any component class
          without resorting to <code>!important</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- The utility text-center overrides any text-align set by ln-card -->
<div class="ln-card border mb-3">
  <div class="ln-card__body text-center">
    <p>This text is centred by the utility, not the card.</p>
  </div>
</div>

<!-- Utilities always override block-level styles -->
<div class="ln-section ln-section--space-lg border p-0">
  <div class="ln-section__inner">
    <p>The p-0 utility removes the section padding.</p>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-card border mb-3">
              <div className="ln-card__body text-center">
                <p>This text is centred by the utility, not the card.</p>
              </div>
            </div>
            <div className="ln-section ln-section--space-lg border p-0">
              <div className="ln-section__inner">
                <p>The p-0 utility removes the section padding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Layer declaration</h2>
        <p>
          The layer order is set once at the top of the compiled stylesheet.
          All rules in the library are assigned to their respective layers
          using <code>@layer</code> blocks.
        </p>
        <div className="component-demo shadow-2">
        <CodeBlock language="css">{`/* Compiled output — layer order declaration */
@layer reset, tokens, base, layout, blocks, helpers, utilities;

@layer reset {
  /* box-sizing, margin reset */
}

@layer tokens {
  :root { --s1: 0.5rem; /* … */ }
}

@layer base {
  h1, h2, h3 { /* element defaults */ }
}

@layer layout {
  .ln-grid { /* grid block */ }
}

@layer blocks {
  .ln-card { /* component block */ }
}

@layer helpers {
  .lead { /* helper classes */ }
}

@layer utilities {
  .text-center { text-align: center; }
}`}</CodeBlock>
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
            <tr>
              <td><code>.z-0</code></td>
              <td><code>z-index: 0</code></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.z-10</code></td>
              <td><code>z-index: 10</code></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.z-20</code></td>
              <td><code>z-index: 20</code></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.z-30</code></td>
              <td><code>z-index: 30</code></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.z-40</code></td>
              <td><code>z-index: 40</code></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.z-50</code></td>
              <td><code>z-index: 50</code></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.z-auto</code></td>
              <td><code>z-index: auto</code></td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
