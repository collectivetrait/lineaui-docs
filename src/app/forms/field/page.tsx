import { CodeBlock } from "@/components/CodeBlock";

export default function FieldPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Field</h1>
        <p className="lead text-subtle">
          Wraps a label, control, hint, and error message into a single
          vertical-rhythm-aligned unit. Error state activates
          via <code>aria-invalid=&quot;true&quot;</code> on the input.
        </p>
      </section>

      <section className="docs-section">
        <h2>Default field</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-field">
  <label class="ln-field__label">Email address</label>
  <div class="ln-field__control">
    <input type="email" placeholder="you@example.com">
  </div>
  <span class="ln-field__hint">We'll never share your email.</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--narrow">
            <div className="ln-field">
              <label className="ln-field__label">Email address</label>
              <div className="ln-field__control">
                <input type="email" placeholder="you@example.com" />
              </div>
              <span className="ln-field__hint">We&apos;ll never share your email.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Error state</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-field">
  <label class="ln-field__label">Username</label>
  <div class="ln-field__control">
    <input type="text" aria-invalid="true" value="ab">
  </div>
  <span class="ln-field__hint">At least 3 characters.</span>
  <span class="ln-field__error">Username must be at least 3 characters.</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--narrow">
            <div className="ln-field">
              <label className="ln-field__label">Username</label>
              <div className="ln-field__control">
                <input type="text" aria-invalid="true" defaultValue="ab" />
              </div>
              <span className="ln-field__hint">At least 3 characters.</span>
              <span className="ln-field__error">Username must be at least 3 characters.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Inline field</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-field ln-field--inline">
  <label class="ln-field__label">Full name</label>
  <div class="ln-field__control">
    <input type="text" placeholder="Jane Doe">
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--narrow">
            <div className="ln-field ln-field--inline">
              <label className="ln-field__label">Full name</label>
              <div className="ln-field__control">
                <input type="text" placeholder="Jane Doe" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Small size</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-field ln-field--sm">
  <label class="ln-field__label">ZIP code</label>
  <div class="ln-field__control">
    <input type="text" placeholder="90210">
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--narrow">
            <div className="ln-field ln-field--sm">
              <label className="ln-field__label">ZIP code</label>
              <div className="ln-field__control">
                <input type="text" placeholder="90210" />
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
              <td><code>.ln-field</code></td>
              <td>Field wrapper (label + control + hint + error)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-field__label</code></td>
              <td>Field label</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-field__required</code></td>
              <td>Required indicator</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-field__optional</code></td>
              <td>Optional indicator</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-field__control</code></td>
              <td>Input/select/textarea wrapper</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-field__hint</code></td>
              <td>Hint text below the control</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-field__error</code></td>
              <td>Error message (visible on aria-invalid)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-field__counter</code></td>
              <td>Character counter</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-field--sm</code></td>
              <td>Small input height (2rem)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-field--lg</code></td>
              <td>Large input height (3rem)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-field--inline</code></td>
              <td>Horizontal label + control layout</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
