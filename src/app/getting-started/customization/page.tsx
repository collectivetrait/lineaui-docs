import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function CustomizationPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Customization</h1>
        <p className="lead text-subtle">
          Override settings at import time to tailor the library to your project.
          Use the Sass source directly via <code>@use</code> with a
          configuration map.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Using Sass source</h2>
        <p>
          Instead of importing the compiled CSS, import the Sass entry point.
          Pass any settings you want to override with the{" "}
          <code>with</code> keyword.
        </p>
        <CodeBlock language="scss">{`@use 'ln/scss' with (
  $prefix: 'my-',
  $font-ui: 'Geist', system-ui, sans-serif,
  $breakpoints: (
    sm: 30rem,
    md: 48rem,
    lg: 64rem,
    xl: 80rem,
    '2xl': 100rem,
  )
);`}</CodeBlock>
      </section>

      <section className="docs-section">
        <h2>Class prefix</h2>
        <p>
          The <code>$prefix</code> variable controls the namespace for BEM block
          classes. The default is <code>ln-</code>. Changing it renames every
          block class — for example, <code>.ln-button</code> becomes{" "}
          <code>.my-button</code>.
        </p>
        <CodeBlock language="scss">{`@use 'ln/scss' with (
  $prefix: 'my-'
);

// .my-button, .my-card, .my-grid, etc.`}</CodeBlock>
      </section>

      <section className="docs-section">
        <h2>Font stacks</h2>
        <p>
          Three font-role variables control the entire type system. Override one
          or all to use your own typefaces.
        </p>
        <CodeBlock language="scss">{`@use 'ln/scss' with (
  $font-prose: 'Lora', Georgia, serif,
  $font-ui: 'Inter', system-ui, sans-serif,
  $font-mono: 'JetBrains Mono', monospace
);`}</CodeBlock>
        <table>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Default</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>$font-prose</code></td>
              <td>Charter, Bitstream Charter, Sitka Text, Cambria, serif</td>
              <td>Headings, editorial text</td>
            </tr>
            <tr>
              <td><code>$font-ui</code></td>
              <td>Inter, Roboto, Helvetica Neue, Arial Nova, Nimbus Sans, Arial, sans-serif</td>
              <td>Body copy, interface text</td>
            </tr>
            <tr>
              <td><code>$font-mono</code></td>
              <td>ui-monospace, Cascadia Code, Source Code Pro, Menlo, Consolas, DejaVu Sans Mono, monospace</td>
              <td>Code, tabular data</td>
            </tr>
            <tr>
              <td><code>$heading-font</code></td>
              <td><code>$font-prose</code></td>
              <td>Heading elements (h1–h6)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2>Vertical rhythm</h2>
        <p>
          Two variables define the spatial grid. All spacing tokens and
          components derive from these values.
        </p>
        <CodeBlock language="scss">{`@use 'ln/scss' with (
  $g: 4px,   // base grid step (default 8px)
  $r: 16px   // line grid step (default 24px)
);`}</CodeBlock>
        <table>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Default</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>$g</code></td>
              <td>8px</td>
              <td>Base grid step — the smallest spatial unit</td>
            </tr>
            <tr>
              <td><code>$r</code></td>
              <td>24px</td>
              <td>Line grid step — baseline for line-height and vertical spacing</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2>Breakpoints</h2>
        <p>
          Override the breakpoint map to change where responsive modifiers
          activate. Custom breakpoint names become available as{" "}
          <code>@&#123;bp&#125;</code> suffixes throughout the system.
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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Default</th>
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
        <h2>Layout</h2>
        <p>
          Adjust container widths, the prose measure, and the page gutter.
        </p>
        <CodeBlock language="scss">{`@use 'ln/scss' with (
  $container: 60rem,       // default 56.25rem (900px)
  $container-wide: 80rem,  // default 75rem (1200px)
  $measure: 40rem,         // default 37.5rem (~70ch)
  $gutter: 1.5rem,         // default 1rem (mobile)
  $gutter-lg: 3rem         // default 2rem (md+)
);`}</CodeBlock>
        <table>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Default</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>$container</code></td>
              <td>56.25rem (900px)</td>
              <td>Default container max-width</td>
            </tr>
            <tr>
              <td><code>$container-wide</code></td>
              <td>75rem (1200px)</td>
              <td>Wide container max-width</td>
            </tr>
            <tr>
              <td><code>$measure</code></td>
              <td>37.5rem (~70ch)</td>
              <td>Max-width for prose content</td>
            </tr>
            <tr>
              <td><code>$gutter</code></td>
              <td>1rem</td>
              <td>Page side gutter on mobile</td>
            </tr>
            <tr>
              <td><code>$gutter-lg</code></td>
              <td>2rem</td>
              <td>Page side gutter on md and above</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2>Selecting blocks</h2>
        <p>
          By default every block is included in the output. To reduce file size,
          pass a list of only the blocks you need.
        </p>
        <CodeBlock language="scss">{`@use 'ln/scss' with (
  $blocks: (button, card, table, alert)
);`}</CodeBlock>
        <p>
          An empty list (the default) emits all blocks. Any block not in the
          list is excluded from the compiled CSS.
        </p>
      </section>

      <section className="docs-section">
        <h2>Dark mode</h2>
        <p>
          Colour tokens use <code>light-dark()</code>, so they automatically
          follow the OS preference. To force a theme, set{" "}
          <code>data-theme</code> on any ancestor element.
        </p>
        <CodeBlock language="html">{`<!-- Force dark on the whole page -->
<html data-theme="dark">…</html>

<!-- Light island inside a dark page -->
<section data-theme="light">…</section>`}</CodeBlock>
      </section>

      <section className="docs-section">
        <h2>Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>$prefix</code></td>
              <td><code>ln-</code></td>
              <td>BEM block class namespace</td>
            </tr>
            <tr>
              <td><code>$font-prose</code></td>
              <td>Charter, Bitstream Charter, Sitka Text, Cambria, serif</td>
              <td>Serif font stack for headings and editorial text</td>
            </tr>
            <tr>
              <td><code>$font-ui</code></td>
              <td>Inter, Roboto, Helvetica Neue, Arial Nova, Nimbus Sans, Arial, sans-serif</td>
              <td>Sans-serif font stack for body and interface text</td>
            </tr>
            <tr>
              <td><code>$font-mono</code></td>
              <td>ui-monospace, Cascadia Code, Source Code Pro, Menlo, Consolas, DejaVu Sans Mono, monospace</td>
              <td>Monospace font stack for code</td>
            </tr>
            <tr>
              <td><code>$heading-font</code></td>
              <td><code>$font-prose</code></td>
              <td>Font stack for heading elements</td>
            </tr>
            <tr>
              <td><code>$g</code></td>
              <td>8px</td>
              <td>Base grid step</td>
            </tr>
            <tr>
              <td><code>$r</code></td>
              <td>24px</td>
              <td>Line grid step</td>
            </tr>
            <tr>
              <td><code>$breakpoints</code></td>
              <td>sm–2xl</td>
              <td>Responsive breakpoint map</td>
            </tr>
            <tr>
              <td><code>$container</code></td>
              <td>56.25rem (900px)</td>
              <td>Default container max-width</td>
            </tr>
            <tr>
              <td><code>$container-wide</code></td>
              <td>75rem (1200px)</td>
              <td>Wide container max-width</td>
            </tr>
            <tr>
              <td><code>$measure</code></td>
              <td>37.5rem (~70ch)</td>
              <td>Max-width for prose content</td>
            </tr>
            <tr>
              <td><code>$gutter</code></td>
              <td>1rem</td>
              <td>Page side gutter on mobile</td>
            </tr>
            <tr>
              <td><code>$gutter-lg</code></td>
              <td>2rem</td>
              <td>Page side gutter on md and above</td>
            </tr>
            <tr>
              <td><code>$blocks</code></td>
              <td><code>()</code></td>
              <td>List of blocks to include (empty = all)</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
