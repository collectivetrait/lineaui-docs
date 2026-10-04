import { TypeScaleTable } from "@/components/TypeScaleTable";
import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function TypographyPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Typography</h1>
        <p className="lead text-subtle">
          The ln type system is built on a 24px vertical rhythm grid. Every
          font size, line height, and spacing value is a whole multiple of 8px,
          and heading line heights are whole multiples of 24px.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Available classes</h2>
        <p>
          These classes let you apply typographic styles to any element,
          regardless of its tag.
        </p>

        <h3>Lead text</h3>
        <p>
          Use <code>.lead</code> on introductory paragraphs that need more
          visual weight than body text. It sets the prose font at lead size.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<p class="lead">Introductory sentence in prose font, slightly larger than body.</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="lead">
              Introductory sentence in prose font, slightly larger than body.
            </p>
          </div>
        </div>

        <h3>Paragraphs</h3>
        <p>
          Body paragraphs use the UI font at 1rem / 1.5rem (16px / 24px). The
          base layer adds a bottom margin of one line (24px) so paragraphs stack
          with consistent rhythm.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<p class="mb-3">The ln type system is built on a 24px vertical rhythm grid. Every font size, line height, and spacing value is a whole multiple of 8px.</p>
<p class="mb-3">Paragraphs receive their styles from the base layer automatically. No utility classes are needed for standard prose content.</p>
<p>The bottom margin on the last paragraph is removed to prevent unwanted trailing space inside containers.</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="mb-3">The ln type system is built on a 24px vertical rhythm grid. Every font size, line height, and spacing value is a whole multiple of 8px.</p>
            <p className="mb-3">Paragraphs receive their styles from the base layer automatically. No utility classes are needed for standard prose content.</p>
            <p>The bottom margin on the last paragraph is removed to prevent unwanted trailing space inside containers.</p>
          </div>
        </div>

        <h3>Headings</h3>
        <p>
          Heading elements <code>h1</code>–<code>h6</code> receive size, line
          height, and font-family styles from the base layer. No classes needed.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<h1 class="mb-3">Heading level one</h1>
<h2 class="mb-3">Heading level two</h2>
<h3 class="mb-3">Heading level three</h3>
<h4 class="mb-3">Heading level four</h4>
<h5 class="mb-3">Heading level five</h5>
<h6>Heading level six</h6>`}</CodeBlock>
          <div className="component-demo__preview">
            <h1 className="mb-3">Heading level one</h1>
            <h2 className="mb-3">Heading level two</h2>
            <h3 className="mb-3">Heading level three</h3>
            <h4 className="mb-3">Heading level four</h4>
            <h5 className="mb-3">Heading level five</h5>
            <h6>Heading level six</h6>
          </div>
        </div>

        <h3>Heading style classes</h3>
        <p>
          Apply heading visual styles to any element. Unlike the heading
          elements themselves, these classes carry no margin — useful when you
          need the appearance of a heading on a{" "}
          <code>div</code>, <code>span</code>, or any other tag. Use{" "}
          <code>.h1</code> through <code>.h6</code>.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="h1 mb-3">Heading one style on a div</div>
<div class="h2 mb-3">Heading two style on a div</div>
<div class="h3 mb-3">Heading three style on a div</div>
<div class="h4 mb-3">Heading four style on a div</div>
<div class="h5 mb-3">Heading five style on a div</div>
<div class="h6">Heading six style on a div</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="h1 mb-3">Heading one style on a div</div>
            <div className="h2 mb-3">Heading two style on a div</div>
            <div className="h3 mb-3">Heading three style on a div</div>
            <div className="h4 mb-3">Heading four style on a div</div>
            <div className="h5 mb-3">Heading five style on a div</div>
            <div className="h6">Heading six style on a div</div>
          </div>
        </div>

        <h3>Display sizes</h3>
        <p>
          Large display sizes for hero headings and marketing copy. Both use
          the prose font. Use <code>.text-display-1</code> and{" "}
          <code>.text-display-2</code>.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<h1 class="text-display-1 mb-3">Hero heading</h1>
<h2 class="text-display-2">Section hero</h2>`}</CodeBlock>
          <div className="component-demo__preview">
            <h1 className="text-display-1 mb-3">Hero heading</h1>
            <h2 className="text-display-2">Section hero</h2>
          </div>
        </div>

        <h3>Responsive</h3>
        <p>
          Heading style classes and display sizes support responsive breakpoint
          suffixes: <code>@sm</code>, <code>@md</code>, <code>@lg</code>,{" "}
          <code>@xl</code>, <code>@2xl</code>.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="h4 h2@md mb-3">h4 on mobile, h2 from md up</div>
<div class="text-display-2 text-display-1@lg">Display 2 on mobile, display 1 from lg up</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="h4 h2@md mb-3">h4 on mobile, h2 from md up</div>
            <div className="text-display-2 text-display-1@lg">Display 2 on mobile, display 1 from lg up</div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Base element defaults</h2>
        <p>
          Heading elements <code>h1</code>–<code>h6</code>, paragraphs,
          blockquotes, lists, and other block elements receive base styles
          automatically from <code>@layer base</code>. No class names needed
          for standard prose content.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<article>
  <h1>Title</h1>
  <p class="lead">Lead paragraph.</p>
  <p>Body copy — no extra classes needed.</p>
  <h2>Section</h2>
  <blockquote><p>A quote.</p></blockquote>
  <ul><li>List item</li></ul>
  <pre><code>code block</code></pre>
