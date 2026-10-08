import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Input Group",
  description: "Combine inputs with prepended or appended text, icons, or buttons in a single visual unit.",
};

export default function InputGroupPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Input Group</h1>
        <p className="lead text-subtle">
          Joins addons, buttons, or icons with an input into a single
          visually-connected control. Border radii are fused automatically.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Addon + control</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-input-group">
  <span class="ln-input-group__addon">https://</span>
  <input class="ln-input-group__control" type="text" placeholder="example.com">
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--narrow">
            <div className="ln-input-group">
              <span className="ln-input-group__addon">https://</span>
              <input className="ln-input-group__control" type="text" placeholder="example.com" />
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Button + control</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-input-group">
  <input class="ln-input-group__control" type="text" placeholder="Search...">
  <button class="ln-input-group__button ln-button ln-button--solid">Search</button>
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--narrow">
            <div className="ln-input-group">
              <input className="ln-input-group__control" type="text" placeholder="Search..." />
              <button className="ln-input-group__button ln-button ln-button--solid">Search</button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Addon on both sides</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-input-group">
  <span class="ln-input-group__addon">$</span>
  <input class="ln-input-group__control" type="text" placeholder="0.00">
  <span class="ln-input-group__addon">USD</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--narrow">
            <div className="ln-input-group">
              <span className="ln-input-group__addon">$</span>
              <input className="ln-input-group__control" type="text" placeholder="0.00" />
              <span className="ln-input-group__addon">USD</span>
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
              <td><code>.ln-input-group</code></td>
              <td>Input group container</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-input-group__addon</code></td>
              <td>Text addon (prefix or suffix)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-input-group__control</code></td>
              <td>Input element</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-input-group__button</code></td>
              <td>Button inside the group</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-input-group__icon</code></td>
              <td>Icon overlay inside the group</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-input-group--sm</code></td>
              <td>Small size (2rem height)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-input-group--lg</code></td>
              <td>Large size (3rem height)</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
