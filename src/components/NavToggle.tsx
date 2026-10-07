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
        <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      ) : (
        <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      )}
    </button>
  );
}
