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
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" />
      </svg>
    </button>
  );
}
