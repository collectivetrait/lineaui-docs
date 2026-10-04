import { CodeBlock } from "@/components/CodeBlock";

export default function EmptyStatePage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Empty state</h1>
        <p className="lead text-subtle">
          A centered layout for empty views such as no-results screens or first-run
          prompts. Contains an optional icon or illustration, title, body, and
          action buttons.
        </p>
      </section>

      <section className="docs-section">
        <h2>Default</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-empty-state">
  <div class="ln-empty-state__icon">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <h3 class="ln-empty-state__title">No results found</h3>
  <p class="ln-empty-state__body">Try adjusting your search or filters to find what you&#39;re looking for.</p>
  <div class="ln-empty-state__actions">
    <button class="ln-button ln-button--solid ln-button--primary">Clear filters</button>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-empty-state">
              <div className="ln-empty-state__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="ln-empty-state__title">No results found</h3>
              <p className="ln-empty-state__body">Try adjusting your search or filters to find what you&#39;re looking for.</p>
              <div className="ln-empty-state__actions">
                <button className="ln-button ln-button--solid ln-button--primary">Clear filters</button>
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
              <td><code>.ln-empty-state</code></td>
              <td>Centred empty state container</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-empty-state__media</code></td>
              <td>Illustration or image</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-empty-state__icon</code></td>
              <td>Icon element</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-empty-state__title</code></td>
              <td>Heading</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-empty-state__body</code></td>
              <td>Description text</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-empty-state__actions</code></td>
              <td>Action buttons container</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-empty-state--compact</code></td>
              <td>Reduced padding and smaller illustration</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-empty-state--sunken</code></td>
              <td>Sunken background surface</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
