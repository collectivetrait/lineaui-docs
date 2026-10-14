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
    } else {
      btn.setAttribute("aria-expanded", "true");
      panel.setAttribute("aria-hidden", "false");
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
      <i className="fa-solid fa-bars ln-navbar__toggle-open" aria-label="Open menu"></i>
      <i className="fa-solid fa-xmark ln-navbar__toggle-close" aria-label="Close menu"></i>
    </button>
  );
}
