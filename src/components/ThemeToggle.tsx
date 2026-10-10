"use client";

import { useLayoutEffect, useState } from "react";

const STORAGE_KEY = "ln:theme";

type Theme = "light" | "dark";

function getPreferred(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useLayoutEffect(() => {
    const preferred = getPreferred();
    setTheme(preferred);
    if (!document.documentElement.dataset.theme) {
      document.documentElement.dataset.theme = preferred;
    }
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <button
      className="docs-shell__theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <i className="fa-solid fa-sun" aria-hidden="true"></i>
      ) : (
        <i className="fa-solid fa-moon" aria-hidden="true"></i>
      )}
    </button>
  );
}
