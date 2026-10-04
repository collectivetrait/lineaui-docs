import { CodeBlock } from "@/components/CodeBlock";

export default function AvatarPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Avatar</h1>
        <p className="lead text-subtle">
          Circular or square containers for user photos or initials. Five sizes
          from <code>--xs</code> (24px) to <code>--xl</code> (64px), all on
          the 8px grid. An optional status dot indicates online, away, or busy
          state.
        </p>
      </section>

      <section className="docs-section">
        <h2>Sizes</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="d-flex align-items-center gap-2">
  <div class="ln-avatar ln-avatar--xs">
    <span class="ln-avatar__initials">XS</span>
  </div>
  <div class="ln-avatar ln-avatar--sm">
    <span class="ln-avatar__initials">SM</span>
  </div>
  <div class="ln-avatar">
    <span class="ln-avatar__initials">MD</span>
  </div>
  <div class="ln-avatar ln-avatar--lg">
    <span class="ln-avatar__initials">LG</span>
  </div>
  <div class="ln-avatar ln-avatar--xl">
    <span class="ln-avatar__initials">XL</span>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <div className="ln-avatar ln-avatar--xs">
                <span className="ln-avatar__initials">XS</span>
              </div>
              <div className="ln-avatar ln-avatar--sm">
                <span className="ln-avatar__initials">SM</span>
              </div>
              <div className="ln-avatar">
                <span className="ln-avatar__initials">MD</span>
              </div>
              <div className="ln-avatar ln-avatar--lg">
                <span className="ln-avatar__initials">LG</span>
              </div>
              <div className="ln-avatar ln-avatar--xl">
                <span className="ln-avatar__initials">XL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Status indicator</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="d-flex align-items-center gap-3">
  <div class="ln-avatar ln-avatar--lg">
    <span class="ln-avatar__initials">AV</span>
    <span class="ln-avatar__status"></span>
  </div>
  <div class="ln-avatar ln-avatar--lg">
    <span class="ln-avatar__initials">BZ</span>
    <span class="ln-avatar__status ln-avatar__status--danger"></span>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-3">
              <div className="ln-avatar ln-avatar--lg">
                <span className="ln-avatar__initials">AV</span>
                <span className="ln-avatar__status"></span>
              </div>
              <div className="ln-avatar ln-avatar--lg">
                <span className="ln-avatar__initials">BZ</span>
                <span className="ln-avatar__status ln-avatar__status--danger"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Avatar group</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-avatar-group">
  <div class="ln-avatar"><span class="ln-avatar__initials">AB</span></div>
  <div class="ln-avatar"><span class="ln-avatar__initials">CD</span></div>
  <div class="ln-avatar"><span class="ln-avatar__initials">EF</span></div>
  <span class="ln-avatar-group__more">+3</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-avatar-group">
              <div className="ln-avatar"><span className="ln-avatar__initials">AB</span></div>
              <div className="ln-avatar"><span className="ln-avatar__initials">CD</span></div>
              <div className="ln-avatar"><span className="ln-avatar__initials">EF</span></div>
              <span className="ln-avatar-group__more">+3</span>
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
              <td><code>.ln-avatar</code></td>
              <td>Avatar container (40px default)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar__img</code></td>
              <td>Photo image element</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar__initials</code></td>
              <td>Letter initials fallback</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar__status</code></td>
              <td>Status indicator dot</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar__status--success</code></td>
              <td>Green status</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar__status--warning</code></td>
              <td>Yellow status</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar__status--danger</code></td>
              <td>Red status</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar__status--neutral</code></td>
              <td>Grey status</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar--xs</code></td>
              <td>24px size</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar--sm</code></td>
              <td>32px size</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar--md</code></td>
              <td>40px size (default)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar--lg</code></td>
              <td>48px size</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar--xl</code></td>
              <td>64px size</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar--square</code></td>
              <td>Rounded-square shape</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar-group</code></td>
              <td>Overlapping avatar row</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar-group__more</code></td>
              <td>Overflow count indicator</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-avatar-group--spread</code></td>
              <td>Remove overlap between avatars</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
