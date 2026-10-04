import { CodeBlock } from "@/components/CodeBlock";

export default function ListPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Structured list</h1>
        <p className="lead text-subtle">
          Rows with icons, descriptions, metadata, and actions. Used for
          settings lists, notification feeds, and sidebar navigation. Default
          rows are 48px (two lines); <code>--compact</code> reduces to 32px
          and <code>--spacious</code> expands to 64px.
        </p>
      </section>

      <section className="docs-section">
        <h2>Divided list</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<ul class="ln-list ln-list--divided">
  <li class="ln-list__item">
    <div class="ln-list__content">
      <span class="ln-list__title">Account settings</span>
      <span class="ln-list__description">Manage your profile, email, and password.</span>
    </div>
  </li>
  <li class="ln-list__item">
    <div class="ln-list__content">
      <span class="ln-list__title">Notifications</span>
      <span class="ln-list__description">Choose which updates you receive.</span>
    </div>
  </li>
  <li class="ln-list__item">
    <div class="ln-list__content">
      <span class="ln-list__title">Billing</span>
      <span class="ln-list__description">View invoices and update payment method.</span>
    </div>
  </li>
</ul>`}</CodeBlock>
          <div className="component-demo__preview">
            <ul className="ln-list ln-list--divided">
              <li className="ln-list__item">
                <div className="ln-list__content">
                  <span className="ln-list__title">Account settings</span>
                  <span className="ln-list__description">Manage your profile, email, and password.</span>
                </div>
              </li>
              <li className="ln-list__item">
                <div className="ln-list__content">
                  <span className="ln-list__title">Notifications</span>
                  <span className="ln-list__description">Choose which updates you receive.</span>
                </div>
              </li>
              <li className="ln-list__item">
                <div className="ln-list__content">
                  <span className="ln-list__title">Billing</span>
                  <span className="ln-list__description">View invoices and update payment method.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Bordered interactive list</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<ul class="ln-list ln-list--bordered ln-list--interactive">
  <li class="ln-list__item">
    <div class="ln-list__content">
      <span class="ln-list__title">Design tokens</span>
    </div>
    <span class="ln-list__meta">12 items</span>
  </li>
  <li class="ln-list__item">
    <div class="ln-list__content">
      <span class="ln-list__title">Layout blocks</span>
    </div>
    <span class="ln-list__meta">5 items</span>
  </li>
  <li class="ln-list__item">
    <div class="ln-list__content">
      <span class="ln-list__title">Content blocks</span>
    </div>
    <span class="ln-list__meta">10 items</span>
  </li>
</ul>`}</CodeBlock>
          <div className="component-demo__preview">
            <ul className="ln-list ln-list--bordered ln-list--interactive">
              <li className="ln-list__item">
                <div className="ln-list__content">
                  <span className="ln-list__title">Design tokens</span>
                </div>
                <span className="ln-list__meta">12 items</span>
              </li>
              <li className="ln-list__item">
                <div className="ln-list__content">
                  <span className="ln-list__title">Layout blocks</span>
                </div>
                <span className="ln-list__meta">5 items</span>
              </li>
              <li className="ln-list__item">
                <div className="ln-list__content">
                  <span className="ln-list__title">Content blocks</span>
                </div>
                <span className="ln-list__meta">10 items</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
