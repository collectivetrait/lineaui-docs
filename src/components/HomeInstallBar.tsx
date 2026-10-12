"use client";

import { useCallback, useState } from "react";

export function HomeInstallBar() {
  const command = "npm install @collectivetrait/lineaui";
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, []);

  return (
    <div className="home-install">
      <span className="home-install__prompt">$</span>
      <span className="home-install__command">{command}</span>
      <button
        type="button"
        className="code-block__copy"
        onClick={handleCopy}
        aria-label="Copy install command"
      >
        {copied ? (
          <i className="fa-solid fa-check" aria-hidden="true"></i>
        ) : (
          <i className="fa-regular fa-copy" aria-hidden="true"></i>
        )}
      </button>
    </div>
  );
}
