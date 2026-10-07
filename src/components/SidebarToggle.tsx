"use client";

import { useCallback, useEffect, useState } from "react";

export function SidebarToggle() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    const shell = document.querySelector(".docs-shell") as HTMLElement | null;
    if (!shell) return;
    delete shell.dataset.sidebar;
    setOpen(false);
  }, []);

  function toggle() {
    const shell = document.querySelector(".docs-shell") as HTMLElement | null;
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
    const shell = document.querySelector(".docs-shell") as HTMLElement | null;
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
      const sidebar = document.querySelector(".docs-shell__sidebar");
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
        <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
          <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" />
        </svg>
      )}
    </button>
  );
}
