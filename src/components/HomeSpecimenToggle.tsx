"use client";

import { useState } from "react";

export function HomeSpecimenToggle() {
  const [on, setOn] = useState(false);

  function toggle() {
    const next = !on;
    setOn(next);
    const specimen = document.getElementById("home-specimen");
    specimen?.classList.toggle("show-grid", next);
  }

  return (
    <button
      type="button"
      className={`ln-button ln-button--outline ln-button--sm home-baseline-toggle bg-surface-sunken ${on ? "home-baseline-toggle--on" : ""}`}
      onClick={toggle}
    >
      <span className="home-baseline-toggle__dot" /> Baseline {on ? "on" : "off"}
    </button>
  );
}
