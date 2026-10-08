"use client";

import { useState } from "react";

export function TabsDemo() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="ln-tabs">
      <div className="ln-tabs__list">
        {["Overview", "Features", "Pricing"].map((label, i) => (
          <button
            key={label}
            className="ln-tabs__tab"
            aria-selected={activeTab === i ? "true" : "false"}
            onClick={() => setActiveTab(i)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="ln-tabs__panel" hidden={activeTab !== 0}>Overview content goes here.</div>
      <div className="ln-tabs__panel" hidden={activeTab !== 1}>Features content goes here.</div>
      <div className="ln-tabs__panel" hidden={activeTab !== 2}>Pricing content goes here.</div>
    </div>
  );
}
