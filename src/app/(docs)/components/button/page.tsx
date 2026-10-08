import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Button",
  description: "An inline-flex control with solid, outline, ghost, and link variants. Three sizes and six role colors for every use case.",
};

export default function ButtonPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Button</h1>
        <p className="lead text-subtle">
          An inline-flex control at 40px default height. Four variants control
          the visual weight, three sizes cover compact to spacious layouts, and
          six role colors communicate intent. Works on{" "}
          <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>, and{" "}
          <code>&lt;input type=&quot;submit&quot;&gt;</code>.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Variants</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--solid">Solid</button>
<button class="ln-button ln-button--outline">Outline</button>
<button class="ln-button ln-button--ghost">Ghost</button>
<button class="ln-button ln-button--link">Link</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <button className="ln-button ln-button--solid">Solid</button>
              <button className="ln-button ln-button--outline">Outline</button>
              <button className="ln-button ln-button--ghost">Ghost</button>
              <button className="ln-button ln-button--link">Link</button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Sizes</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--solid ln-button--sm">Small</button>
<button class="ln-button ln-button--solid">Default</button>
<button class="ln-button ln-button--solid ln-button--lg">Large</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-2">
              <button className="ln-button ln-button--solid ln-button--sm">Small</button>
              <button className="ln-button ln-button--solid">Default</button>
              <button className="ln-button ln-button--solid ln-button--lg">Large</button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive sizes</h2>
        <p>
          Size modifiers accept a <code>@&#123;breakpoint&#125;</code> suffix to
          change the button size at different viewport widths. Combine a base
          size with a responsive override for adaptive layouts.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Small on mobile, large from md up -->
<button class="ln-button ln-button--solid ln-button--sm ln-button--lg@md">Responsive</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <button className="ln-button ln-button--solid ln-button--sm ln-button--lg@md">Responsive</button>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Responsive full width</h2>
        <p>
          The <code>--block@&#123;bp&#125;</code> modifier makes the button
          full-width from the specified breakpoint upward.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Full width from md up, inline below -->
<button class="ln-button ln-button--solid ln-button--block@md">Full width at md</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <button className="ln-button ln-button--solid ln-button--block@md">Full width at md</button>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Role colors</h2>
        <p>
          Six semantic roles set the fill, text, and border colors through the
          role engine. Shown here on the solid variant where the filled
          background makes each color most visible.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--solid ln-button--primary">Primary</button>
<button class="ln-button ln-button--solid ln-button--secondary">Secondary</button>
<button class="ln-button ln-button--solid ln-button--success">Success</button>
<button class="ln-button ln-button--solid ln-button--warning">Warning</button>
<button class="ln-button ln-button--solid ln-button--danger">Danger</button>
<button class="ln-button ln-button--solid ln-button--info">Info</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex flex-wrap gap-2">
              <button className="ln-button ln-button--solid ln-button--primary">Primary</button>
              <button className="ln-button ln-button--solid ln-button--secondary">Secondary</button>
              <button className="ln-button ln-button--solid ln-button--success">Success</button>
              <button className="ln-button ln-button--solid ln-button--warning">Warning</button>
              <button className="ln-button ln-button--solid ln-button--danger">Danger</button>
              <button className="ln-button ln-button--solid ln-button--info">Info</button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Outline with role colors</h2>
        <p>
          Outline buttons respond to the same role modifiers with colored text
          and a tinted hover background. Ghost and link variants also support
          roles.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--outline ln-button--primary">Primary</button>
<button class="ln-button ln-button--outline ln-button--secondary">Secondary</button>
<button class="ln-button ln-button--outline ln-button--success">Success</button>
<button class="ln-button ln-button--outline ln-button--warning">Warning</button>
<button class="ln-button ln-button--outline ln-button--danger">Danger</button>
<button class="ln-button ln-button--outline ln-button--info">Info</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex flex-wrap gap-2">
              <button className="ln-button ln-button--outline ln-button--primary">Primary</button>
              <button className="ln-button ln-button--outline ln-button--secondary">Secondary</button>
              <button className="ln-button ln-button--outline ln-button--success">Success</button>
              <button className="ln-button ln-button--outline ln-button--warning">Warning</button>
              <button className="ln-button ln-button--outline ln-button--danger">Danger</button>
              <button className="ln-button ln-button--outline ln-button--info">Info</button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>With icon</h2>
        <p>
          Use the <code>__icon</code> and <code>__label</code> elements to pair
          an icon with text. Element order controls placement.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--solid">
  <span class="ln-button__icon">
    <svg viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true">
      <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/>
    </svg>
  </span>
  <span class="ln-button__label">Add item</span>
</button>
<button class="ln-button ln-button--outline">
  <span class="ln-button__label">Next</span>
  <span class="ln-button__icon">
    <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
    </svg>
  </span>
</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex gap-2">
              <button className="ln-button ln-button--solid">
                <span className="ln-button__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
                    <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
                  </svg>
                </span>
                <span className="ln-button__label">Add item</span>
              </button>
              <button className="ln-button ln-button--outline">
                <span className="ln-button__label">Next</span>
                <span className="ln-button__icon">
                  <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Icon-only button</h2>
        <p>
          The <code>--icon</code> modifier makes the button square. Always
          provide an <code>aria-label</code> for accessibility.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--solid ln-button--icon" aria-label="Add">
  <span class="ln-button__icon">
    <svg viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true">
      <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/>
    </svg>
  </span>
</button>
<button class="ln-button ln-button--outline ln-button--icon" aria-label="Settings">
  <span class="ln-button__icon">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
    </svg>
  </span>
