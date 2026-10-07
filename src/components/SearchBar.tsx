"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NAV } from "@/data/nav";

interface SearchResult {
  label: string;
  href: string;
  group: string;
}

const allPages: SearchResult[] = NAV.flatMap((section) =>
  section.links.map((link) => ({
    label: link.label,
    href: link.href,
    group: section.group,
  }))
);

export function SearchBar({ className }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results =
    query.length < 1
      ? []
      : allPages.filter(
          (p) =>
            p.label.toLowerCase().includes(query.toLowerCase()) ||
            p.group.toLowerCase().includes(query.toLowerCase())
        );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  function navigate(href: string) {
    setQuery("");
    setOpen(false);
    router.push(href);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
      e.preventDefault();
      navigate(results[activeIndex].href);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  return (
    <div className={`docs-search ${className || ""}`} ref={ref}>
      <input
        ref={inputRef}
        className="docs-search__input"
        type="search"
        placeholder="Search..."
        aria-label="Search documentation"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => query.length > 0 && setOpen(true)}
        onKeyDown={handleKeyDown}
      />
      {open && results.length > 0 && (
        <ul className="docs-search__results" role="listbox">
          {results.map((r, i) => (
            <li
              key={r.href}
              role="option"
              aria-selected={i === activeIndex}
              className={`docs-search__result ${i === activeIndex ? "docs-search__result--active" : ""}`}
              onMouseDown={() => navigate(r.href)}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <span className="docs-search__result-label">{r.label}</span>
              <span className="docs-search__result-group">{r.group}</span>
            </li>
          ))}
        </ul>
      )}
      {open && query.length > 0 && results.length === 0 && (
        <div className="docs-search__empty">No results</div>
      )}
    </div>
  );
}
