"use client";

import { useState } from "react";

export function TocToggle() {
  const [hidden, setHidden] = useState(false);

  function toggle() {
    const next = !hidden;
    setHidden(next);
    document.body.classList.toggle("hide-toc", next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle table of contents"
      aria-pressed={hidden}
      title="Toggle table of contents"
      className="toc-toggle"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 6l11 0" />
        <path d="M9 12l11 0" />
        <path d="M9 18l11 0" />
        <path d="M5 6l0 .01" />
        <path d="M5 12l0 .01" />
        <path d="M5 18l0 .01" />
      </svg>
    </button>
  );
}