</button>
<button class="ln-button ln-button--ghost ln-button--icon" aria-label="Close">
  <span class="ln-button__icon">
    <svg viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true">
      <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
    </svg>
  </span>
</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex gap-2">
              <button className="ln-button ln-button--solid ln-button--icon" aria-label="Add">
                <span className="ln-button__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
                    <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
                  </svg>
                </span>
              </button>
              <button className="ln-button ln-button--outline ln-button--icon" aria-label="Settings">
                <span className="ln-button__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
                  </svg>
                </span>
              </button>
              <button className="ln-button ln-button--ghost ln-button--icon" aria-label="Close">
                <span className="ln-button__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
                    <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Border radius</h2>
        <p>
          Buttons use a 2px radius by default. Shape modifiers override it
          for sharper or rounder corners.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--solid ln-button--square">Square</button>
<button class="ln-button ln-button--solid">Default</button>
<button class="ln-button ln-button--solid ln-button--rounded-sm">Rounded sm</button>
<button class="ln-button ln-button--solid ln-button--rounded-md">Rounded md</button>
<button class="ln-button ln-button--solid ln-button--rounded-lg">Rounded lg</button>
<button class="ln-button ln-button--solid ln-button--rounded-xl">Rounded xl</button>
<button class="ln-button ln-button--solid ln-button--pill">Pill</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex flex-wrap gap-2">
              <button className="ln-button ln-button--solid ln-button--square">Square</button>
              <button className="ln-button ln-button--solid">Default</button>
              <button className="ln-button ln-button--solid ln-button--rounded-sm">Rounded sm</button>
              <button className="ln-button ln-button--solid ln-button--rounded-md">Rounded md</button>
              <button className="ln-button ln-button--solid ln-button--rounded-lg">Rounded lg</button>
              <button className="ln-button ln-button--solid ln-button--rounded-xl">Rounded xl</button>
              <button className="ln-button ln-button--solid ln-button--pill">Pill</button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Full width</h2>
        <p>
          The <code>--block</code> modifier stretches the button to fill its
          container.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--solid ln-button--block">Full width button</button>
<button class="ln-button ln-button--outline ln-button--block">Full width outline</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex flex-column gap-2">
              <button className="ln-button ln-button--solid ln-button--block">Full width button</button>
              <button className="ln-button ln-button--outline ln-button--block">Full width outline</button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Disabled state</h2>
        <p>
          Both the <code>disabled</code> attribute and{" "}
          <code>aria-disabled=&quot;true&quot;</code> produce the same visual
          result. Use <code>aria-disabled</code> when the button should remain
          focusable for screen readers.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--solid" disabled>Disabled solid</button>
<button class="ln-button ln-button--outline" disabled>Disabled outline</button>
<button class="ln-button ln-button--ghost" aria-disabled="true">Disabled ghost</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex gap-2">
              <button className="ln-button ln-button--solid" disabled>Disabled solid</button>
              <button className="ln-button ln-button--outline" disabled>Disabled outline</button>
              <button className="ln-button ln-button--ghost" aria-disabled="true">Disabled ghost</button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Loading state</h2>
        <p>
          Setting <code>aria-busy=&quot;true&quot;</code> shows the{" "}
          <code>__spinner</code> element next to the label. The text stays
          visible so users can see which action is in progress.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--solid" aria-busy="true">
  <span class="ln-button__label">Saving</span>
  <span class="ln-button__spinner">
    <span class="ln-spinner ln-spinner--sm"></span>
  </span>
</button>
<button class="ln-button ln-button--outline" aria-busy="true">
  <span class="ln-button__label">Loading</span>
  <span class="ln-button__spinner">
    <span class="ln-spinner ln-spinner--sm"></span>
  </span>
</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex gap-2">
              <button className="ln-button ln-button--solid" aria-busy="true">
                <span className="ln-button__label">Saving</span>
                <span className="ln-button__spinner">
                  <span className="ln-spinner ln-spinner--sm"></span>
                </span>
              </button>
              <button className="ln-button ln-button--outline" aria-busy="true">
                <span className="ln-button__label">Loading</span>
                <span className="ln-button__spinner">
                  <span className="ln-spinner ln-spinner--sm"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Toggle button</h2>
        <p>
          The <code>aria-pressed</code> attribute drives toggle styling. When
          pressed, the button fills with the role color. Works on any variant and
          with role colors.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--outline" aria-pressed="false">Unpressed</button>
<button class="ln-button ln-button--outline" aria-pressed="true">Pressed</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex gap-2">
              <button className="ln-button ln-button--outline" aria-pressed="false">Unpressed</button>
              <button className="ln-button ln-button--outline" aria-pressed="true">Pressed</button>
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
              <td><code>.ln-button</code></td>
              <td>Button element</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button__label</code></td>
              <td>Label wrapper</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button__icon</code></td>
              <td>Icon element</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button__spinner</code></td>
              <td>Loading spinner</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button__badge</code></td>
              <td>Badge element</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button--neutral</code></td>
              <td>Neutral variant with border</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button--subtle</code></td>
              <td>Subtle tinted background</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button--outline</code></td>
              <td>Outlined variant</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button--ghost</code></td>
              <td>Transparent background</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button--link</code></td>
              <td>Link-style button</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button--sm</code></td>
              <td>Small size (32px height)</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.ln-button--lg</code></td>
              <td>Large size (48px height)</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.ln-button--block</code></td>
              <td>Full-width button</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>.ln-button--icon</code></td>
              <td>Square icon-only button</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button--pill</code></td>
              <td>Pill-shaped border radius</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button--square</code></td>
              <td>No border radius</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-button--&#123;role&#125;</code></td>
              <td>Role modifier (primary, secondary, success, warning, danger, info)</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
