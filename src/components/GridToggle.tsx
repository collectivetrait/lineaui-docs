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
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 3h-24v-2h24v2zm0 3h-24v2h24v-2zm0 5h-24v2h24v-2zm0 5h-24v2h24v-2zm0 5h-24v2h24v-2z" />
      </svg>
    </button>
  );
}
