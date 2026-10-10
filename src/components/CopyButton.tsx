"use client";

import { useCallback, useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [text]);

  return (
    <button
      type="button"
      className={`code-block__copy${copied ? " code-block__copy--copied" : ""}`}
      onClick={handleClick}
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <i className="fa-solid fa-check" aria-hidden="true"></i>
      ) : (
        <i className="fa-regular fa-copy" aria-hidden="true"></i>
      )}
    </button>
  );
}
