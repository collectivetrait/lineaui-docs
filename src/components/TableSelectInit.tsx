"use client";

import { useEffect } from "react";

export function TableSelectInit() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".ln-table").forEach((table) => {
      if ((table as any)._lnSelect) return;
      (table as any)._lnSelect = true;

      const selectAll = table.querySelector<HTMLInputElement>(
        "thead .ln-table__select input[type='checkbox']"
      );
      if (!selectAll) return;

      const getRowCheckboxes = () =>
        table.querySelectorAll<HTMLInputElement>(
          "tbody .ln-table__select input[type='checkbox']"
        );

      selectAll.addEventListener("change", () => {
        const checked = selectAll.checked;
        getRowCheckboxes().forEach((cb) => {
          cb.checked = checked;
          const row = cb.closest("tr");
          if (row) {
            if (checked) {
              row.setAttribute("aria-selected", "true");
            } else {
              row.removeAttribute("aria-selected");
            }
          }
        });
        updateCount(table);
      });

      getRowCheckboxes().forEach((cb) => {
        cb.addEventListener("change", () => {
          const row = cb.closest("tr");
          if (row) {
            if (cb.checked) {
              row.setAttribute("aria-selected", "true");
            } else {
              row.removeAttribute("aria-selected");
            }
          }
          const boxes = getRowCheckboxes();
          const total = boxes.length;
          const selected = Array.from(boxes).filter((b) => b.checked).length;
          selectAll.checked = selected === total;
          selectAll.indeterminate = selected > 0 && selected < total;
          updateCount(table);
        });
      });
    });
  }, []);

  return null;
}

function updateCount(table: HTMLElement) {
  const boxes = table.querySelectorAll<HTMLInputElement>(
    "tbody .ln-table__select input[type='checkbox']"
  );
  const total = boxes.length;
  const selected = Array.from(boxes).filter((b) => b.checked).length;
  const countEl = table.querySelector("[data-select-count]");
  if (countEl) {
    countEl.textContent = `${selected} of ${total} selected`;
  }
}
