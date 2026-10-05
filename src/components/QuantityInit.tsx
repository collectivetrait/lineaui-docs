"use client";

import { useEffect } from "react";

export function QuantityInit() {
  useEffect(() => {
    document
      .querySelectorAll<HTMLElement>("[data-ln-quantity]")
      .forEach((root) => {
        if ((root as any)._lnQuantity) return;
        (root as any)._lnQuantity = true;

        const input = root.querySelector<HTMLInputElement>(
          ".ln-quantity__input"
        );
        const dec = root.querySelector<HTMLButtonElement>(
          ".ln-quantity__decrement"
        );
        const inc = root.querySelector<HTMLButtonElement>(
          ".ln-quantity__increment"
        );
        if (!input) return;

        const min = Number(input.min) || 0;
        const max = Number(input.max) || Infinity;
        const stepVal = Number(input.step) || 1;

        function update() {
          const val = Number(input!.value) || 0;
          if (dec) dec.disabled = val <= min;
          if (inc) inc.disabled = val >= max;
        }

        dec?.addEventListener("click", () => {
          const next = Math.max(min, Number(input.value) - stepVal);
          input.value = String(next);
          update();
        });

        inc?.addEventListener("click", () => {
          const next = Math.min(max, Number(input.value) + stepVal);
          input.value = String(next);
          update();
        });

        input.addEventListener("change", () => {
          let val = Number(input.value) || 0;
          val = Math.max(min, Math.min(val, max));
          input.value = String(val);
          update();
        });

        update();
      });
  }, []);

  return null;
}
