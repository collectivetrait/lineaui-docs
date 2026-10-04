import { CodeBlock } from "@/components/CodeBlock";

export default function GridPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Grid</h1>
        <p className="lead text-subtle">
          A CSS Grid wrapper with a default gap of <code>--space-3</code>{" "}
          (24px). Set column counts with <code>--cols-&#123;n&#125;</code>{" "}
          modifiers, or use <code>--auto</code> for a responsive auto-fit
          layout.
        </p>
      </section>

      <section className="docs-section">
        <h2>Fixed columns</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-grid ln-grid--cols-3">
  <div class="border p-2 text-center">One</div>
  <div class="border p-2 text-center">Two</div>
  <div class="border p-2 text-center">Three</div>
  <div class="border p-2 text-center">Four</div>
  <div class="border p-2 text-center">Five</div>
  <div class="border p-2 text-center">Six</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-grid ln-grid--cols-3">
              <div className="border p-2 text-center">One</div>
              <div className="border p-2 text-center">Two</div>
              <div className="border p-2 text-center">Three</div>
              <div className="border p-2 text-center">Four</div>
              <div className="border p-2 text-center">Five</div>
              <div className="border p-2 text-center">Six</div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Auto-fit columns</h2>
        <p>
          The <code>--auto</code> modifier uses{" "}
          <code>repeat(auto-fit, minmax(…, 1fr))</code> to fill columns from a
          minimum track size.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-grid ln-grid--auto">
  <div class="border p-2 text-center">One</div>
  <div class="border p-2 text-center">Two</div>
  <div class="border p-2 text-center">Three</div>
  <div class="border p-2 text-center">Four</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-grid ln-grid--auto">
              <div className="border p-2 text-center">One</div>
              <div className="border p-2 text-center">Two</div>
              <div className="border p-2 text-center">Three</div>
              <div className="border p-2 text-center">Four</div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Grid items</h2>
        <p>
          Child items can span multiple columns or start at a specific column
          with the <code>ln-grid__item</code> element and its modifiers.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-grid ln-grid--cols-4">
  <div class="ln-grid__item ln-grid__item--span-2 border p-2 text-center">span-2</div>
  <div class="border p-2 text-center">3</div>
  <div class="border p-2 text-center">4</div>
  <div class="ln-grid__item ln-grid__item--span-full border p-2 text-center">span-full</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-grid ln-grid--cols-4">
              <div className="ln-grid__item ln-grid__item--span-2 border p-2 text-center">span-2</div>
              <div className="border p-2 text-center">3</div>
              <div className="border p-2 text-center">4</div>
              <div className="ln-grid__item ln-grid__item--span-full border p-2 text-center">span-full</div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive columns</h2>
        <p>
          Column modifiers accept a <code>@&#123;breakpoint&#125;</code> suffix
          to change the column count at different viewport widths. Combine a
          base column count with a responsive override for mobile-first layouts.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<!-- 1 column on mobile, 3 columns from md up -->
<div class="ln-grid ln-grid--cols-1 ln-grid--cols-3@md">
  <div class="border p-2 text-center">One</div>
  <div class="border p-2 text-center">Two</div>
  <div class="border p-2 text-center">Three</div>
  <div class="border p-2 text-center">Four</div>
  <div class="border p-2 text-center">Five</div>
  <div class="border p-2 text-center">Six</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-grid ln-grid--cols-1 ln-grid--cols-3@md">
              <div className="border p-2 text-center">One</div>
              <div className="border p-2 text-center">Two</div>
              <div className="border p-2 text-center">Three</div>
              <div className="border p-2 text-center">Four</div>
              <div className="border p-2 text-center">Five</div>
              <div className="border p-2 text-center">Six</div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive item positioning</h2>
        <p>
          Grid item start positions also support responsive suffixes.
          Reposition items at different breakpoints with{" "}
          <code>--start-&#123;n&#125;@&#123;bp&#125;</code>.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<!-- Item starts at column 1 by default, column 3 from md up -->
<div class="ln-grid ln-grid--cols-4">
  <div class="ln-grid__item ln-grid__item--span-2 ln-grid__item--start-3@md border p-2 text-center">
    Repositioned at md
  </div>
  <div class="border p-2 text-center">B</div>
  <div class="border p-2 text-center">C</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-grid ln-grid--cols-4">
              <div className="ln-grid__item ln-grid__item--span-2 ln-grid__item--start-3@md border p-2 text-center">
                Repositioned at md
              </div>
              <div className="border p-2 text-center">B</div>
              <div className="border p-2 text-center">C</div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Gap modifiers</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<!-- Compact gap -->
<div class="ln-grid ln-grid--cols-3 ln-grid--gap-xs mb-3">
  <div class="border p-2 text-center">A</div>
  <div class="border p-2 text-center">B</div>
  <div class="border p-2 text-center">C</div>
</div>

<!-- Large gap -->
<div class="ln-grid ln-grid--cols-3 ln-grid--gap-lg">
  <div class="border p-2 text-center">A</div>
  <div class="border p-2 text-center">B</div>
  <div class="border p-2 text-center">C</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-grid ln-grid--cols-3 ln-grid--gap-xs mb-3">
              <div className="border p-2 text-center">A</div>
              <div className="border p-2 text-center">B</div>
              <div className="border p-2 text-center">C</div>
            </div>
            <div className="ln-grid ln-grid--cols-3 ln-grid--gap-lg">
              <div className="border p-2 text-center">A</div>
              <div className="border p-2 text-center">B</div>
              <div className="border p-2 text-center">C</div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
