"use client";

import { useState } from "react";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("xml", xml);

const TABS = [
  {
    id: "card",
    label: "Card",
    code: `<article class="ln-card">
  <h3 class="ln-card__title h2">Card title</h3>
  <div class="ln-card__body">
    <p>Card content goes here.</p>
  </div>
  <div class="ln-card__actions">
    <a class="ln-button ln-button--primary" href="#">
      Action
    </a>
  </div>
</article>`,
    preview: (
      <article className="ln-card">
        <h3 className="ln-card__title h2">Card title</h3>
        <div className="ln-card__body">
          <p>Card content goes here.</p>
        </div>
        <div className="ln-card__actions">
          <span className="ln-button ln-button--primary">Action</span>
        </div>
      </article>
    ),
  },
  {
    id: "button",
    label: "Button",
    code: `<a class="ln-button" href="#">
  Primary
</a>
<a class="ln-button ln-button--ghost" href="#">
  Ghost
</a>
<a class="ln-button ln-button--link" href="#">
  Link
</a>`,
    preview: (
      <div className="ln-cluster ln-cluster--gap-sm">
        <span className="ln-button">Primary</span>
        <span className="ln-button ln-button--ghost">Ghost</span>
        <span className="ln-button ln-button--link">Link</span>
      </div>
    ),
  },
  {
    id: "alert",
    label: "Alert",
    code: `<div class="ln-alert">
  <div class="ln-alert__content">
    <p class="ln-alert__title">Heads up</p>
    <p class="ln-alert__body">
      Your session expires in five minutes.
    </p>
  </div>
</div>`,
    preview: (
      <div className="ln-alert">
        <div className="ln-alert__content">
          <p className="ln-alert__title">Heads up</p>
          <p className="ln-alert__body">Your session expires in five minutes.</p>
        </div>
      </div>
    ),
  },
  {
    id: "field",
    label: "Form field",
    code: `<div class="ln-field">
  <label class="ln-field__label">Full name</label>
  <div class="ln-field__control">
    <input type="text" placeholder="Ada Lovelace" />
  </div>
  <p class="ln-field__hint">
    As it appears on your invoices.
  </p>
</div>
<button class="ln-button" type="submit">
  Save
</button>`,
    preview: (
      <div>
        <div className="ln-field">
          <label className="ln-field__label">Full name</label>
          <div className="ln-field__control">
            <input type="text" placeholder="Ada Lovelace" readOnly />
          </div>
          <p className="ln-field__hint">As it appears on your invoices.</p>
        </div>
        <span className="ln-button">Save</span>
      </div>
    ),
  },
];

export function HomeCodeShowcase() {
  const [active, setActive] = useState(0);

  const tab = TABS[active];
  const highlighted = hljs.highlight(tab.code, {
    language: "xml",
    ignoreIllegals: true,
  });

  const lines = highlighted.value.split("\n");
  const wrappedHtml = lines
    .map((line) => `<span class="code-block__line">${line}</span>`)
    .join("\n");

  return (
    <div className="ln-tabs bg-canvas border shadow-2">
      <div className="ln-tabs__list bg-surface border pt-1 px-2" role="tablist">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            className="ln-tabs__tab"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="ln-tabs__panel pt-0 home-showcase" role="tabpanel">
        <div className="home-showcase__panel">
          <div className="code-block">
            <div className="code-block__header">
              <i className="fa-regular fa-file" aria-hidden="true"></i>
              <span>index.html</span>
              <span className="code-block__lang">html</span>
            </div>
            <pre className="code-block__body">
              <code
                className="hljs language-xml"
                dangerouslySetInnerHTML={{ __html: wrappedHtml }}
              />
            </pre>
          </div>
          <div className="home-showcase__preview">{tab.preview}</div>
        </div>
      </div>
    </div>
  );
}
