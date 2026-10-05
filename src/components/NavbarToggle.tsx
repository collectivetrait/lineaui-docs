"use client";

import { useCallback } from "react";

export function NavbarToggle() {
  const toggle = useCallback(() => {
    const navbar = document.querySelector(".ln-navbar");
    if (!navbar) return;

    const btn = navbar.querySelector("[data-ln-navbar-toggle]");
    const panel = navbar.querySelector(".ln-navbar__panel");
    if (!btn || !panel) return;

    const expanded = btn.getAttribute("aria-expanded") === "true";

    if (expanded) {
      btn.setAttribute("aria-expanded", "false");
      panel.setAttribute("aria-hidden", "true");
      document.documentElement.classList.remove("ln-navbar-open");
    } else {
      btn.setAttribute("aria-expanded", "true");
      panel.setAttribute("aria-hidden", "false");
      document.documentElement.classList.add("ln-navbar-open");
    }
  }, []);

  return (
    <button
      className="ln-navbar__toggle"
      data-ln-navbar-toggle=""
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={toggle}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
  );
}
