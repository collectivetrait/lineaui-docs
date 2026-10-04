import { CodeBlock } from "@/components/CodeBlock";

export default function ZIndexPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Z-index and layers</h1>
        <p className="lead text-subtle">
          The library organises all styles into CSS cascade layers. Layer order
          determines which rules win when specificity is equal, eliminating
          z-index wars and selector-weight hacks.
        </p>
      </section>

      <section className="docs-section">
        <h2>Cascade layer order</h2>
        <p>
          Layers are declared in a single <code>@layer</code> statement at the
          top of the compiled output. Layers listed later take precedence over
          earlier ones when specificity is equal. The order from lowest to
          highest priority is:
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
        <div className="component-demo">
          <CodeBlock language="html">{`<!-- The utility text-center overrides any text-align set by ln-card -->
<div class="ln-card border mb-3">
  <div class="ln-card__body text-center">
    <p>This text is centred by the utility, not the card.</p>
  </div>
</div>

<!-- Utilities always override block-level styles -->
<div class="ln-section ln-section--space-lg border p-0">
  <p>The p-0 utility removes the section padding.</p>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-card border mb-3">
              <div className="ln-card__body text-center">
                <p>This text is centred by the utility, not the card.</p>
              </div>
            </div>
            <div className="ln-section ln-section--space-lg border p-0">
              <p>The p-0 utility removes the section padding.</p>
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
        <CodeBlock language="css">{`/* Compiled output — layer order declaration */
@layer reset, tokens, base, layout, blocks, helpers, utilities;

@layer reset {
  /* box-sizing, margin reset */
}

@layer tokens {
  :root { --space-1: 0.5rem; /* … */ }
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
      </section>
    </article>
  );
}
