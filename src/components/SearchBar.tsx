"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NAV } from "@/data/nav";

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = query.trim()
    ? NAV.flatMap((section) =>
        section.links
          .filter((link) =>
            link.label.toLowerCase().includes(query.toLowerCase())
          )
          .map((link) => ({ ...link, group: section.group }))
      )
    : [];

  function navigate(href: string) {
    setQuery("");
    setActiveIndex(-1);
    router.push(href);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!results.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i < results.length - 1 ? i + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i > 0 ? i - 1 : results.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      navigate(results[activeIndex].href);
    }
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setQuery("");
        setActiveIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resetting selection when query changes
    setActiveIndex(-1);
  }, [query]);

  const classes = ["docs-search", className].filter(Boolean).join(" ");

  return (
    <div ref={containerRef} className={classes}>
      <input
        type="text"
        className="docs-search__input"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="Search documentation"
        aria-expanded={results.length > 0}
        aria-controls="search-results"
        role="combobox"
        aria-autocomplete="list"
      />
      {query.trim() && results.length > 0 && (
        <ul id="search-results" className="docs-search__results" role="listbox">
          {results.map((result, i) => (
            <li
              key={result.href}
              className={`docs-search__result${i === activeIndex ? " docs-search__result--active" : ""}`}
              role="option"
              aria-selected={i === activeIndex}
              onMouseDown={() => navigate(result.href)}
            >
              <span>{result.label}</span>
              <span className="docs-search__result-group">{result.group}</span>
            </li>
          ))}
        </ul>
      )}
      {query.trim() && results.length === 0 && (
        <div className="docs-search__empty">No results found</div>
      )}
    </div>
  );
}
