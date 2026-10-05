"use client";

import { useCallback, useEffect, useState } from "react";

export function NavToggle() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    const shell = document.querySelector(".docs-shell") as HTMLElement | null;
    if (!shell) return;
    delete shell.dataset.nav;
    setOpen(false);
  }, []);

  function toggle() {
    const shell = document.querySelector(".docs-shell") as HTMLElement | null;
    if (!shell) return;
    const next = !open;
    setOpen(next);
    if (next) {
      shell.dataset.nav = "open";
    } else {
      delete shell.dataset.nav;
    }
  }

  useEffect(() => {
    const shell = document.querySelector(".docs-shell") as HTMLElement | null;
    if (!shell) return;
    const observer = new MutationObserver(() => {
      setOpen(shell.dataset.nav === "open");
    });
    observer.observe(shell, { attributes: true, attributeFilter: ["data-nav"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    function handleClick(e: MouseEvent) {
      const panel = document.querySelector(".docs-shell__nav-panel");
      const btn = document.querySelector(".docs-nav-toggle");
      if (
        panel && !panel.contains(e.target as Node) &&
        btn && !btn.contains(e.target as Node)
      ) {
        close();
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, close]);

  return (
    <button
      className="docs-nav-toggle"
      onClick={toggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      {open ? (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="3" r="1.25" fill="currentColor" />
          <circle cx="8" cy="8" r="1.25" fill="currentColor" />
          <circle cx="8" cy="13" r="1.25" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}
