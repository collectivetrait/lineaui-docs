"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

type Consent = "granted" | "denied" | null;

function getStoredConsent(): Consent {
  try {
    const value = localStorage.getItem("cookie-consent");
    if (value === "granted" || value === "denied") return value;
  } catch {}
  return null;
}

export function CookieConsent({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<Consent>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading stored consent on mount
    setConsent(getStoredConsent());
    setLoaded(true);

    function handleReset() {
      setConsent(null);
    }

    window.addEventListener("cookie-consent-reset", handleReset);
    return () =>
      window.removeEventListener("cookie-consent-reset", handleReset);
  }, []);

  function accept() {
    try {
      localStorage.setItem("cookie-consent", "granted");
    } catch {}
    setConsent("granted");
  }

  function decline() {
    try {
      localStorage.setItem("cookie-consent", "denied");
    } catch {}
    setConsent("denied");
  }

  return (
    <>
      {consent === "granted" && <GoogleAnalytics gaId={gaId} />}
      {loaded && consent === null && (
        <div className="docs-consent" role="dialog" aria-label="Cookie consent">
          <p className="docs-consent__text">
            This site uses cookies to measure traffic via Google Analytics.
          </p>
          <div className="docs-consent__actions">
            <button
              className="docs-consent__btn docs-consent__btn--accept"
              onClick={accept}
            >
              Accept
            </button>
            <button
              className="docs-consent__btn docs-consent__btn--decline"
              onClick={decline}
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
