"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Heading {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function TableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    setActiveId("");

    // Defer scan until the new page content has committed to the DOM
    const timer = setTimeout(() => {
      const content = document.querySelector(".docs-page-content");
      if (!content) return;

      const elements = Array.from(content.querySelectorAll("h2, h3")).filter(
        (el) =>
          !el.closest(".docs-prose-specimen") &&
          !el.closest(".component-demo__preview")
      );

      const usedIds = new Set<string>();
      const items: Heading[] = elements.map((el) => {
        const text = el.textContent ?? "";
        let id = el.id || slugify(text);
        if (usedIds.has(id)) {
          let n = 2;
          while (usedIds.has(`${id}-${n}`)) n++;
          id = `${id}-${n}`;
        }
        usedIds.add(id);
        el.id = id;
        return { id, text, level: el.tagName === "H2" ? 2 : 3 };
      });

      setHeadings(items);

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          }
        },
        { rootMargin: "0% 0% -80% 0%", threshold: 0 }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <nav className="docs-toc" aria-label="On this page">
      <p className="docs-toc__title">On this page</p>
      <ul className="docs-toc__list">
        {headings.map((h) => (
          <li
            key={h.id}
            className={h.level === 3 ? "docs-toc__item docs-toc__item--h3" : "docs-toc__item"}
          >
            <a
              href={`#${h.id}`}
              className={activeId === h.id ? "docs-toc__link is-active" : "docs-toc__link"}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
