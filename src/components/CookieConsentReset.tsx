"use client";

export function CookieConsentReset() {
  function reset() {
    try {
      localStorage.removeItem("cookie-consent");
    } catch {}
    window.dispatchEvent(new Event("cookie-consent-reset"));
  }

  return (
    <button
      className="docs-consent-reset"
      onClick={reset}
      aria-label="Reset cookie consent"
      title="Reset cookie consent"
    >
      <i className="fa-solid fa-cookie-bite" aria-hidden="true"></i>
    </button>
  );
}
