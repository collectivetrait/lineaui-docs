import { CodeBlock } from "@/components/CodeBlock";

export default function SkeletonPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Skeleton</h1>
        <p className="lead text-subtle">
          Pulsing placeholder shapes for loading content. Use <code>__line</code> for
          text, <code>__circle</code> for avatars, and <code>__block</code> for
          images or cards.
        </p>
      </section>

      <section className="docs-section">
        <h2>Text and shapes</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-skeleton">
  <div class="ln-skeleton__circle" style="width: 48px"></div>
  <div class="ln-skeleton__line" style="width: 80%"></div>
  <div class="ln-skeleton__line" style="width: 60%"></div>
  <div class="ln-skeleton__line" style="width: 70%"></div>
  <div class="ln-skeleton__block" style="height: 120px"></div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-skeleton">
              <div className="ln-skeleton__circle" style={{ width: "48px" }}></div>
              <div className="ln-skeleton__line" style={{ width: "80%" }}></div>
              <div className="ln-skeleton__line" style={{ width: "60%" }}></div>
              <div className="ln-skeleton__line" style={{ width: "70%" }}></div>
              <div className="ln-skeleton__block" style={{ height: "120px" }}></div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
