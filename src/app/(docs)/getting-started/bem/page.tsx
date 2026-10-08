import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "BEM",
  description: "Every component in linea-ui follows the Block Element Modifier convention. Learn how BEM naming keeps styles predictable and composable.",
};

export default function BemPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">BEM</h1>
        <p className="lead text-subtle">
          Every component in ln follows the Block Element Modifier convention,
          namespaced with a configurable prefix.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>What is BEM</h2>
        <p>
          BEM stands for <strong>Block</strong>, <strong>Element</strong>,{" "}
          <strong>Modifier</strong>. It is a naming convention for CSS classes
          that makes the relationship between HTML and CSS explicit and
          predictable.
        </p>
        <ul>
          <li>
            <strong>Block</strong> — a standalone component:{" "}
            <code>.ln-button</code>
          </li>
          <li>
            <strong>Element</strong> — a part of a block that has no meaning on
            its own: <code>.ln-button__icon</code>
          </li>
          <li>
            <strong>Modifier</strong> — a variant or state of a block or
            element: <code>.ln-button--solid</code>
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>Naming pattern</h2>
        <p>
          All block classes are prefixed with <code>$prefix</code> (default{" "}
          <code>ln-</code>). Elements use double underscores and modifiers use
          double dashes.
        </p>
        <div className="component-demo shadow-2">
        <CodeBlock language="text">{`.{prefix}{block}
.{prefix}{block}__{element}
.{prefix}{block}--{modifier}
.{prefix}{block}__{element}--{modifier}`}</CodeBlock>
        </div>
        <p>In practice:</p>
        <div className="component-demo shadow-2">
        <CodeBlock language="html">{`<button class="ln-button ln-button--solid ln-button--lg">
  <span class="ln-button__icon">…</span>
  <span class="ln-button__label">Save</span>
</button>`}</CodeBlock>
        </div>
      </section>

      <section className="docs-section">
        <h2>The prefix</h2>
        <p>
          The <code>ln-</code> prefix namespaces every block class to avoid
          collisions with other CSS. Override it via the Sass source:
        </p>
        <div className="component-demo shadow-2">
        <CodeBlock language="scss">{`@use 'ln/scss' with (
  $prefix: 'my-'
);

// .my-button, .my-card, .my-alert, etc.`}</CodeBlock>
        </div>
        <p>
          Utility classes (<code>.d-flex</code>, <code>.m-3</code>, etc.) and
          helper classes (<code>.h1</code>, <code>.text-display-1</code>, etc.)
          are not prefixed — they follow their own short-name conventions.
        </p>
      </section>

      <section className="docs-section">
        <h2>Sass mixins</h2>
        <p>
          The library uses three Sass mixins from{" "}
          <code>tools/_bem.scss</code> to generate the class names. Every block
          file follows the same pattern:
        </p>
        <div className="component-demo shadow-2">
        <CodeBlock language="scss">{`@use '../tools/bem' as b;

@include b.block('card') {
  // .ln-card { … }

  @include b.element('body') {
    // .ln-card__body { … }
  }

  @include b.modifier('horizontal') {
    // .ln-card--horizontal { … }
  }
}`}</CodeBlock>
        </div>
        <p>
          The <code>block</code> mixin emits{" "}
          <code>.#&#123;$prefix&#125;#&#123;$name&#125;</code>, so changing the
          prefix renames every class at compile time.
        </p>
      </section>

      <section className="docs-section">
        <h2>Cascade layers</h2>
        <p>
          All block styles are emitted inside the <code>blocks</code> cascade
          layer. The full layer order is:
        </p>
        <div className="component-demo shadow-2">
        <CodeBlock language="css">{`@layer reset, tokens, base, layout, blocks, helpers, utilities;`}</CodeBlock>
        </div>
        <p>
          This means utilities and helpers always override block defaults
          without needing specificity tricks. A <code>.d-flex</code> utility on
          a block element wins by layer order, not by selector weight.
        </p>
      </section>

      <section className="docs-section">
        <h2>Guidelines</h2>
        <ul>
          <li>
            Never style a block class from outside its own file — reach for a
            modifier or utility instead.
          </li>
          <li>
            Elements belong to the block, not to other elements. Avoid nesting
            elements: <code>.ln-card__body__title</code> is wrong — use{" "}
            <code>.ln-card__title</code>.
          </li>
          <li>
            Modifiers are additive. The base block class is always present:{" "}
            <code>class=&quot;ln-button ln-button--solid&quot;</code>, never
            just <code>class=&quot;ln-button--solid&quot;</code>.
          </li>
          <li>
            Responsive modifiers use an <code>@&#123;bp&#125;</code> suffix:{" "}
            <code>.ln-button--lg@md</code> applies the large size from the md
            breakpoint up.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>Further reading</h2>
        <ul>
          <li>
            <a href="https://getbem.com" target="_blank" rel="noopener noreferrer">getbem.com</a>{" "}
            — the official BEM methodology site
          </li>
          <li>
            <a href="https://en.bem.info/methodology/" target="_blank" rel="noopener noreferrer">en.bem.info/methodology</a>{" "}
            — in-depth documentation from Yandex, the creators of BEM
          </li>
          <li>
            <a href="https://css-tricks.com/bem-101/" target="_blank" rel="noopener noreferrer">BEM 101</a>{" "}
            — a practical introduction on CSS-Tricks
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2>Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Pattern</th>
              <th>Example</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>.prefix-block</code></td>
              <td><code>.ln-button</code></td>
              <td>Block root class</td>
            </tr>
            <tr>
              <td><code>.prefix-block__element</code></td>
              <td><code>.ln-button__icon</code></td>
              <td>Child element of a block</td>
            </tr>
            <tr>
              <td><code>.prefix-block--modifier</code></td>
              <td><code>.ln-button--solid</code></td>
              <td>Variant or state</td>
            </tr>
            <tr>
              <td><code>.prefix-block--modifier@bp</code></td>
              <td><code>.ln-button--lg@md</code></td>
              <td>Responsive modifier</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
