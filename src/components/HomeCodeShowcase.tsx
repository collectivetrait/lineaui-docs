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
    <input type="email" placeholder="you@example.com" />
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
              <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                <path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
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
