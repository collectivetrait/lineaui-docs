"use client";

import { useEffect } from "react";

export function GalleryInit() {
  useEffect(() => {
    document
      .querySelectorAll<HTMLElement>("[data-ln-gallery]")
      .forEach((root) => {
        if ((root as any)._lnGallery) return;
        (root as any)._lnGallery = true;

        const main = root.querySelector<HTMLElement>(".ln-gallery__main");
        const slides = [
          ...root.querySelectorAll<HTMLElement>(".ln-gallery__slide"),
        ];
        const thumbs = [
          ...root.querySelectorAll<HTMLElement>(".ln-gallery__thumb"),
        ];
        if (!main || slides.length === 0) return;

        function setActive(index: number) {
          thumbs.forEach((thumb, i) => {
            thumb.classList.toggle("is-active", i === index);
            thumb.setAttribute(
              "aria-selected",
              i === index ? "true" : "false"
            );
          });
        }

        function goTo(index: number) {
          index = Math.max(0, Math.min(index, slides.length - 1));
          const left =
            slides[index].offsetLeft - (slides[0]?.offsetLeft ?? 0);
          main!.scrollTo({ left, behavior: "auto" });
          setActive(index);
        }

        thumbs.forEach((thumb, i) => {
          thumb.addEventListener("click", () => goTo(i));
        });

        setActive(0);
      });
  }, []);

  return null;
}
