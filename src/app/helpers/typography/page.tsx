import { CodeBlock } from "@/components/CodeBlock";

export default function TypographyHelpers() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Typography helpers</h1>
        <p className="lead text-subtle">
          Typography helper classes apply heading and text size styles to any
          element without affecting margins or semantics.
        </p>
      </section>

      <section className="docs-section">
        <h2>Heading classes</h2>
        <p>
          Apply the visual style of any heading level to any element. Classes{" "}
          <code>.h1</code> through <code>.h6</code> set font-family,
          font-size, line-height, and font-weight to match the corresponding
          heading.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<p class="h1">Heading 1 style</p>
<p class="h2">Heading 2 style</p>
<p class="h3">Heading 3 style</p>
<p class="h4">Heading 4 style</p>
<p class="h5">Heading 5 style</p>
<p class="h6">Heading 6 style</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="h1">Heading 1 style</p>
            <p className="h2">Heading 2 style</p>
            <p className="h3">Heading 3 style</p>
            <p className="h4">Heading 4 style</p>
            <p className="h5">Heading 5 style</p>
            <p className="h6">Heading 6 style</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Display text</h2>
        <p>
          Display classes create larger, more prominent text for hero sections
          and page titles.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<p class="text-display-1">Display 1</p>
<p class="text-display-2">Display 2</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="text-display-1">Display 1</p>
            <p className="text-display-2">Display 2</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Lead text</h2>
        <p>
          The <code>.text-lead</code> class creates a larger introductory
          paragraph style.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<p class="text-lead">This is lead text, typically used for introductory paragraphs that need to stand out from body copy.</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="text-lead">This is lead text, typically used for introductory paragraphs that need to stand out from body copy.</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Body text sizes</h2>
        <p>
          Adjust body text size with <code>.text-body-lg</code>,{" "}
          <code>.text-body-sm</code>, and <code>.text-body-xs</code>.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<p class="text-body-lg">Body large — slightly larger than the default body text.</p>
<p>Default body text for comparison.</p>
<p class="text-body-sm">Body small — a step below the default size.</p>
<p class="text-body-xs">Body extra small — the smallest body text size.</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="text-body-lg">Body large — slightly larger than the default body text.</p>
            <p>Default body text for comparison.</p>
            <p className="text-body-sm">Body small — a step below the default size.</p>
            <p className="text-body-xs">Body extra small — the smallest body text size.</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Meta text</h2>
        <p>
          The <code>.text-meta</code> class is for small supporting text such
          as timestamps, bylines, and metadata.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<p class="text-meta">Published on Oct 4, 2026 · 5 min read</p>`}</CodeBlock>
          <div className="component-demo__preview">
            <p className="text-meta">Published on Oct 4, 2026 · 5 min read</p>
          </div>
        </div>
      </section>
    </article>
  );
}
