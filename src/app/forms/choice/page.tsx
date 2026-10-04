import { CodeBlock } from "@/components/CodeBlock";

export default function ChoicePage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Choice</h1>
        <p className="lead text-subtle">
          Custom-styled checkboxes, radios, switches, and card selectors.
          The native input uses <code>appearance: none</code> and renders the
          custom control directly. States are driven
          by <code>:checked</code>, <code>:focus-visible</code>,
          and <code>aria-invalid</code>.
        </p>
      </section>

      <section className="docs-section">
        <h2>Checkbox group</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-choice">
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="checkbox" checked>
    <span class="ln-choice__label">Email notifications</span>
  </label>
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="checkbox">
    <span class="ln-choice__label">SMS notifications</span>
  </label>
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="checkbox" disabled>
    <span class="ln-choice__label">Push notifications (coming soon)</span>
  </label>
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--narrow">
            <div className="ln-choice">
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="checkbox" defaultChecked />
                <span className="ln-choice__label">Email notifications</span>
              </label>
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="checkbox" />
                <span className="ln-choice__label">SMS notifications</span>
              </label>
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="checkbox" disabled />
                <span className="ln-choice__label">Push notifications (coming soon)</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Radio group</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-choice">
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="radio" name="plan" checked>
    <span class="ln-choice__label">Free</span>
  </label>
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="radio" name="plan">
    <span class="ln-choice__label">Pro</span>
  </label>
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="radio" name="plan">
    <span class="ln-choice__label">Enterprise</span>
  </label>
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--narrow">
            <div className="ln-choice">
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="radio" name="plan" defaultChecked />
                <span className="ln-choice__label">Free</span>
              </label>
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="radio" name="plan" />
                <span className="ln-choice__label">Pro</span>
              </label>
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="radio" name="plan" />
                <span className="ln-choice__label">Enterprise</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Switch toggle</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-choice ln-choice--switch">
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="checkbox" checked>
    <span class="ln-choice__label">Dark mode</span>
  </label>
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="checkbox">
    <span class="ln-choice__label">Auto-save</span>
  </label>
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--narrow">
            <div className="ln-choice ln-choice--switch">
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="checkbox" defaultChecked />
                <span className="ln-choice__label">Dark mode</span>
              </label>
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="checkbox" />
                <span className="ln-choice__label">Auto-save</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Card variant</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-choice ln-choice--card">
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="radio" name="shipping" checked>
    <div class="ln-choice__body">
      <span class="ln-choice__label">Standard</span>
      <span class="ln-choice__description">5-7 business days</span>
    </div>
  </label>
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="radio" name="shipping">
    <div class="ln-choice__body">
      <span class="ln-choice__label">Express</span>
      <span class="ln-choice__description">2-3 business days</span>
    </div>
  </label>
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--narrow">
            <div className="ln-choice ln-choice--card">
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="radio" name="shipping" defaultChecked />
                <div className="ln-choice__body">
                  <span className="ln-choice__label">Standard</span>
                  <span className="ln-choice__description">5-7 business days</span>
                </div>
              </label>
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="radio" name="shipping" />
                <div className="ln-choice__body">
                  <span className="ln-choice__label">Express</span>
                  <span className="ln-choice__description">2-3 business days</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Inline choice</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-choice ln-choice--inline">
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="checkbox" checked>
    <span class="ln-choice__label">Red</span>
  </label>
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="checkbox">
    <span class="ln-choice__label">Green</span>
  </label>
  <label class="ln-choice__option">
    <input class="ln-choice__input" type="checkbox">
    <span class="ln-choice__label">Blue</span>
  </label>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-choice ln-choice--inline">
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="checkbox" defaultChecked />
                <span className="ln-choice__label">Red</span>
              </label>
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="checkbox" />
                <span className="ln-choice__label">Green</span>
              </label>
              <label className="ln-choice__option">
                <input className="ln-choice__input" type="checkbox" />
                <span className="ln-choice__label">Blue</span>
              </label>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
