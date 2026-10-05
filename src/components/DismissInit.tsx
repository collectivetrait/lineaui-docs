"use client";

import { useEffect } from "react";

export function DismissInit() {
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLElement>("[data-ln-dismiss]");
    buttons.forEach((btn) => {
      if ((btn as any)._lnDismiss) return;
      (btn as any)._lnDismiss = true;
      btn.addEventListener("click", () => {
        const target =
          btn.closest("[data-ln-dismissible]") ?? btn.parentElement;
        if (target instanceof HTMLElement) {
          target.remove();
        }
      });
    });
  }, []);

  return null;
}
