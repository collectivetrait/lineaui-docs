import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function SectionPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Section</h1>
        <p className="lead text-subtle">
          A full-width page band with block padding derived from rhythm tokens.
          Section children are automatically centred at <code>--container</code>{" "}
          width with gutter padding. Use surface modifiers for alternating
          backgrounds and spacing modifiers for vertical rhythm.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Default section with header</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<section class="ln-section ln-section--space-lg border mb-3">
  <div class="ln-section__header">
    <p class="ln-section__eyebrow">Features</p>
    <h2 class="ln-section__title">Built for the grid</h2>
    <p class="ln-section__lead">Every measurement lands on the 8px grid.</p>
  </div>
  <p>Section body content.</p>
</section>

<section class="ln-section ln-section--surface-sunken ln-section--space-lg border">
  <p>Content on a sunken surface background.</p>
</section>`}</CodeBlock>
          <div className="component-demo__preview">
            <section className="ln-section ln-section--space-lg border mb-3">
              <div className="ln-section__header">
                <p className="ln-section__eyebrow">Features</p>
                <h2 className="ln-section__title">Built for the grid</h2>
                <p className="ln-section__lead">Every measurement lands on the 8px grid.</p>
              </div>
              <p>Section body content.</p>
            </section>
            <section className="ln-section ln-section--surface-sunken ln-section--space-lg border">
              <p>Content on a sunken surface background.</p>
            </section>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Centre and inverse surface</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<section class="ln-section ln-section--space-xl ln-section--surface-inverse ln-section--center border">
  <h2 class="ln-section__title">Hero band</h2>
  <p class="ln-section__lead">Full-width, centred, inverse surface.</p>
</section>`}</CodeBlock>
          <div className="component-demo__preview">
            <section className="ln-section ln-section--space-xl ln-section--surface-inverse ln-section--center border">
              <h2 className="ln-section__title">Hero band</h2>
              <p className="ln-section__lead">Full-width, centred, inverse surface.</p>
            </section>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Bordered and narrow sections</h2>
        <p>
          The <code>--bordered</code> modifier adds a top border. The{" "}
          <code>--narrow</code> modifier constrains children to the prose
          measure width.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<section class="ln-section ln-section--bordered ln-section--space-lg border mb-3">
  <p>Section with a top border separator.</p>
</section>

<section class="ln-section ln-section--narrow ln-section--surface-sunken ln-section--space-lg border">
  <p>Narrow section — children constrained to prose measure width.</p>
</section>`}</CodeBlock>
          <div className="component-demo__preview">
            <section className="ln-section ln-section--bordered ln-section--space-lg border mb-3">
              <p>Section with a top border separator.</p>
            </section>
            <section className="ln-section ln-section--narrow ln-section--surface-sunken ln-section--space-lg border">
              <p>Narrow section — children constrained to prose measure width.</p>
            </section>
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
            <tr>
              <td><code>.ln-section</code></td>
              <td>Full-width band with block padding, children centred at container width</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section--narrow</code></td>
              <td>Constrain children to prose measure width</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section--wide</code></td>
              <td>Constrain children to wide container width</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section--space-lg</code></td>
              <td>48px block padding</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section--space-xl</code></td>
              <td>72px block padding</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section--space-2xl</code></td>
              <td>96px block padding</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section--space-3xl</code></td>
              <td>144px block padding</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section--surface-sunken</code></td>
              <td>Sunken background surface</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section--surface-raised</code></td>
              <td>Raised background surface</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section--surface-inverse</code></td>
              <td>Inverse (dark) background with light text</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section--bordered</code></td>
              <td>Top border separator</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section--center</code></td>
              <td>Centre-align text content</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section__header</code></td>
              <td>Section header wrapper with bottom spacing</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section__eyebrow</code></td>
              <td>Uppercase label above the title</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section__title</code></td>
              <td>Section heading</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-section__lead</code></td>
              <td>Subtitle or lead paragraph</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
