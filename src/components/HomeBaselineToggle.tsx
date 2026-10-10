"use client";

import { useState } from "react";

export function HomeBaselineToggle() {
  const [active, setActive] = useState(false);

  function toggle() {
    const next = !active;
    setActive(next);
    const rhythm = document.getElementById("home-rhythm");
    rhythm?.classList.toggle("show-grid", next);
  }

  return (
    <button type="button" className={`ln-button ln-button--outline ln-button--sm home-baseline-toggle ${active ? "home-baseline-toggle--on" : ""}`} onClick={toggle}>
      <span className="home-baseline-toggle__dot" /> Baseline {active ? "on" : "off"}
    </button>
  );
}
