import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function StepsPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Steps</h1>
        <p className="lead text-subtle">
          A progress indicator for multi-step flows like checkout or onboarding.
          Uses <code>aria-current=&quot;step&quot;</code> for the active step and{" "}
          <code>.is-complete</code> / <code>.is-error</code> state classes for
          completed or failed steps.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Horizontal steps</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-steps">
  <div class="ln-steps__item is-complete">
    <div class="ln-steps__marker">1</div>
    <div class="ln-steps__label">Cart</div>
  </div>
  <div class="ln-steps__connector"></div>
  <div class="ln-steps__item is-complete">
    <div class="ln-steps__marker">2</div>
    <div class="ln-steps__label">Shipping</div>
  </div>
  <div class="ln-steps__connector"></div>
  <div class="ln-steps__item" aria-current="step">
    <div class="ln-steps__marker">3</div>
    <div class="ln-steps__label">Payment</div>
  </div>
  <div class="ln-steps__connector"></div>
  <div class="ln-steps__item">
    <div class="ln-steps__marker">4</div>
    <div class="ln-steps__label">Confirm</div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-steps">
              <div className="ln-steps__item is-complete">
                <div className="ln-steps__marker">1</div>
                <div className="ln-steps__label">Cart</div>
              </div>
              <div className="ln-steps__connector"></div>
              <div className="ln-steps__item is-complete">
                <div className="ln-steps__marker">2</div>
                <div className="ln-steps__label">Shipping</div>
              </div>
              <div className="ln-steps__connector"></div>
              <div className="ln-steps__item" aria-current="step">
                <div className="ln-steps__marker">3</div>
                <div className="ln-steps__label">Payment</div>
              </div>
              <div className="ln-steps__connector"></div>
              <div className="ln-steps__item">
                <div className="ln-steps__marker">4</div>
                <div className="ln-steps__label">Confirm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Vertical steps</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-steps ln-steps--vertical">
  <div class="ln-steps__item is-complete">
    <div class="ln-steps__marker">1</div>
    <div class="ln-steps__label">Account created</div>
    <div class="ln-steps__connector"></div>
  </div>
  <div class="ln-steps__item" aria-current="step">
    <div class="ln-steps__marker">2</div>
    <div class="ln-steps__label">Verify email</div>
    <div class="ln-steps__connector"></div>
  </div>
  <div class="ln-steps__item">
    <div class="ln-steps__marker">3</div>
    <div class="ln-steps__label">Set up profile</div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-steps ln-steps--vertical">
              <div className="ln-steps__item is-complete">
                <div className="ln-steps__marker">1</div>
                <div className="ln-steps__label">Account created</div>
                <div className="ln-steps__connector"></div>
              </div>
              <div className="ln-steps__item" aria-current="step">
                <div className="ln-steps__marker">2</div>
                <div className="ln-steps__label">Verify email</div>
                <div className="ln-steps__connector"></div>
              </div>
              <div className="ln-steps__item">
                <div className="ln-steps__marker">3</div>
                <div className="ln-steps__label">Set up profile</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Dot steps</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-steps ln-steps--dots">
  <div class="ln-steps__item is-complete">
    <div class="ln-steps__marker"></div>
  </div>
  <div class="ln-steps__item is-complete">
    <div class="ln-steps__marker"></div>
  </div>
  <div class="ln-steps__item" aria-current="step">
    <div class="ln-steps__marker"></div>
  </div>
  <div class="ln-steps__item">
    <div class="ln-steps__marker"></div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-steps ln-steps--dots">
              <div className="ln-steps__item is-complete">
                <div className="ln-steps__marker"></div>
              </div>
              <div className="ln-steps__item is-complete">
                <div className="ln-steps__marker"></div>
              </div>
              <div className="ln-steps__item" aria-current="step">
                <div className="ln-steps__marker"></div>
              </div>
              <div className="ln-steps__item">
                <div className="ln-steps__marker"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Steps with color roles</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-steps ln-steps--info">
  <div class="ln-steps__item is-complete">
    <div class="ln-steps__marker">1</div>
    <div class="ln-steps__label">Upload</div>
  </div>
  <div class="ln-steps__connector"></div>
  <div class="ln-steps__item" aria-current="step">
    <div class="ln-steps__marker">2</div>
    <div class="ln-steps__label">Process</div>
  </div>
  <div class="ln-steps__connector"></div>
  <div class="ln-steps__item">
    <div class="ln-steps__marker">3</div>
    <div class="ln-steps__label">Done</div>
  </div>
</div>

<div class="ln-steps ln-steps--danger">
  <div class="ln-steps__item is-complete">
    <div class="ln-steps__marker">1</div>
    <div class="ln-steps__label">Select</div>
  </div>
  <div class="ln-steps__connector"></div>
  <div class="ln-steps__item" aria-current="step">
    <div class="ln-steps__marker">2</div>
    <div class="ln-steps__label">Confirm</div>
  </div>
  <div class="ln-steps__connector"></div>
  <div class="ln-steps__item">
    <div class="ln-steps__marker">3</div>
    <div class="ln-steps__label">Delete</div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview d-flex flex-column gap-4">
            <div className="ln-steps ln-steps--info">
              <div className="ln-steps__item is-complete">
                <div className="ln-steps__marker">1</div>
                <div className="ln-steps__label">Upload</div>
              </div>
              <div className="ln-steps__connector"></div>
              <div className="ln-steps__item" aria-current="step">
                <div className="ln-steps__marker">2</div>
                <div className="ln-steps__label">Process</div>
              </div>
              <div className="ln-steps__connector"></div>
              <div className="ln-steps__item">
                <div className="ln-steps__marker">3</div>
                <div className="ln-steps__label">Done</div>
              </div>
            </div>
            <div className="ln-steps ln-steps--danger">
              <div className="ln-steps__item is-complete">
                <div className="ln-steps__marker">1</div>
                <div className="ln-steps__label">Select</div>
              </div>
              <div className="ln-steps__connector"></div>
              <div className="ln-steps__item" aria-current="step">
                <div className="ln-steps__marker">2</div>
                <div className="ln-steps__label">Confirm</div>
              </div>
              <div className="ln-steps__connector"></div>
              <div className="ln-steps__item">
                <div className="ln-steps__marker">3</div>
                <div className="ln-steps__label">Delete</div>
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
            <tr><td><code>.ln-steps</code></td><td>Steps container (flex row)</td><td>No</td></tr>
            <tr><td><code>.ln-steps__item</code></td><td>Individual step</td><td>No</td></tr>
            <tr><td><code>.ln-steps__marker</code></td><td>Step number or icon circle</td><td>No</td></tr>
            <tr><td><code>.ln-steps__connector</code></td><td>Line between steps</td><td>No</td></tr>
            <tr><td><code>.ln-steps__label</code></td><td>Step label text</td><td>No</td></tr>
            <tr><td><code>.ln-steps__description</code></td><td>Step description text</td><td>No</td></tr>
            <tr><td><code>.ln-steps--vertical</code></td><td>Vertical stacked layout</td><td>No</td></tr>
            <tr><td><code>.ln-steps--dots</code></td><td>Dot indicator style</td><td>No</td></tr>
            <tr><td><code>.ln-steps--compact</code></td><td>Smaller markers</td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
