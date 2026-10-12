import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function IconsPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Icons</h1>
        <p className="lead text-subtle">
          Linea UI does not ship its own icon set. Instead, the library is
          designed to work seamlessly with any icon font or SVG icon library.
          Pick whichever fits your project and drop it in.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Recommended icon libraries</h2>
        <p>
          Any icon library that renders via CSS classes on an{" "}
          <code>&lt;i&gt;</code> element works out of the box with Linea UI
          components. Here are three popular choices:
        </p>
        <ul>
          <li>
            <a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">
              Font Awesome
            </a>{" "}
            — 2,000+ free icons across solid, regular, and brand styles.
          </li>
          <li>
            <a href="https://icons.getbootstrap.com" target="_blank" rel="noopener noreferrer">
              Bootstrap Icons
            </a>{" "}
            — 2,000+ open-source icons designed to pair with Bootstrap or
            any project.
          </li>
          <li>
            <a href="https://heroicons.com" target="_blank" rel="noopener noreferrer">
              Heroicons
            </a>{" "}
            — hand-crafted SVG icons by the Tailwind CSS team, available as
            React components or plain SVG.
          </li>
        </ul>
        <p>
          The examples on this page use{" "}
          <a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">
            Font Awesome Free
          </a>
          .
        </p>
      </section>

      <section className="docs-section">
        <h2>Loading Font Awesome</h2>
        <p>
          Add the Font Awesome stylesheet to your page via CDN or install it
          as a package.
        </p>

        <h3>CDN</h3>

        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />`}</CodeBlock>
        </div>

        <h3>npm</h3>

        <div className="component-demo shadow-2">
          <CodeBlock language="shell">npm install @fortawesome/fontawesome-free</CodeBlock>
        </div>

        <p>Then import the CSS in your entry point:</p>

        <div className="component-demo shadow-2">
          <CodeBlock language="javascript">{`import "@fortawesome/fontawesome-free/css/all.min.css";`}</CodeBlock>
        </div>
      </section>

      <section className="docs-section">
        <h2>Basic usage</h2>
        <p>
          Add the icon class to an <code>&lt;i&gt;</code> element. Font
          Awesome classes follow the pattern{" "}
          <code>fa-&#123;style&#125; fa-&#123;name&#125;</code>, where style
          is <code>fa-solid</code>, <code>fa-regular</code>, or{" "}
          <code>fa-brands</code>.
        </p>

        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<i class="fa-solid fa-check"></i>
<i class="fa-solid fa-heart"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-brands fa-github"></i>
<i class="fa-solid fa-magnifying-glass"></i>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-3">
              <i className="fa-solid fa-check" aria-hidden="true" />
              <i className="fa-solid fa-heart" aria-hidden="true" />
              <i className="fa-solid fa-star" aria-hidden="true" />
              <i className="fa-brands fa-github" aria-hidden="true" />
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Sizing</h2>
        <p>
          Font Awesome icons scale with <code>font-size</code>. Use
          Linea UI typography utilities to resize, or apply Font
          Awesome&rsquo;s own sizing classes like <code>fa-lg</code>,{" "}
          <code>fa-2x</code>, <code>fa-3x</code>.
        </p>

        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<i class="fa-solid fa-star text-body-sm"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star fa-lg"></i>
<i class="fa-solid fa-star fa-2x"></i>
<i class="fa-solid fa-star fa-3x"></i>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-3">
              <i className="fa-solid fa-star text-body-sm" aria-hidden="true" />
              <i className="fa-solid fa-star" aria-hidden="true" />
              <i className="fa-solid fa-star fa-lg" aria-hidden="true" />
              <i className="fa-solid fa-star fa-2x" aria-hidden="true" />
              <i className="fa-solid fa-star fa-3x" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Color</h2>
        <p>
          Icons inherit the current text <code>color</code>. Apply any
          Linea UI text-color utility to change it.
        </p>

        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<i class="fa-solid fa-circle-check text-success"></i>
<i class="fa-solid fa-triangle-exclamation text-warning"></i>
<i class="fa-solid fa-circle-xmark text-danger"></i>
<i class="fa-solid fa-circle-info text-info"></i>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-3 text-h3">
              <i className="fa-solid fa-circle-check text-success" aria-hidden="true" />
              <i className="fa-solid fa-triangle-exclamation text-warning" aria-hidden="true" />
              <i className="fa-solid fa-circle-xmark text-danger" aria-hidden="true" />
              <i className="fa-solid fa-circle-info text-info" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>With components</h2>
        <p>
          Icons work naturally inside Linea UI components. Place an{" "}
          <code>&lt;i&gt;</code> element alongside text or inside buttons,
          alerts, and badges.
        </p>

        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<button class="ln-button ln-button--primary">
  <i class="fa-solid fa-download" aria-hidden="true"></i>
  Download
</button>

<button class="ln-button ln-button--outline">
  <i class="fa-solid fa-gear" aria-hidden="true"></i>
  Settings
</button>

<button class="ln-button" aria-label="Delete">
  <i class="fa-solid fa-trash" aria-hidden="true"></i>
</button>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="d-flex align-items-center gap-3">
              <button className="ln-button ln-button--primary">
                <i className="fa-solid fa-download" aria-hidden="true"></i>
                {" "}Download
              </button>
              <button className="ln-button ln-button--outline">
                <i className="fa-solid fa-gear" aria-hidden="true"></i>
                {" "}Settings
              </button>
              <button className="ln-button" aria-label="Delete">
                <i className="fa-solid fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Accessibility</h2>
        <p>
          Decorative icons should include{" "}
          <code>aria-hidden=&quot;true&quot;</code> to hide them from screen
          readers. If the icon conveys meaning on its own (no adjacent text
          label), add a <code>role=&quot;img&quot;</code> and an accessible label
          instead.
        </p>

        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<!-- Decorative icon next to text — hide from AT -->
<button>
  <i class="fa-solid fa-trash" aria-hidden="true"></i>
  Delete
</button>

<!-- Standalone icon — provide a label -->
<button aria-label="Delete">
  <i class="fa-solid fa-trash" role="img" aria-label="Delete"></i>
</button>`}</CodeBlock>
        </div>
      </section>
    </article>
  );
}
