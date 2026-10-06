"use client";

import { useState } from "react";

export function GridToggle() {
  const [active, setActive] = useState(false);

  function toggle() {
    const next = !active;
    setActive(next);
    document.body.classList.toggle("show-grid", next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle baseline grid overlay"
      aria-pressed={active}
      title="Toggle baseline grid"
      className="grid-toggle"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M18 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M18 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      </svg>
    </button>
  );
}
