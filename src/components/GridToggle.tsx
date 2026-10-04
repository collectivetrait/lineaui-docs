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
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M1 4h14M1 8h14M1 12h14M4 1v14M8 1v14M12 1v14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    </button>
  );
}
