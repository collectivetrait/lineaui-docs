import { CodeBlock } from "@/components/CodeBlock";

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

      <section className="docs-section">
        <h2>Default</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-accordion">
  <details class="ln-accordion__item" open>
    <summary class="ln-accordion__summary">
      <span class="ln-accordion__title">What is vertical rhythm?</span>
      <svg class="ln-accordion__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
      <svg class="ln-accordion__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
      <svg class="ln-accordion__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
                  <svg className="ln-accordion__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <svg className="ln-accordion__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <svg className="ln-accordion__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-accordion ln-accordion--flush">
  <details class="ln-accordion__item" open>
    <summary class="ln-accordion__summary">
      <span class="ln-accordion__title">No borders between items</span>
      <svg class="ln-accordion__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </summary>
    <div class="ln-accordion__content">
      <p>The flush modifier removes all divider lines.</p>
    </div>
  </details>
  <details class="ln-accordion__item">
    <summary class="ln-accordion__summary">
      <span class="ln-accordion__title">Useful inside cards</span>
      <svg class="ln-accordion__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
                  <svg className="ln-accordion__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="ln-accordion__content">
                  <p>The flush modifier removes all divider lines.</p>
                </div>
              </details>
              <details className="ln-accordion__item">
                <summary className="ln-accordion__summary">
                  <span className="ln-accordion__title">Useful inside cards</span>
                  <svg className="ln-accordion__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
    </article>
  );
}
