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
      <i className="fa-solid fa-table-columns" aria-hidden="true"></i>
    </button>
  );
}
