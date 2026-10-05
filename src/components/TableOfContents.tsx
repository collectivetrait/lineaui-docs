"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV } from "@/data/nav";

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

function findSectionGroup(pathname: string): string | null {
  for (const section of NAV) {
    for (const link of section.links) {
      if (link.href === pathname) return section.group;
    }
  }
  return null;
}

export function TableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    setActiveId("");

    const timer = setTimeout(() => {
      const content = document.querySelector(".docs-page-content");
      if (!content) return;

      const h1 = content.querySelector("h1");
      if (h1 && !h1.parentElement?.querySelector(".docs-breadcrumb")) {
        const group = findSectionGroup(pathname);
        if (group) {
          const crumb = document.createElement("p");
          crumb.className = "docs-breadcrumb";
          crumb.textContent = group;
          h1.parentElement!.insertBefore(crumb, h1);
        }
      }

      const elements = Array.from(content.querySelectorAll("h2, h3")).filter(
        (el) =>
          !el.closest(".docs-prose-specimen") &&
          !el.closest(".component-demo__preview")
      );

      const usedIds = new Set<string>();
      let h2Counter = 0;
      const items: Heading[] = elements.map((el) => {
        let rawText = "";
        el.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) rawText += node.textContent;
          else if (
            node.nodeType === Node.ELEMENT_NODE &&
            !(node as Element).classList.contains("docs-section-number") &&
            !(node as Element).classList.contains("docs-heading-anchor")
          ) {
            rawText += (node as Element).textContent;
          }
        });
        const text = rawText.trim();

        let id = el.id || slugify(text);
        if (usedIds.has(id)) {
          let n = 2;
          while (usedIds.has(`${id}-${n}`)) n++;
          id = `${id}-${n}`;
        }
        usedIds.add(id);
        el.id = id;

        if (el.tagName === "H2") {
          h2Counter++;
          if (!el.querySelector(".docs-section-number")) {
            const num = document.createElement("span");
            num.className = "docs-section-number";
            num.textContent = String(h2Counter).padStart(2, "0");
            el.insertBefore(num, el.firstChild);
          }
        }

        if (!el.querySelector(".docs-heading-anchor")) {
          const anchor = document.createElement("a");
          anchor.className = "docs-heading-anchor";
          anchor.href = `#${id}`;
          anchor.textContent = "#";
          anchor.setAttribute("aria-label", `Link to ${text}`);
          el.appendChild(anchor);
        }

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    }
  };

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
              onClick={(e) => handleClick(e, h.id)}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
