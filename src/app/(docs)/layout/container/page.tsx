import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Container",
  description: "A max-width wrapper that centres content and applies responsive side padding. The foundation of page layout in linea-ui.",
};

export default function ContainerPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Container</h1>
        <p className="lead text-subtle">
          A max-width wrapper that centres content and applies a responsive side
          gutter. The default width is 900px (<code>--container</code>). Use
          modifiers to switch to narrower or wider tracks.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Variants</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Default: 900px centred -->
<div class="ln-container border p-2 mb-3">
  <p>Default — max-width 900px, centred with gutter padding.</p>
</div>

<!-- Narrow: 70ch prose measure -->
<div class="ln-container ln-container--narrow border p-2 mb-3">
  <p>Narrow — prose measure (~70ch), ideal for long-form reading.</p>
</div>

<!-- Wide: 1200px -->
<div class="ln-container ln-container--wide border p-2 mb-3">
  <p>Wide — 1200px maximum width for data-rich layouts.</p>
</div>

<!-- Full: no max-width -->
<div class="ln-container ln-container--full border p-2 mb-3">
  <p>Full — no max-width constraint.</p>
</div>

<!-- Flush: no side padding -->
<div class="ln-container ln-container--flush border p-2">
  <p>Flush — zero inline padding.</p>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-container border p-2 mb-3">
              <p>Default — max-width 900px, centred with gutter padding.</p>
            </div>
            <div className="ln-container ln-container--narrow border p-2 mb-3">
              <p>Narrow — prose measure (~70ch), ideal for long-form reading.</p>
            </div>
            <div className="ln-container ln-container--wide border p-2 mb-3">
              <p>Wide — 1200px maximum width for data-rich layouts.</p>
            </div>
            <div className="ln-container ln-container--full border p-2 mb-3">
              <p>Full — no max-width constraint.</p>
            </div>
            <div className="ln-container ln-container--flush border p-2">
              <p>Flush — zero inline padding.</p>
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
              <td><code>.ln-container</code></td>
              <td>Centred wrapper, max-width 900px with gutter padding</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-container--narrow</code></td>
              <td>Prose measure width (~70ch)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-container--wide</code></td>
              <td>Wide track (1200px)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-container--full</code></td>
              <td>No max-width constraint</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-container--flush</code></td>
              <td>Zero inline padding</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
