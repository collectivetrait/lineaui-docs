"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";

export default function DropdownPage() {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

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

      <section className="docs-section">
        <h2>Basic dropdown</h2>
        <div className="component-demo" style={{ overflow: 'visible' }}>
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
            <div className="ln-dropdown">
              <button
                className="ln-dropdown__toggle"
                aria-expanded={dropdown1Open ? "true" : "false"}
                onClick={() => setDropdown1Open(!dropdown1Open)}
              >
                Actions ▾
              </button>
              <div className="ln-dropdown__menu">
                <a className="ln-dropdown__item" href="#">Edit</a>
                <a className="ln-dropdown__item" href="#">Duplicate</a>
                <div className="ln-dropdown__divider"></div>
                <a className="ln-dropdown__item ln-dropdown__item--danger" href="#">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Dropdown with headings</h2>
        <div className="component-demo" style={{ overflow: 'visible' }}>
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
            <div className="ln-dropdown">
              <button
                className="ln-dropdown__toggle"
                aria-expanded={dropdown2Open ? "true" : "false"}
                onClick={() => setDropdown2Open(!dropdown2Open)}
              >
                More ▾
              </button>
              <div className="ln-dropdown__menu">
                <div className="ln-dropdown__heading">Navigate</div>
                <a className="ln-dropdown__item" href="#">
                  <span className="ln-dropdown__label">Go to file</span>
                  <span className="ln-dropdown__shortcut">⌘P</span>
                </a>
                <a className="ln-dropdown__item" href="#">
                  <span className="ln-dropdown__label">Go to line</span>
                  <span className="ln-dropdown__shortcut">⌘G</span>
                </a>
                <div className="ln-dropdown__divider"></div>
                <div className="ln-dropdown__heading">Actions</div>
                <a className="ln-dropdown__item" href="#">
                  <span className="ln-dropdown__label">Copy link</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
