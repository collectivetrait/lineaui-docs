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
  <h3 class="ln-card__title">Card title</h3>
  <div class="ln-card__body">
    <p>Card content goes here.</p>
  </div>
  <div class="ln-card__actions">
    <a class="ln-button" href="#">
      Action
    </a>
  </div>
</article>`,
    preview: (
      <article className="ln-card">
        <h3 className="ln-card__title">Card title</h3>
        <div className="ln-card__body">
          <p>Card content goes here.</p>
        </div>
        <div className="ln-card__actions">
          <span className="ln-button">Action</span>
        </div>
      </article>
    ),
  },
  {
    id: "button",
    label: "Button",
    code: `<a class="ln-button" href="#">
  Default
</a>
<a class="ln-button ln-button--outline" href="#">
  Outline
</a>
<a class="ln-button ln-button--ghost" href="#">
  Ghost
</a>`,
    preview: (
      <div className="ln-cluster ln-cluster--gap-sm">
        <span className="ln-button">Default</span>
        <span className="ln-button ln-button--outline">Outline</span>
        <span className="ln-button ln-button--ghost">Ghost</span>
      </div>
    ),
  },
  {
    id: "alert",
    label: "Alert",
    code: `<div class="ln-alert ln-alert--success">
  <div class="ln-alert__content">
    <p class="ln-alert__body">
      Changes saved successfully.
    </p>
  </div>
</div>`,
    preview: (
      <div className="ln-alert ln-alert--success">
        <div className="ln-alert__content">
          <p className="ln-alert__body">Changes saved successfully.</p>
        </div>
      </div>
    ),
  },
  {
    id: "field",
    label: "Form field",
    code: `<div class="ln-field">
  <label class="ln-field__label">Email</label>
  <div class="ln-field__control">
    <input type="email"
      placeholder="you@example.com" />
  </div>
</div>`,
    preview: (
      <div className="ln-field">
        <label className="ln-field__label">Email</label>
        <div className="ln-field__control">
          <input type="email" placeholder="you@example.com" readOnly />
        </div>
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
    <div className="ln-tabs">
      <div className="ln-tabs__list" role="tablist">
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

      <div className="ln-tabs__panel" role="tabpanel">
        <div className="home-showcase__panel">
          <div className="code-block">
            <div className="code-block__header">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 2h5.5L13 5.5V14H4V2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                <path d="M9 2v4h4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
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
