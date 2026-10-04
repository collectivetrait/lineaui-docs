"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GRID_SVG = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1 4h14M1 8h14M1 12h14M4 1v14M8 1v14M12 1v14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`;

export function PreviewGridToggles() {
  const pathname = usePathname();

  useEffect(() => {
    const previews = document.querySelectorAll(".component-demo__preview");

    const SIZER_MODIFIERS = ["narrow", "xs", "sm"];

    previews.forEach((preview) => {
      if (preview.querySelector(".preview-grid-toggle")) return;

      let sizerModifier: string | null = null;
      for (const mod of SIZER_MODIFIERS) {
        const cls = `component-demo__preview--${mod}`;
        if (preview.classList.contains(cls)) {
          sizerModifier = mod;
          preview.classList.remove(cls);
          break;
        }
      }

      let inner = preview.querySelector(":scope > .component-demo__preview-inner") as HTMLElement | null;
      if (!inner) {
        inner = document.createElement("div");
        inner.className = "component-demo__preview-inner";
        while (preview.firstChild) {
          inner.appendChild(preview.firstChild);
        }
        preview.appendChild(inner);
      }

      if (sizerModifier && !inner.querySelector(":scope > .component-demo__preview-sizer--" + sizerModifier)) {
        const sizer = document.createElement("div");
        sizer.className = `component-demo__preview-sizer--${sizerModifier}`;
        while (inner.firstChild) {
          sizer.appendChild(inner.firstChild);
        }
        inner.appendChild(sizer);
      }

      const diag = document.createElement("div");
      diag.className = "preview-diagnostic";
      inner.appendChild(diag);

      const toggle = document.createElement("a");
      toggle.className = "preview-grid-toggle";
      toggle.setAttribute("role", "button");
      toggle.setAttribute("aria-label", "Toggle baseline grid overlay");
      toggle.setAttribute("aria-pressed", "false");
      toggle.innerHTML = GRID_SVG;
      toggle.href = "#";

      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const active = inner.classList.toggle("show-grid");
        toggle.setAttribute("aria-pressed", String(active));
      });

      const heightBadge = document.createElement("span");
      heightBadge.className = "ln-badge";
      const statusBadge = document.createElement("span");
      statusBadge.className = "ln-badge";
      diag.append(heightBadge, statusBadge, toggle);

      const updateDiag = () => {
        const h = Math.round(inner.getBoundingClientRect().height * 100) / 100;
        const pass = h % 8 === 0;
        const hasRatio = !!inner.querySelector('[class*="--ratio-"]');
        const label = pass ? "pass" : hasRatio ? "skip" : "fail";
        const role = pass ? "success" : hasRatio ? "warning" : "danger";
        heightBadge.textContent = `${h}px`;
        statusBadge.textContent = label;
        statusBadge.className = `ln-badge ln-badge--${role}`;
      };

      updateDiag();
      const ro = new ResizeObserver(updateDiag);
      ro.observe(inner);
    });
  }, [pathname]);

  return null;
}
