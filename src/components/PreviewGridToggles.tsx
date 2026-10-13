"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const EYE_HTML = `<i class="fa-regular fa-eye" aria-hidden="true"></i>`;
const EYE_SLASH_HTML = `<i class="fa-regular fa-eye-slash" aria-hidden="true"></i>`;

export function PreviewGridToggles() {
  const pathname = usePathname();

  useEffect(() => {
    const previews = document.querySelectorAll(".component-demo__preview");

    previews.forEach((preview) => {
      if (preview.querySelector(".preview-grid-toggle")) return;

      const inner = preview.querySelector(":scope > .component-demo__preview-inner") as HTMLElement | null;
      if (!inner) return;

      const diag = document.createElement("div");
      diag.className = "preview-diagnostic";
      preview.appendChild(diag);

      const rhythmBox = document.createElement("div");
      rhythmBox.className = "preview-rhythm-check";

      const rhythmLabel = document.createElement("span");
      rhythmLabel.className = "preview-rhythm-check__label";
      rhythmLabel.textContent = "Rhythm check";

      const heightBadge = document.createElement("span");
      heightBadge.className = "ln-badge";
      const statusBadge = document.createElement("span");
      statusBadge.className = "ln-badge";

      rhythmBox.append(rhythmLabel, heightBadge, statusBadge);

      const toggle = document.createElement("a");
      toggle.className = "preview-grid-toggle";
      toggle.setAttribute("role", "button");
      toggle.setAttribute("aria-label", "Toggle baseline grid overlay");
      toggle.setAttribute("aria-pressed", "false");
      toggle.innerHTML = EYE_SLASH_HTML;
      toggle.href = "#";

      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const active = inner.classList.toggle("show-grid");
        toggle.setAttribute("aria-pressed", String(active));
        toggle.innerHTML = active ? EYE_HTML : EYE_SLASH_HTML;
      });

      diag.append(rhythmBox, toggle);

      const updateDiag = () => {
        const h = Math.round(inner.getBoundingClientRect().height * 100) / 100;
        const pass = h % 8 === 0;
        const hasRatio = !!inner.querySelector('[class*="--ratio-"]');
        const hasMedia = !!inner.querySelector("img, video, picture, figure, iframe");
        const skip = hasRatio || hasMedia;
        const label = pass ? "pass" : skip ? "skip" : "fail";
        const role = pass ? "success" : skip ? "warning" : "danger";
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
