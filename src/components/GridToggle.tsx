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
      {active ? (
        <i className="fa-regular fa-eye" aria-hidden="true"></i>
      ) : (
        <i className="fa-regular fa-eye-slash" aria-hidden="true"></i>
      )}
    </button>
  );
}
