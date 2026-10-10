"use client";

export function BackToTop() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className="back-to-top"
    >
      <i className="fa-solid fa-chevron-up" aria-hidden="true"></i>
    </button>
  );
}
