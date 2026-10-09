import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";
import { DropdownBasicPreview, DropdownHeadingsPreview } from "./DropdownPreview";

export const metadata: Metadata = {
  title: "Dropdown",
  description: "A toggleable overlay menu for actions or navigation links. Supports dividers, icons, and nested groups.",
};

export default function DropdownPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Dropdown</h1>
        <p className="lead text-subtle">
          A toggle-triggered overlay menu. Uses the Popover API for native
          light-dismiss behavior. The JS module adds keyboard navigation
          (arrows, Home, End, typeahead). Falls back to{" "}
          <code>aria-expanded</code> toggling without the Popover API.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Basic dropdown</h2>
        <div className="component-demo shadow-2" style={{ overflow: 'visible' }}>
          <CodeBlock language="html">{`<div class="ln-dropdown">
  <button class="ln-dropdown__toggle" aria-expanded="false">
    Actions ▾
  </button>
  <div class="ln-dropdown__menu">
    <a class="ln-dropdown__item" href="#">Edit</a>
    <a class="ln-dropdown__item" href="#">Duplicate</a>
    <div class="ln-dropdown__divider"></div>
    <a class="ln-dropdown__item ln-dropdown__item--danger" href="#">Delete</a>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <DropdownBasicPreview />
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Dropdown with headings</h2>
        <div className="component-demo shadow-2" style={{ overflow: 'visible' }}>
          <CodeBlock language="html">{`<div class="ln-dropdown">
  <button class="ln-dropdown__toggle" aria-expanded="false">
    More ▾
  </button>
  <div class="ln-dropdown__menu">
    <div class="ln-dropdown__heading">Navigate</div>
    <a class="ln-dropdown__item" href="#">
      <span class="ln-dropdown__label">Go to file</span>
      <span class="ln-dropdown__shortcut">⌘P</span>
    </a>
    <a class="ln-dropdown__item" href="#">
      <span class="ln-dropdown__label">Go to line</span>
      <span class="ln-dropdown__shortcut">⌘G</span>
    </a>
    <div class="ln-dropdown__divider"></div>
    <div class="ln-dropdown__heading">Actions</div>
    <a class="ln-dropdown__item" href="#">
      <span class="ln-dropdown__label">Copy link</span>
    </a>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <DropdownHeadingsPreview />
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
              <td><code>.ln-dropdown</code></td>
              <td>Dropdown container</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown__toggle</code></td>
              <td>Trigger element</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown__menu</code></td>
              <td>Popover menu panel</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown__item</code></td>
              <td>Menu item (link or button)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown__icon</code></td>
              <td>Item leading icon</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown__label</code></td>
              <td>Item text label</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown__shortcut</code></td>
              <td>Keyboard shortcut hint</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown__heading</code></td>
              <td>Section heading inside menu</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown__divider</code></td>
              <td>Separator line between groups</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown--end</code></td>
              <td>Right-align menu</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown--up</code></td>
              <td>Open menu above trigger</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown--start</code></td>
              <td>Left-align menu</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown--wide</code></td>
              <td>Match menu width to trigger</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-dropdown--&#123;role&#125;</code></td>
              <td>Role modifier (primary, secondary, success, warning, danger, info)</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
