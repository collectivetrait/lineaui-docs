import { CodeBlock } from "@/components/CodeBlock";

export default function OverflowUtilities() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Overflow</h1>
        <p className="lead text-subtle">
          Overflow utilities control how content that exceeds its container is
          handled. Set overflow for both axes at once, or target{" "}
          <code>overflow-x</code> and <code>overflow-y</code> independently.
        </p>
      </section>

      <section className="docs-section">
        <h2>Overflow</h2>
        <p>
          Use <code>overflow-auto</code> to add scrollbars only when needed,{" "}
          <code>overflow-hidden</code> to clip content,{" "}
          <code>overflow-visible</code> to let content overflow, and{" "}
          <code>overflow-scroll</code> to always show scrollbars.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="overflow-hidden border rounded-sm p-2 w-50 mb-3">
  <p class="text-nowrap">overflow-hidden clips this very long line of text that extends beyond the w-50 container.</p>
</div>

<div class="overflow-auto border rounded-sm p-2 w-50">
  <p class="text-nowrap">overflow-auto shows a scrollbar when this long line of text exceeds the w-50 container.</p>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="overflow-hidden border rounded-sm p-2 w-50 mb-3">
              <p className="text-nowrap">overflow-hidden clips this very long line of text that extends beyond the w-50 container.</p>
            </div>
            <div className="overflow-auto border rounded-sm p-2 w-50">
              <p className="text-nowrap">overflow-auto shows a scrollbar when this long line of text exceeds the w-50 container.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Directional overflow</h2>
        <p>
          Use <code>overflow-x-auto</code> and <code>overflow-y-auto</code> to
          enable directional scrolling. Similarly,{" "}
          <code>overflow-x-hidden</code>, <code>overflow-x-visible</code>,{" "}
          <code>overflow-x-scroll</code> and their <code>-y-</code>{" "}
          counterparts target a single axis.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="overflow-x-auto border rounded-sm p-2">
  <table>
    <thead>
      <tr>
        <th>Column 1</th><th>Column 2</th><th>Column 3</th>
        <th>Column 4</th><th>Column 5</th><th>Column 6</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data</td><td>Data</td><td>Data</td>
        <td>Data</td><td>Data</td><td>Data</td>
      </tr>
    </tbody>
  </table>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="overflow-x-auto border rounded-sm p-2">
              <table>
                <thead>
                  <tr>
                    <th>Column 1</th><th>Column 2</th><th>Column 3</th>
                    <th>Column 4</th><th>Column 5</th><th>Column 6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data</td><td>Data</td><td>Data</td>
                    <td>Data</td><td>Data</td><td>Data</td>
                  </tr>
                </tbody>
              </table>
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
              <th>Property</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>.overflow-auto</code></td><td><code>overflow: auto</code></td><td>No</td></tr>
            <tr><td><code>.overflow-hidden</code></td><td><code>overflow: hidden</code></td><td>No</td></tr>
            <tr><td><code>.overflow-visible</code></td><td><code>overflow: visible</code></td><td>No</td></tr>
            <tr><td><code>.overflow-scroll</code></td><td><code>overflow: scroll</code></td><td>No</td></tr>
            <tr><td><code>.overflow-x-auto</code></td><td><code>overflow-x: auto</code></td><td>No</td></tr>
            <tr><td><code>.overflow-x-hidden</code></td><td><code>overflow-x: hidden</code></td><td>No</td></tr>
            <tr><td><code>.overflow-x-visible</code></td><td><code>overflow-x: visible</code></td><td>No</td></tr>
            <tr><td><code>.overflow-x-scroll</code></td><td><code>overflow-x: scroll</code></td><td>No</td></tr>
            <tr><td><code>.overflow-y-auto</code></td><td><code>overflow-y: auto</code></td><td>No</td></tr>
            <tr><td><code>.overflow-y-hidden</code></td><td><code>overflow-y: hidden</code></td><td>No</td></tr>
            <tr><td><code>.overflow-y-visible</code></td><td><code>overflow-y: visible</code></td><td>No</td></tr>
            <tr><td><code>.overflow-y-scroll</code></td><td><code>overflow-y: scroll</code></td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
