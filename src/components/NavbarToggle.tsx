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
      <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
      </svg>
    </button>
  );
}
