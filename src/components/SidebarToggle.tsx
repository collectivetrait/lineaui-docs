"use client";

import { useCallback, useEffect, useState } from "react";

export function SidebarToggle() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    const shell = document.querySelector(".ln-shell") as HTMLElement | null;
    if (!shell) return;
    delete shell.dataset.sidebar;
    setOpen(false);
  }, []);

  function toggle() {
    const shell = document.querySelector(".ln-shell") as HTMLElement | null;
    if (!shell) return;
    const next = !open;
    setOpen(next);
    if (next) {
      shell.dataset.sidebar = "open";
    } else {
      delete shell.dataset.sidebar;
    }
  }

  useEffect(() => {
    const shell = document.querySelector(".ln-shell") as HTMLElement | null;
    if (!shell) return;
    const observer = new MutationObserver(() => {
      setOpen(shell.dataset.sidebar === "open");
    });
    observer.observe(shell, { attributes: true, attributeFilter: ["data-sidebar"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    function handleClick(e: MouseEvent) {
      const sidebar = document.querySelector(".ln-shell__sidebar");
      const toggle = document.querySelector(".docs-sidebar-toggle");
      if (
        sidebar && !sidebar.contains(e.target as Node) &&
        toggle && !toggle.contains(e.target as Node)
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
      className="docs-sidebar-toggle"
      onClick={toggle}
      aria-label={open ? "Close sidebar" : "Open sidebar"}
      aria-expanded={open}
    >
      {open ? (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
