"use client";

import { useRef, useState } from "react";

export function GridDemo({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  function toggle() {
    const next = !active;
    setActive(next);
    ref.current?.classList.toggle("show-grid", next);
  }

  return (
    <div ref={ref} className="border rounded-sm p-3">
      <button
        onClick={toggle}
        aria-label="Toggle grid"
        aria-pressed={active}
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
      {children}
    </div>
  );
}
