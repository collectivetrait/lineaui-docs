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
        {active ? (
          <i className="fa-regular fa-eye" aria-hidden="true"></i>
        ) : (
          <i className="fa-regular fa-eye-slash" aria-hidden="true"></i>
        )}
      </button>
      {children}
    </div>
  );
}
