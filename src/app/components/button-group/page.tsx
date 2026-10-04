import { CodeBlock } from "@/components/CodeBlock";

export default function ButtonGroupPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Button group</h1>
        <p className="lead text-subtle">
          An inline-flex container that groups related buttons with consistent
          spacing. No BEM elements — children are plain <code>ln-button</code>{" "}
          instances. Default layout is horizontal with a small gap.
        </p>
      </section>

      <section className="docs-section">
        <h2>Default group</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-button-group">
  <button class="ln-button ln-button--outline">Left</button>
  <button class="ln-button ln-button--outline">Center</button>
  <button class="ln-button ln-button--outline">Right</button>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-button-group">
              <button className="ln-button ln-button--outline">Left</button>
              <button className="ln-button ln-button--outline">Center</button>
              <button className="ln-button ln-button--outline">Right</button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Attached group</h2>
        <p>
          The <code>--attached</code> modifier removes the gap and joins buttons
          into a segmented control with internal divider borders.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-button-group ln-button-group--attached">
  <button class="ln-button ln-button--outline">Day</button>
  <button class="ln-button ln-button--outline">Week</button>
  <button class="ln-button ln-button--outline">Month</button>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-button-group ln-button-group--attached">
              <button className="ln-button ln-button--outline">Day</button>
              <button className="ln-button ln-button--outline">Week</button>
              <button className="ln-button ln-button--outline">Month</button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Vertical group</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-button-group ln-button-group--vertical ln-button-group--attached">
  <button class="ln-button ln-button--outline">Top</button>
  <button class="ln-button ln-button--outline">Middle</button>
  <button class="ln-button ln-button--outline">Bottom</button>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-button-group ln-button-group--vertical ln-button-group--attached">
              <button className="ln-button ln-button--outline">Top</button>
              <button className="ln-button ln-button--outline">Middle</button>
              <button className="ln-button ln-button--outline">Bottom</button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Equal width buttons</h2>
        <p>
          The <code>--fill</code> modifier applies <code>flex: auto</code> to
          all children so they share the available space equally. Works with
          both horizontal and vertical groups.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-button-group ln-button-group--attached ln-button-group--fill">
  <button class="ln-button ln-button--outline">Yes</button>
  <button class="ln-button ln-button--outline">No</button>
  <button class="ln-button ln-button--outline">Maybe</button>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-button-group ln-button-group--attached ln-button-group--fill">
              <button className="ln-button ln-button--outline">Yes</button>
              <button className="ln-button ln-button--outline">No</button>
              <button className="ln-button ln-button--outline">Maybe</button>
            </div>
          </div>
        </div>

        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-button-group ln-button-group--vertical ln-button-group--attached ln-button-group--fill">
  <button class="ln-button ln-button--outline">Top</button>
  <button class="ln-button ln-button--outline">Middle</button>
  <button class="ln-button ln-button--outline">Bottom</button>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-button-group ln-button-group--vertical ln-button-group--attached ln-button-group--fill">
              <button className="ln-button ln-button--outline">Top</button>
              <button className="ln-button ln-button--outline">Middle</button>
              <button className="ln-button ln-button--outline">Bottom</button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
