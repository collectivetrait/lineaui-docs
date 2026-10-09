import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Introduction",
  description:
    "Linea UI is a lightweight SCSS and JS component library built on BEM naming, an 8 px vertical rhythm, and cascade layers. Install it via npm, import the compiled CSS, and start building.",
};

export default function GettingStarted() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Introduction</h1>
        <p className="lead text-subtle">
          Linea UI is a lightweight SCSS and JavaScript component library built
          on two core principles:{" "}
          <a href="/getting-started/bem">BEM naming</a> and an{" "}
          <a href="/getting-started/vertical-rhythm">8 px vertical rhythm</a>.
          Styles are organized into CSS cascade layers for predictable
          specificity, and every component ships with accessible defaults and a
          small footprint.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Installation</h2>
        <p>
          Add linea-ui to your project as a dependency. For local development,
          use the <code>file:</code> protocol to link the local package
          directly.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="shell">npm install ln</CodeBlock>
        </div>
      </section>

      <section className="docs-section">
        <h2>CSS</h2>
        <p>
          Import the compiled stylesheet at the root of your application. Four
          CSS files are available, each self-contained:
        </p>
        <table>
          <thead>
            <tr>
              <th>File</th>
              <th>Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>dist/styles.css</code></td>
              <td>
                Everything: tokens, reset, base, layout, blocks, helpers,
                utilities
              </td>
            </tr>
            <tr>
              <td><code>dist/core.css</code></td>
              <td>Foundation only: tokens, reset, base, layout, helpers</td>
            </tr>
            <tr>
              <td><code>dist/blocks.css</code></td>
              <td>Component styles (requires layer order declaration)</td>
            </tr>
            <tr>
              <td><code>dist/utilities.css</code></td>
              <td>Utility classes (requires layer order declaration)</td>
            </tr>
          </tbody>
        </table>
        <p>
          All styles are scoped to cascade layers in this order:
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="css">
            @layer reset, tokens, base, layout, blocks, helpers, utilities;
          </CodeBlock>
        </div>
        <p>Import the full stylesheet in a bundler:</p>
        <div className="component-demo shadow-2">
          <CodeBlock language="javascript">
            {`import 'ln/dist/styles.css';`}
          </CodeBlock>
        </div>
        <p>Or include it directly in HTML:</p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">
            {`<link rel="stylesheet" href="path/to/ln/dist/styles.css">`}
          </CodeBlock>
        </div>
      </section>

      <section className="docs-section">
        <h2>JavaScript</h2>
        <p>
          The JS layer is optional and adds behavior only where markup asks for
          it. You can import the full bundle, which auto-initializes every
          module on <code>DOMContentLoaded</code>:
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="javascript">{`import 'ln';`}</CodeBlock>
        </div>
        <p>Or include it directly in HTML:</p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">
            {`<script type="module" src="path/to/ln/dist/bundle.js"></script>`}
          </CodeBlock>
        </div>

        <h3>Individual modules</h3>
        <p>
          If you only need a few interactive components, import and initialize
          their modules individually instead of loading the full bundle:
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="javascript">
            {`import { initDialog } from 'ln/js/modules/dialog.js';
import { initDropdown } from 'ln/js/modules/dropdown.js';
import { initTabs } from 'ln/js/modules/tabs.js';

initDialog();
initDropdown();
initTabs();`}
          </CodeBlock>
        </div>
        <p>Available modules:</p>
        <table>
          <thead>
            <tr>
              <th>Module</th>
              <th>Components</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>copy</code></td><td>Copy-to-clipboard buttons</td></tr>
            <tr><td><code>dialog</code></td><td>Modal dialogs</td></tr>
            <tr><td><code>dismiss</code></td><td>Dismissible alerts and banners</td></tr>
            <tr><td><code>dropdown</code></td><td>Dropdown menus</td></tr>
            <tr><td><code>gallery</code></td><td>Image galleries and lightboxes</td></tr>
            <tr><td><code>highlight</code></td><td>Syntax highlighting</td></tr>
            <tr><td><code>navigation</code></td><td>Responsive navigation</td></tr>
            <tr><td><code>quantity</code></td><td>Quantity steppers</td></tr>
            <tr><td><code>rhythm</code></td><td>Baseline grid overlay</td></tr>
            <tr><td><code>table</code></td><td>Sortable and selectable tables</td></tr>
            <tr><td><code>tabs</code></td><td>Tabbed panels</td></tr>
            <tr><td><code>toast</code></td><td>Toast notifications</td></tr>
            <tr><td><code>tooltip</code></td><td>Tooltips</td></tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2>Theme initialization</h2>
        <p>
          To prevent a flash of unstyled content on themed pages, add the
          theme-init script to <code>&lt;head&gt;</code> before any stylesheet.
          It reads the stored theme preference from{" "}
          <code>localStorage</code> and applies the{" "}
          <code>data-theme</code> attribute before first paint.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">
            {`<script src="path/to/ln/dist/theme-init.js"></script>`}
          </CodeBlock>
        </div>
      </section>

      <section className="docs-section">
        <h2>Icons</h2>
        <p>
          Linea UI includes its own SVG icon set. Each icon is a 24 × 24 filled
          SVG embedded via CSS masks, so icons inherit{" "}
          <code>currentColor</code> and scale with <code>font-size</code>. See
          the <a href="/foundation/icons">icons page</a> for the full set.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">
            {`<i class="ln-i-chevron-down"></i>
<i class="ln-i-search"></i>
<i class="ln-i-check"></i>`}
          </CodeBlock>
        </div>
        <p>
          Include the icon stylesheet alongside the main stylesheet:
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">
            {`<link rel="stylesheet" href="path/to/ln/dist/icons.css">`}
          </CodeBlock>
        </div>
      </section>

      <section className="docs-section">
        <h2>SCSS source</h2>
        <p>
          For custom builds, import the SCSS source directly. This gives you
          access to all tokens, mixins, and settings at compile time.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="scss">
            {`@use 'ln/scss' as *;`}
          </CodeBlock>
        </div>
        <p>Or import individual layers:</p>
        <div className="component-demo shadow-2">
          <CodeBlock language="scss">
            {`@use 'ln/scss/tokens';
@use 'ln/scss/base';
@use 'ln/scss/blocks';`}
          </CodeBlock>
        </div>
      </section>
    </article>
  );
}
