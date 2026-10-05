import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function VerticalRhythmPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Vertical Rhythm</h1>
        <p className="lead text-subtle">
          Every size, spacing, and line-height token in ln is derived from two
          values: an 8px base grid and a 24px line grid.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>The two grids</h2>
        <p>
          The entire spatial system rests on two Sass variables:
        </p>
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
              <td><code>$g</code></td>
              <td>8px</td>
              <td>
                Base grid step — the smallest unit. All horizontal spacing,
                padding, and component dimensions snap to multiples of this
                value.
              </td>
            </tr>
            <tr>
              <td><code>$r</code></td>
              <td>24px</td>
              <td>
                Line grid step (3 &times; <code>$g</code>) — every line-height,
                vertical margin, and section spacing is a multiple of this
                value, keeping text baselines aligned across columns.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2>Spacing tokens</h2>
        <p>
          The space token scale counts 8px steps. The token name is the
          multiplier, so <code>--space-3</code> equals 3 &times; 8px = 24px
          (one full line).
        </p>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Grid lines</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--space-half</code></td>
              <td>4px (0.25rem)</td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>--space-1</code></td>
              <td>8px (0.5rem)</td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>--space-2</code></td>
              <td>16px (1rem)</td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>--space-3</code></td>
              <td>24px (1.5rem)</td>
              <td>1 line</td>
            </tr>
            <tr>
              <td><code>--space-4</code></td>
              <td>32px (2rem)</td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>--space-5</code></td>
              <td>40px (2.5rem)</td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>--space-6</code></td>
              <td>48px (3rem)</td>
              <td>2 lines</td>
            </tr>
            <tr>
              <td><code>--space-8</code></td>
              <td>64px (4rem)</td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>--space-9</code></td>
              <td>72px (4.5rem)</td>
              <td>3 lines</td>
            </tr>
            <tr>
              <td><code>--space-12</code></td>
              <td>96px (6rem)</td>
              <td>4 lines</td>
            </tr>
            <tr>
              <td><code>--space-18</code></td>
              <td>144px (9rem)</td>
              <td>6 lines</td>
            </tr>
          </tbody>
        </table>
        <p>
          Use <code>--space-half</code> only for inline internals such as badge
          padding or tag gaps — it sits below the base grid.
        </p>
      </section>

      <section className="docs-section">
        <h2>Line heights</h2>
        <p>
          Every type token defines a line-height that is a whole multiple of
          24px, so text stays on the line grid regardless of font size.
        </p>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Size</th>
              <th>Line-height</th>
              <th>Lines</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>display-1</code></td>
              <td>80px</td>
              <td>96px</td>
              <td>4</td>
            </tr>
            <tr>
              <td><code>display-2</code></td>
              <td>56px</td>
              <td>72px</td>
              <td>3</td>
            </tr>
            <tr>
              <td><code>h1</code></td>
              <td>40px</td>
              <td>48px</td>
              <td>2</td>
            </tr>
            <tr>
              <td><code>h2</code></td>
              <td>32px</td>
              <td>48px</td>
              <td>2</td>
            </tr>
            <tr>
              <td><code>h3</code>–<code>h5</code></td>
              <td>20–16px</td>
              <td>24px</td>
              <td>1</td>
            </tr>
            <tr>
              <td><code>body</code>, <code>lead</code></td>
              <td>16–18px</td>
              <td>24px</td>
              <td>1</td>
            </tr>
            <tr>
              <td><code>body-sm</code>, <code>code</code></td>
              <td>14px</td>
              <td>24px</td>
              <td>1</td>
            </tr>
            <tr>
              <td><code>h6</code>, <code>body-xs</code>, <code>meta</code></td>
              <td>12px</td>
              <td>16px</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
        <p>
          The 12px tokens use a 16px line-height that sits off the 24px grid.
          These are reserved for component internals where the surrounding box
          padding restores alignment.
        </p>
      </section>

      <section className="docs-section">
        <h2>Component heights</h2>
        <p>
          Interactive controls snap to the base grid so they align with text
          beside them:
        </p>
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Height</th>
              <th>Grid steps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Small</td>
              <td>32px</td>
              <td>4 &times; 8px</td>
            </tr>
            <tr>
              <td>Default</td>
              <td>40px</td>
              <td>5 &times; 8px</td>
            </tr>
            <tr>
              <td>Large</td>
              <td>48px</td>
              <td>6 &times; 8px (2 lines)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2>Customising the grid</h2>
        <p>
          Override <code>$g</code> and <code>$r</code> to change the grid
          density. The entire token scale recalculates automatically.
        </p>
        <CodeBlock language="scss">{`@use 'ln/scss' with (
  $g: 4px,   // tighter grid
  $r: 16px   // shorter line height
);`}</CodeBlock>
        <p>
          Keep <code>$r</code> as a whole multiple of <code>$g</code> so that
          line-grid multiples remain on the base grid.
        </p>
      </section>

      <section className="docs-section">
        <h2>Further reading</h2>
        <ul>
          <li>
            <a href="https://zellwk.com/blog/why-vertical-rhythms/" target="_blank" rel="noopener noreferrer">Why is Vertical Rhythm an Important Typography Practice?</a>{" "}
            — Zell Liew on the reasoning behind vertical rhythm
          </li>
          <li>
            <a href="https://24ways.org/2006/compose-to-a-vertical-rhythm/" target="_blank" rel="noopener noreferrer">Compose to a Vertical Rhythm</a>{" "}
            — Richard Rutter&rsquo;s foundational article on 24 ways
          </li>
          <li>
            <a href="https://builttoadapt.io/8-point-grid-vertical-rhythm-90d05ad95032" target="_blank" rel="noopener noreferrer">8-Point Grid: Vertical Rhythm</a>{" "}
            — Elliot Dahl on combining the 8px grid with vertical rhythm
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>Grid overlay</h2>
        <p>
          Toggle the baseline grid overlay to verify alignment. Click the grid
          button at the bottom-right corner of any page, or add the{" "}
          <code>show-grid</code> class to <code>&lt;body&gt;</code>.
        </p>
        <CodeBlock language="html">{`<body class="show-grid">…</body>`}</CodeBlock>
        <p>
          The overlay draws horizontal lines at every 24px step and vertical
          lines at every 8px step, using the primary colour at low opacity.
        </p>
      </section>
    </article>
  );
}
