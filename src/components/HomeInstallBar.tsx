"use client";

import { useCallback, useState } from "react";

export function HomeInstallBar() {
  const command = "npm install linea-ui";
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, []);

  return (
    <div className="home-install rounder-none">
      <span className="home-install__prompt">$</span>
      <span className="home-install__command">{command}</span>
      <button
        type="button"
        className="code-block__copy"
        onClick={handleCopy}
        aria-label="Copy install command"
      >
        {copied ? (
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="5.5" y="5.5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M10.5 5.5V3.5a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1h2" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        )}
      </button>
    </div>
  );
}
