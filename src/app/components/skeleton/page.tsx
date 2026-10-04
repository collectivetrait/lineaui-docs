import { CodeBlock } from "@/components/CodeBlock";

export default function SkeletonPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Skeleton</h1>
        <p className="lead text-subtle">
          Pulsing placeholder shapes for loading content. Use <code>__line</code> for
          text, <code>__circle</code> for avatars, and <code>__block</code> for
          images or cards.
        </p>
      </section>

      <section className="docs-section">
        <h2>Text and shapes</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-skeleton">
  <div class="ln-skeleton__circle" style="width: 48px"></div>
  <div class="ln-skeleton__line" style="width: 80%"></div>
  <div class="ln-skeleton__line" style="width: 60%"></div>
  <div class="ln-skeleton__line" style="width: 70%"></div>
  <div class="ln-skeleton__block" style="height: 120px"></div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-skeleton">
              <div className="ln-skeleton__circle" style={{ width: "48px" }}></div>
              <div className="ln-skeleton__line" style={{ width: "80%" }}></div>
              <div className="ln-skeleton__line" style={{ width: "60%" }}></div>
              <div className="ln-skeleton__line" style={{ width: "70%" }}></div>
              <div className="ln-skeleton__block" style={{ height: "120px" }}></div>
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
            <tr><td><code>.ln-skeleton</code></td><td>Skeleton container with vertical gap</td><td>No</td></tr>
            <tr><td><code>.ln-skeleton__line</code></td><td>Text-line placeholder (24px)</td><td>No</td></tr>
            <tr><td><code>.ln-skeleton__block</code></td><td>Rectangular block placeholder</td><td>No</td></tr>
            <tr><td><code>.ln-skeleton__circle</code></td><td>Circular placeholder (avatar, icon)</td><td>No</td></tr>
            <tr><td><code>.ln-skeleton--text-body</code></td><td>Body text line height (24px)</td><td>No</td></tr>
            <tr><td><code>.ln-skeleton--text-sm</code></td><td>Small text line height (20px)</td><td>No</td></tr>
            <tr><td><code>.ln-skeleton--text-h2</code></td><td>H2 line height (48px)</td><td>No</td></tr>
            <tr><td><code>.ln-skeleton--text-h3</code></td><td>H3 line height (32px)</td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
