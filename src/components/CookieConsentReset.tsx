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
      <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
        <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L24.8 189.7c-10.3 20.4-13.6 43.5-9.4 66.2l15.7 85.1c3.8 20.9 14 40 29.2 54.7l56.7 54.5c16.2 15.6 36.9 25.4 59.3 28.2l83.8 10.5c23.3 2.9 46.8-2.3 67.3-14.9l75-46.2c19.3-11.9 34-29.5 42.6-50.5l31.4-77.3c9.3-22.8 10.7-48 4-71.6l-24.7-86.2c-1.9-6.7-8.1-10.8-15-9.7c-56.1 8.9-112.6-27.3-126.2-82.6zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
      </svg>
    </button>
  );
}
