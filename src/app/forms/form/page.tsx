import { CodeBlock } from "@/components/CodeBlock";

export default function FormPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Form</h1>
        <p className="lead text-subtle">
          Layout wrapper for form sections, rows, and actions. Handles spacing,
          grid-based rows, and sticky action bars.
        </p>
      </section>

      <section className="docs-section">
        <h2>Default stacked layout</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<form class="ln-form">
  <div class="ln-form__section">
    <h3 class="ln-form__heading">Account details</h3>
    <div class="ln-field">
      <label class="ln-field__label">Email</label>
      <div class="ln-field__control">
        <input type="email" placeholder="you@example.com">
      </div>
    </div>
    <div class="ln-field">
      <label class="ln-field__label">Password</label>
      <div class="ln-field__control">
        <input type="password" placeholder="••••••••">
      </div>
    </div>
  </div>
  <div class="ln-form__actions">
    <button class="ln-button ln-button--solid">Create account</button>
    <button class="ln-button ln-button--ghost">Cancel</button>
  </div>
</form>`}</CodeBlock>
          <div className="component-demo__preview">
            <form className="ln-form" action="#">
              <div className="ln-form__section">
                <h3 className="ln-form__heading">Account details</h3>
                <div className="ln-field">
                  <label className="ln-field__label">Email</label>
                  <div className="ln-field__control">
                    <input type="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="ln-field">
                  <label className="ln-field__label">Password</label>
                  <div className="ln-field__control">
                    <input type="password" placeholder="••••••••" />
                  </div>
                </div>
              </div>
              <div className="ln-form__actions">
                <button className="ln-button ln-button--solid" type="button">Create account</button>
                <button className="ln-button ln-button--ghost" type="button">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Row layout</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<form class="ln-form">
  <div class="ln-form__row">
    <div class="ln-field">
      <label class="ln-field__label">First name</label>
      <div class="ln-field__control">
        <input type="text" placeholder="Jane">
      </div>
    </div>
    <div class="ln-field">
      <label class="ln-field__label">Last name</label>
      <div class="ln-field__control">
        <input type="text" placeholder="Doe">
      </div>
    </div>
  </div>
  <div class="ln-form__actions ln-form__actions--plain ln-form__actions--end">
    <button class="ln-button ln-button--solid">Save</button>
  </div>
</form>`}</CodeBlock>
          <div className="component-demo__preview">
            <form className="ln-form" action="#">
              <div className="ln-form__row">
                <div className="ln-field">
                  <label className="ln-field__label">First name</label>
                  <div className="ln-field__control">
                    <input type="text" placeholder="Jane" />
                  </div>
                </div>
                <div className="ln-field">
                  <label className="ln-field__label">Last name</label>
                  <div className="ln-field__control">
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>
              </div>
              <div className="ln-form__actions ln-form__actions--plain ln-form__actions--end">
                <button className="ln-button ln-button--solid" type="button">Save</button>
              </div>
            </form>
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
              <td><code>.ln-form</code></td>
              <td>Form layout container</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-form__section</code></td>
              <td>Grouped section with top border separator</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-form__header</code></td>
              <td>Section heading</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-form__title</code></td>
              <td>Section title</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-form__description</code></td>
              <td>Section description text</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-form__row</code></td>
              <td>Auto-fit grid row for side-by-side fields</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-form__actions</code></td>
              <td>Action bar with top border</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-form__actions--plain</code></td>
              <td>Action bar without top border</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-form__actions--end</code></td>
              <td>Right-aligned actions</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-form__actions--sticky</code></td>
              <td>Sticky action bar at bottom</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-form--aside</code></td>
              <td>Two-column section layout (label + fields)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-form--compact</code></td>
              <td>Reduced spacing between fields</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
