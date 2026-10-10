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
      <i className="fa-solid fa-list" aria-hidden="true"></i>
    </button>
  );
}
