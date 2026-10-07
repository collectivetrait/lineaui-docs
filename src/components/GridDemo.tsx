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
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 3h-24v-2h24v2zm0 3h-24v2h24v-2zm0 5h-24v2h24v-2zm0 5h-24v2h24v-2zm0 5h-24v2h24v-2z" />
        </svg>
      </button>
      {children}
    </div>
  );
}
