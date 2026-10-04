import { CodeBlock } from "@/components/CodeBlock";

export default function QuotePage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Quote</h1>
        <p className="lead text-subtle">
          Attributed quotes for pull quotes in articles and testimonials on
          store pages. Supports role colors on the accent edge and a card
          variant for testimonials.
        </p>
      </section>

      <section className="docs-section">
        <h2>Pull quote</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-quote ln-quote--pull">
  <p class="ln-quote__text">Every vertical measurement lands on an 8px grid,
     and every line of running text sits on a 24px line grid.</p>
  <footer class="ln-quote__footer">
    <cite class="ln-quote__cite">Design system principles</cite>
  </footer>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-quote ln-quote--pull">
              <p className="ln-quote__text">Every vertical measurement lands on an 8px grid,
                 and every line of running text sits on a 24px line grid.</p>
              <footer className="ln-quote__footer">
                <cite className="ln-quote__cite">Design system principles</cite>
              </footer>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Card testimonial</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-quote ln-quote--card">
  <p class="ln-quote__text">The rhythm system made our layouts consistent
     across every page without any manual adjustment.</p>
  <footer class="ln-quote__footer">
    <div class="ln-avatar ln-avatar--sm">
      <span class="ln-avatar__initials">JD</span>
    </div>
    <cite class="ln-quote__cite">Jane Doe, Engineering Lead</cite>
  </footer>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-quote ln-quote--card">
              <p className="ln-quote__text">The rhythm system made our layouts consistent
                 across every page without any manual adjustment.</p>
              <footer className="ln-quote__footer">
                <div className="ln-avatar ln-avatar--sm">
                  <span className="ln-avatar__initials">JD</span>
                </div>
                <cite className="ln-quote__cite">Jane Doe, Engineering Lead</cite>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
