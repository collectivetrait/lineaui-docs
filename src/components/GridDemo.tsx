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
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M1 4h14M1 8h14M1 12h14M4 1v14M8 1v14M12 1v14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </button>
      {children}
    </div>
  );
}
