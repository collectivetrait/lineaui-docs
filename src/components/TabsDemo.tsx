import { useId } from "react";

interface TabsDemoProps {
  variant?: string;
  tabs?: string[];
  panels?: string[];
}

export function TabsDemo({ variant, tabs = ["Overview", "Features", "Pricing"], panels }: TabsDemoProps) {
  const id = useId().replace(/:/g, "");
  const className = variant ? `ln-tabs ln-tabs--${variant}` : "ln-tabs";

  return (
    <div className={className} data-ln-tabs="">
      <div className="ln-tabs__list">
        {tabs.map((label, i) => (
          <button
            key={label}
            className="ln-tabs__tab"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-controls={`${id}-panel-${i}`}
            aria-selected={i === 0 ? "true" : "false"}
          >
            {label}
          </button>
        ))}
      </div>
      {tabs.map((label, i) => (
        <div
          key={label}
          className="ln-tabs__panel"
          id={`${id}-panel-${i}`}
          aria-labelledby={`${id}-tab-${i}`}
        >
          {panels?.[i] ?? `${label} content goes here.`}
        </div>
      ))}
    </div>
  );
}
