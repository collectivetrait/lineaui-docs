"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SIZER_MODIFIERS = ["narrow", "xs", "sm"];

export function PreviewInnerWrap() {
  const pathname = usePathname();

  useEffect(() => {
    const previews = document.querySelectorAll(".component-demo__preview");

    previews.forEach((preview) => {
      if (preview.querySelector(":scope > .component-demo__preview-inner")) return;

      let sizerModifier: string | null = null;
      for (const mod of SIZER_MODIFIERS) {
        const cls = `component-demo__preview--${mod}`;
        if (preview.classList.contains(cls)) {
          sizerModifier = mod;
          preview.classList.remove(cls);
          break;
        }
      }

      const inner = document.createElement("div");
      inner.className = "component-demo__preview-inner";
      while (preview.firstChild) {
        inner.appendChild(preview.firstChild);
      }
      preview.appendChild(inner);

      const mod = sizerModifier || "full";
      const sizer = document.createElement("div");
      sizer.className = `component-demo__preview-sizer--${mod}`;
      while (inner.firstChild) {
        sizer.appendChild(inner.firstChild);
      }
      inner.appendChild(sizer);
    });
  }, [pathname]);

  return null;
}
