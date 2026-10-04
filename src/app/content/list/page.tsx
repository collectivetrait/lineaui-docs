import { CodeBlock } from "@/components/CodeBlock";

export default function ListPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">List</h1>
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
              <td><code>.ln-list</code></td>
              <td>Unstyled list container</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list__item</code></td>
              <td>List row with flex layout</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list__icon</code></td>
              <td>Leading icon slot</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list__media</code></td>
              <td>Leading media slot (avatar, thumbnail)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list__content</code></td>
              <td>Title and description wrapper</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list__title</code></td>
              <td>Primary text</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list__description</code></td>
              <td>Secondary muted text</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list__meta</code></td>
              <td>Trailing metadata</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list__action</code></td>
              <td>Trailing action slot</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list--divided</code></td>
              <td>Border between items</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list--bordered</code></td>
              <td>Outlined container with internal dividers</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list--interactive</code></td>
              <td>Hover highlight on items</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list--compact</code></td>
              <td>Reduced item height (32px)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-list--spacious</code></td>
              <td>Increased item height (64px)</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
