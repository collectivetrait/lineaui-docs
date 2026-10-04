import { CodeBlock } from "@/components/CodeBlock";

export default function BreakpointsPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Breakpoints</h1>
        <p className="lead text-subtle">
          Five named breakpoints define the responsive grid. All breakpoints
          use <code>min-width</code> media queries for a mobile-first approach.
        </p>
      </section>

      <section className="docs-section">
        <h2>Breakpoint values</h2>
        <p>
          The breakpoint map is defined in{" "}
          <code>settings/_breakpoints.scss</code> and can be overridden at
          import time.
        </p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Pixels</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>sm</code></td>
              <td>36rem</td>
              <td>576px</td>
            </tr>
            <tr>
              <td><code>md</code></td>
              <td>48rem</td>
              <td>768px</td>
            </tr>
            <tr>
              <td><code>lg</code></td>
              <td>64rem</td>
              <td>1024px</td>
            </tr>
            <tr>
              <td><code>xl</code></td>
              <td>80rem</td>
              <td>1280px</td>
            </tr>
            <tr>
              <td><code>2xl</code></td>
              <td>96rem</td>
              <td>1536px</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2>Responsive class convention</h2>
        <p>
          Responsive modifiers use a <code>@&#123;bp&#125;</code> suffix
          appended to the class name. The suffixed class applies from the named
          breakpoint upward (mobile-first). This convention works with both BEM
          block modifiers and utility classes.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<!-- Grid: 1 column by default, 3 columns from md up -->
<div class="ln-grid ln-grid--cols-1 ln-grid--cols-3@md">
  <div class="border p-2 text-center">One</div>
  <div class="border p-2 text-center">Two</div>
  <div class="border p-2 text-center">Three</div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-grid ln-grid--cols-1 ln-grid--cols-3@md">
              <div className="border p-2 text-center">One</div>
              <div className="border p-2 text-center">Two</div>
              <div className="border p-2 text-center">Three</div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive utilities</h2>
        <p>
          Utility classes that have <code>responsive: true</code> in the
          utility map also accept the <code>@&#123;bp&#125;</code> suffix.
          Common responsive utilities include display, text alignment, margin,
          padding, flex direction, and width.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<!-- Hidden by default, visible as block from md up -->
<div class="d-none d-block@md border p-2 mb-3">Visible from md up</div>

<!-- Left-aligned by default, centred from lg up -->
<p class="text-start text-center@lg border p-2">Centred from lg up</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-none d-block@md border p-2 mb-3">Visible from md up</div>
            <p className="text-start text-center@lg border p-2">Centred from lg up</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Overriding breakpoints</h2>
        <p>
          Override the default map when importing the library. Custom
          breakpoint names become available as suffixes throughout the system.
        </p>
        <CodeBlock language="scss">{`@use 'ln/scss' with (
  $breakpoints: (
    sm:  30rem,
    md:  48rem,
    lg:  62rem,
    xl:  80rem,
    '2xl': 100rem,
  )
);`}</CodeBlock>
      </section>

      <section className="docs-section">
        <h2>Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Breakpoint</th>
              <th>Value</th>
              <th>Suffix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>sm</code></td>
              <td>36rem (576px)</td>
              <td><code>@sm</code></td>
            </tr>
            <tr>
              <td><code>md</code></td>
              <td>48rem (768px)</td>
              <td><code>@md</code></td>
            </tr>
            <tr>
              <td><code>lg</code></td>
              <td>64rem (1024px)</td>
              <td><code>@lg</code></td>
            </tr>
            <tr>
              <td><code>xl</code></td>
              <td>80rem (1280px)</td>
              <td><code>@xl</code></td>
            </tr>
            <tr>
              <td><code>2xl</code></td>
              <td>96rem (1536px)</td>
              <td><code>@2xl</code></td>
            </tr>
          </tbody>
        </table>
        <p>
          Responsive suffixes are available on BEM block modifiers (grid, cluster)
          and utility classes with <code>responsive: true</code> (display,
          spacing, text-align, flex, width, float, font, and text-size utilities).
        </p>
      </section>
    </article>
  );
}
