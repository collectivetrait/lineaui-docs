import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function AccordionPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Accordion</h1>
        <p className="lead text-subtle">
          Expandable content sections built on native{" "}
          <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code>. The{" "}
          <code>--exclusive</code> modifier uses the <code>name</code>{" "}
          attribute for mutual exclusivity with no JavaScript.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Default</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-accordion">
  <details class="ln-accordion__item" open>
    <summary class="ln-accordion__summary">
      <span class="ln-accordion__title">What is vertical rhythm?</span>
      <svg class="ln-accordion__icon" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true">
        <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/>
      </svg>
    </summary>
    <div class="ln-accordion__content">
      <p>Vertical rhythm is a design principle where all vertical
         spacing and line-heights are multiples of a base unit.</p>
    </div>
  </details>
  <details class="ln-accordion__item">
    <summary class="ln-accordion__summary">
      <span class="ln-accordion__title">What grid does ln use?</span>
      <svg class="ln-accordion__icon" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true">
        <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/>
      </svg>
    </summary>
    <div class="ln-accordion__content">
      <p>An 8px base grid for all boxes, and a 24px line grid for
         running text and headings.</p>
    </div>
  </details>
  <details class="ln-accordion__item">
    <summary class="ln-accordion__summary">
      <span class="ln-accordion__title">Do borders break the grid?</span>
      <svg class="ln-accordion__icon" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true">
        <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/>
      </svg>
    </summary>
    <div class="ln-accordion__content">
      <p>No. All visible borders use inset box-shadows, which take no
         space in the box model.</p>
    </div>
  </details>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-accordion">
              <details className="ln-accordion__item" open>
                <summary className="ln-accordion__summary">
                  <span className="ln-accordion__title">What is vertical rhythm?</span>
                  <svg className="ln-accordion__icon" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
                    <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
                  </svg>
                </summary>
                <div className="ln-accordion__content">
                  <p>Vertical rhythm is a design principle where all vertical
                     spacing and line-heights are multiples of a base unit.</p>
                </div>
              </details>
              <details className="ln-accordion__item">
                <summary className="ln-accordion__summary">
                  <span className="ln-accordion__title">What grid does ln use?</span>
                  <svg className="ln-accordion__icon" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
                    <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
                  </svg>
                </summary>
                <div className="ln-accordion__content">
                  <p>An 8px base grid for all boxes, and a 24px line grid for
                     running text and headings.</p>
                </div>
              </details>
              <details className="ln-accordion__item">
                <summary className="ln-accordion__summary">
                  <span className="ln-accordion__title">Do borders break the grid?</span>
                  <svg className="ln-accordion__icon" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
                    <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
                  </svg>
                </summary>
                <div className="ln-accordion__content">
                  <p>No. All visible borders use inset box-shadows, which take no
                     space in the box model.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Flush accordion</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-accordion ln-accordion--flush">
  <details class="ln-accordion__item" open>
    <summary class="ln-accordion__summary">
      <span class="ln-accordion__title">No borders between items</span>
      <svg class="ln-accordion__icon" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true">
        <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/>
      </svg>
    </summary>
    <div class="ln-accordion__content">
      <p>The flush modifier removes all divider lines.</p>
    </div>
  </details>
  <details class="ln-accordion__item">
    <summary class="ln-accordion__summary">
      <span class="ln-accordion__title">Useful inside cards</span>
      <svg class="ln-accordion__icon" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true">
        <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/>
      </svg>
    </summary>
    <div class="ln-accordion__content">
      <p>When embedded in a card body, flush avoids doubled borders.</p>
    </div>
  </details>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-accordion ln-accordion--flush">
              <details className="ln-accordion__item" open>
                <summary className="ln-accordion__summary">
                  <span className="ln-accordion__title">No borders between items</span>
                  <svg className="ln-accordion__icon" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
                    <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
                  </svg>
                </summary>
                <div className="ln-accordion__content">
                  <p>The flush modifier removes all divider lines.</p>
                </div>
              </details>
              <details className="ln-accordion__item">
                <summary className="ln-accordion__summary">
                  <span className="ln-accordion__title">Useful inside cards</span>
                  <svg className="ln-accordion__icon" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
                    <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
                  </svg>
                </summary>
                <div className="ln-accordion__content">
                  <p>When embedded in a card body, flush avoids doubled borders.</p>
                </div>
              </details>
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
              <td><code>.ln-accordion</code></td>
              <td>Accordion container</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-accordion__item</code></td>
              <td>Individual expandable item (uses <code>&lt;details&gt;</code>)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-accordion__summary</code></td>
              <td>Clickable header row (uses <code>&lt;summary&gt;</code>)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-accordion__title</code></td>
              <td>Title text within the summary</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-accordion__icon</code></td>
              <td>Chevron icon that rotates on open</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-accordion__content</code></td>
              <td>Expandable body content</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-accordion--flush</code></td>
              <td>Remove item borders</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-accordion--sm</code></td>
              <td>Compact size with smaller text</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
