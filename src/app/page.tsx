import Link from "next/link";

const FEATURES = [
  {
    title: "Zero-class typography",
    body: "Semantic HTML gets beautiful defaults out of the box. No class names needed for prose.",
  },
  {
    title: "8px / 24px grid",
    body: "Every size, space, and line-height token snaps to an 8px base grid with 24px rhythm lines.",
  },
  {
    title: "Configurable prefix",
    body: "The ln- class prefix is a Sass variable. Override it with @use to avoid conflicts.",
  },
  {
    title: "CSS cascade layers",
    body: "Layers give you predictable specificity. Override any rule without fighting specificity wars.",
  },
  {
    title: "OS-aware dark mode",
    body: "Colours use light-dark() so they follow the OS automatically. Toggle per-page with data-theme.",
  },
  {
    title: "Modular SCSS",
    body: "Import only what you need via Sass @use. No global leaks, no deprecated @import.",
  },
];

export default function Home() {
  return (
    <div>
      <section>
        <h1 className="text-display-2">Build interfaces with rhythm.</h1>
        <p className="lead text-subtle">
          ln is a SCSS/JS UI library built on an 8px grid, cascade layers, and
          semantic HTML. No framework dependencies. No build magic required.
        </p>
        <p>
          <Link href="/getting-started">Get started</Link>
          {" · "}
          <Link href="/typography">See the type scale</Link>
        </p>
      </section>

      <section>
        <h2>Why ln?</h2>
        <div className="docs-card-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="docs-card">
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