</article>`}</CodeBlock>
          <div className="component-demo__preview">
        <article className="docs-prose-specimen">
          <h1>Typographic defaults</h1>
          <p className="lead">
            Every element below is unstyled HTML — no utility classes, no
            overrides. The base layer handles spacing, scale, and rhythm
            automatically.
          </p>
          <p>
            The ln type system is built on two grids: an 8px base grid for
            spacing and an 24px line grid for vertical rhythm. Font sizes,
            line heights, and margins are all whole multiples of these values,
            so elements snap to the grid without manual adjustment.
          </p>

          <h2>Rhythm and spacing</h2>
          <p>
            Headings carry top and bottom margins derived from the line grid.
            Paragraphs have a bottom margin of one line (24px). The result is
            a consistent vertical cadence across the page regardless of which
            elements appear in sequence.
          </p>
          <blockquote>
            <p>
              The reader should be able to move through the text without being
              aware of the typography. — Robert Bringhurst
            </p>
          </blockquote>

          <h3>Inline elements</h3>
          <p>
            Inline styles are set once in the base layer and apply everywhere.{" "}
            <strong>Bold</strong> and <em>italic</em> text, <code>inline code</code>,{" "}
            <a href="#">hyperlinks</a>, <abbr title="abbreviation">abbr</abbr>,{" "}
            <mark>highlighted text</mark>, <del>deleted</del>, and{" "}
            <ins>inserted</ins> content all receive appropriate styles without
            any class names.
          </p>

          <h4>Lists</h4>
          <ul>
            <li>Unordered lists use the primary colour for list markers</li>
            <li>Line height matches the body grid step — 24px</li>
            <li>Indent is set to <code>--space-4</code> (2rem)</li>
          </ul>
          <ol>
            <li>Ordered lists use tabular numerals</li>
            <li>Same spacing and indent as unordered</li>
            <li>No extra classes required</li>
          </ol>

          <h5>Reference table</h5>
          <table>
            <thead>
              <tr>
                <th>Token</th>
                <th>Value</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>--type-body-size</code></td>
                <td>1rem</td>
                <td>Body copy</td>
              </tr>
              <tr>
                <td><code>--type-lead-size</code></td>
                <td>1.125rem</td>
                <td>Lead paragraph</td>
              </tr>
              <tr>
                <td><code>--type-h1-size</code></td>
                <td>2.5rem</td>
                <td>Page title</td>
              </tr>
            </tbody>
          </table>

          <h6>Code blocks</h6>
          <p>
            Preformatted code inherits the mono font stack, gets a sunken
            surface background, and scrolls horizontally on overflow.
          </p>
          <pre>
            <code>{`@use 'ln/scss' with (
  $prefix: 'my-',
  $g: 4px
);`}</code>
          </pre>
        </article>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Type scale tokens</h2>
        <p>
          All type sizes are exposed as CSS custom properties on{" "}
          <code>:root</code>. Reference them in your own stylesheets to stay
          on-grid without importing the full library.
        </p>
        <CodeBlock language="css">{`/* reference any scale token in your own CSS */
.my-heading {
  font-size: var(--type-h2-size);
  line-height: var(--type-h2-lh);
}`}</CodeBlock>
        <TypeScaleTable />
        <p>
          On smaller viewports (below <code>md</code>), <code>h1</code> scales
          down to 2.25rem / 3rem to preserve rhythm on narrow screens.
        </p>
      </section>

      <section className="docs-section">
        <h2>Font role tokens</h2>
        <p>
          Three font-family tokens map to semantic roles. Override them at{" "}
          <code>:root</code> to swap the entire type stack, or on a scoped
          element to change a single section.
        </p>
        <CodeBlock language="css">{`/* override globally */
:root {
  --font-prose: 'Georgia', serif;
  --font-ui: 'Inter', sans-serif;
  --font-mono: 'Fira Code', monospace;
}

/* or scope to a single section */
.my-section {
  --font-prose: var(--font-ui);
}`}</CodeBlock>
        <dl>
          <dt>
            <code>--font-prose</code>
          </dt>
          <dd>
            <span className="docs-font-sample" data-font="prose">
              Charter, Bitstream Charter, Sitka Text, Cambria, serif — used for
              headings h1–h3, blockquotes, and lead text.
            </span>
          </dd>
          <dt>
            <code>--font-ui</code>
          </dt>
          <dd>
            <span className="docs-font-sample" data-font="ui">
              Inter, Roboto, Helvetica Neue, Arial Nova, sans-serif — used for
              body text, labels, and UI elements.
            </span>
          </dd>
          <dt>
            <code>--font-mono</code>
          </dt>
          <dd>
            <span className="docs-font-sample" data-font="mono">
              ui-monospace, Cascadia Code, Source Code Pro, Menlo, Consolas —
              used for code, kbd, and h6.
            </span>
          </dd>
        </dl>
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
              <td><code>.lead</code></td>
              <td>Lead paragraph (prose font, larger size)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.h1</code>–<code>.h6</code></td>
              <td>Heading visual styles without margin</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.text-display-1</code></td>
              <td>Display size 1 (hero headings)</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.text-display-2</code></td>
              <td>Display size 2 (section heroes)</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
