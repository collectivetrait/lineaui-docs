import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

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

      <TableOfContents />

      <section className="docs-section">
        <h2>Default</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-empty-state">
  <div class="ln-empty-state__icon">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
      <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero"/>
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
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fillRule="nonzero" />
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
