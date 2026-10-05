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
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 3h8M2 6.5h6M2 10h8M2 13.5h5M12 3v10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </button>
  );
}
