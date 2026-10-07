import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function ClusterPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Cluster</h1>
        <p className="lead text-subtle">
          A flexbox row that wraps its children with a consistent gap. Use it
          for button groups, tag lists, meta lines, and toolbars.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Default cluster</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-cluster">
  <span class="bg-surface-raised rounded-sm p-1 px-2">Design</span>
  <span class="bg-surface-raised rounded-sm p-1 px-2">Tokens</span>
  <span class="bg-surface-raised rounded-sm p-1 px-2">Vertical Rhythm</span>
  <span class="bg-surface-raised rounded-sm p-1 px-2">SCSS</span>
  <span class="bg-surface-raised rounded-sm p-1 px-2">BEM</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-cluster">
              <span className="bg-surface-raised rounded-sm p-1 px-2">Design</span>
              <span className="bg-surface-raised rounded-sm p-1 px-2">Tokens</span>
              <span className="bg-surface-raised rounded-sm p-1 px-2">Vertical Rhythm</span>
              <span className="bg-surface-raised rounded-sm p-1 px-2">SCSS</span>
              <span className="bg-surface-raised rounded-sm p-1 px-2">BEM</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Justify and alignment modifiers</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Space between -->
<div class="ln-cluster ln-cluster--gap-md ln-cluster--justify-between mb-3">
  <span class="bg-surface-raised rounded-sm p-1 px-2">Left item</span>
  <span class="bg-surface-raised rounded-sm p-1 px-2">Right item</span>
</div>

<!-- Center-aligned -->
<div class="ln-cluster ln-cluster--nowrap ln-cluster--align-center">
  <strong>Title</strong>
  <span class="text-muted text-body-sm">Centered subtitle</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-cluster ln-cluster--gap-md ln-cluster--justify-between mb-3">
              <span className="bg-surface-raised rounded-sm p-1 px-2">Left item</span>
              <span className="bg-surface-raised rounded-sm p-1 px-2">Right item</span>
            </div>
            <div className="ln-cluster ln-cluster--nowrap ln-cluster--align-center">
              <strong>Title</strong>
              <span className="text-muted text-body-sm">Centered subtitle</span>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive layout</h2>
        <p>
          Justify, align, and nowrap modifiers accept a{" "}
          <code>@&#123;breakpoint&#125;</code> suffix for responsive behaviour.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Centred on mobile, space-between from md up -->
<div class="ln-cluster ln-cluster--gap-md ln-cluster--justify-center ln-cluster--justify-between@md border p-2 mb-3">
  <span class="bg-surface-raised rounded-sm p-1 px-2">Left</span>
  <span class="bg-surface-raised rounded-sm p-1 px-2">Right</span>
</div>

<!-- Wraps on mobile, nowrap from lg up -->
<div class="ln-cluster ln-cluster--gap-sm ln-cluster--nowrap@lg border p-2">
  <span class="bg-surface-raised rounded-sm p-1 px-2">One</span>
  <span class="bg-surface-raised rounded-sm p-1 px-2">Two</span>
  <span class="bg-surface-raised rounded-sm p-1 px-2">Three</span>
  <span class="bg-surface-raised rounded-sm p-1 px-2">Four</span>
  <span class="bg-surface-raised rounded-sm p-1 px-2">Five</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-cluster ln-cluster--gap-md ln-cluster--justify-center ln-cluster--justify-between@md border p-2 mb-3">
              <span className="bg-surface-raised rounded-sm p-1 px-2">Left</span>
              <span className="bg-surface-raised rounded-sm p-1 px-2">Right</span>
            </div>
            <div className="ln-cluster ln-cluster--gap-sm ln-cluster--nowrap@lg border p-2">
              <span className="bg-surface-raised rounded-sm p-1 px-2">One</span>
              <span className="bg-surface-raised rounded-sm p-1 px-2">Two</span>
              <span className="bg-surface-raised rounded-sm p-1 px-2">Three</span>
              <span className="bg-surface-raised rounded-sm p-1 px-2">Four</span>
              <span className="bg-surface-raised rounded-sm p-1 px-2">Five</span>
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
              <td><code>.ln-cluster</code></td>
              <td>Flex row with wrap and default 8px gap</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-cluster--gap-xs</code></td>
              <td>8px gap</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-cluster--gap-sm</code></td>
              <td>16px gap</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-cluster--gap-md</code></td>
              <td>24px gap</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-cluster--justify-start</code></td>
              <td>Justify items to start</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.ln-cluster--justify-center</code></td>
              <td>Justify items to centre</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.ln-cluster--justify-end</code></td>
              <td>Justify items to end</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.ln-cluster--justify-between</code></td>
              <td>Space between items</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.ln-cluster--align-start</code></td>
              <td>Align items to start</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.ln-cluster--align-center</code></td>
              <td>Align items to centre</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.ln-cluster--align-baseline</code></td>
              <td>Align items to baseline</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.ln-cluster--align-end</code></td>
              <td>Align items to end</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.ln-cluster--nowrap</code></td>
              <td>Prevent wrapping</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
