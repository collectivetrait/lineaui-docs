"use client";

import { useEffect } from "react";

export function LineaUIInit() {
  useEffect(() => {
    import("@collectivetrait/lineaui");
  }, []);
  return null;
}
