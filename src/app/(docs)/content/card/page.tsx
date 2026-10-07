import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function CardPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Card</h1>
        <p className="lead text-subtle">
          A flexible container for grouped content. Outlined by default, with
          modifiers for flat, shadow, interactive hover, and horizontal layout.
          Roles change the border color; the <code>--subtle</code> modifier
          tints the background.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Default card</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-card">
  <div class="ln-card__header">
    <span class="ln-card__eyebrow">Component</span>
    <h3 class="ln-card__title">Card title</h3>
    <p class="ln-card__subtitle">Optional subtitle text</p>
  </div>
  <div class="ln-card__body">
    <p>Card body content goes here. It fills the available space
       and pushes the footer to the bottom.</p>
  </div>
  <div class="ln-card__footer">
    <span class="text-muted text-body-sm">Footer content</span>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-card">
              <div className="ln-card__header">
                <span className="ln-card__eyebrow">Component</span>
                <h3 className="ln-card__title">Card title</h3>
                <p className="ln-card__subtitle">Optional subtitle text</p>
              </div>
              <div className="ln-card__body">
                <p>Card body content goes here. It fills the available space
                   and pushes the footer to the bottom.</p>
              </div>
              <div className="ln-card__footer">
                <span className="text-muted text-body-sm">Footer content</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Interactive card with shadow</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-card ln-card--interactive">
  <div class="ln-card__body">
    <h3 class="ln-card__title">Hover to see the lift effect</h3>
    <p>Interactive cards raise on hover with a shadow transition.</p>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-card ln-card--interactive">
              <div className="ln-card__body">
                <h3 className="ln-card__title">Hover to see the lift effect</h3>
                <p>Interactive cards raise on hover with a shadow transition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Horizontal layout</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-card ln-card--horizontal">
  <div class="ln-card__media">
    <div class="bg-surface-sunken p-6 text-center text-muted">Image</div>
  </div>
  <div class="ln-card__body">
    <h3 class="ln-card__title">Side-by-side card</h3>
    <p>Media sits on the left with body content on the right.</p>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-card ln-card--horizontal">
              <div className="ln-card__media">
                <div className="bg-surface-sunken p-6 text-center text-muted">Image</div>
              </div>
              <div className="ln-card__body">
                <h3 className="ln-card__title">Side-by-side card</h3>
                <p>Media sits on the left with body content on the right.</p>
              </div>
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
            <tr>
              <td><code>.ln-card</code></td>
              <td>Card container with outline border</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card__media</code></td>
              <td>Full-bleed image area</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card__header</code></td>
              <td>Header wrapper</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card__eyebrow</code></td>
              <td>Uppercase label above title</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card__title</code></td>
              <td>Card heading</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card__subtitle</code></td>
              <td>Secondary text below title</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card__body</code></td>
              <td>Main content area</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card__footer</code></td>
              <td>Footer area pushed to bottom</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card__actions</code></td>
              <td>Action button row</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card__link</code></td>
              <td>Stretched link overlay</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card--flat</code></td>
              <td>Remove outline border</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card--shadow-&#123;1–4&#125;</code></td>
              <td>Elevation shadow levels</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card--interactive</code></td>
              <td>Hover lift and shadow effect</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card--horizontal</code></td>
              <td>Side-by-side media and content</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card--pad-sm</code></td>
              <td>Compact padding</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card--pad-md</code></td>
              <td>Default padding</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card--pad-lg</code></td>
              <td>Generous padding</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card--subtle</code></td>
              <td>Sunken background</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-card--&#123;role&#125;</code></td>
              <td>Role colour (primary, success, warning, danger, info, secondary)</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
