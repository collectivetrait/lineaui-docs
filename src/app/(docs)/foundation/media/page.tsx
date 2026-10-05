import { CodeBlock } from "@/components/CodeBlock";
import { TableOfContents } from "@/components/TableOfContents";

export default function MediaPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Media</h1>
        <p className="lead text-subtle">
          Base responsive behaviour for images and video, plus the{" "}
          <code>ln-media</code> block for framed media with aspect ratios
          and captions. Media elements have intrinsic dimensions governed by
          their source files, so they will generally break vertical rhythm.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Base element defaults</h2>
        <p>
          The base layer makes all <code>&lt;img&gt;</code> and{" "}
          <code>&lt;video&gt;</code> elements responsive by default. They
          scale down to fit their container while preserving their intrinsic
          aspect ratio.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<!-- Images and video are responsive by default — no classes needed -->
<img src="/placeholder.svg" alt="Responsive image">
<video src="/sample.mp4" controls>…</video>`}</CodeBlock>
          <div className="component-demo__preview">
            <img src="/placeholder.svg" alt="Responsive image" />
          </div>
        </div>
        <CodeBlock language="css">{`/* Base layer — applied automatically */
img, video {
  max-inline-size: 100%;
  block-size: auto;
}`}</CodeBlock>
      </section>

      <section className="docs-section">
        <h2>Media block with caption</h2>
        <p>
          A container for images, video, and embeds with aspect-ratio control
          and captions. The <code>__frame</code> element holds the media and
          applies ratios and overflow clipping.
        </p>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-media ln-media--bordered">
  <div class="ln-media__frame">
    <img class="ln-media__img" src="/placeholder.svg" alt="Placeholder image">
  </div>
  <p class="ln-media__caption">A bordered media block with a descriptive caption below.</p>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-media ln-media--bordered">
              <div className="ln-media__frame">
                <img className="ln-media__img" src="/placeholder.svg" alt="Placeholder image" />
              </div>
              <p className="ln-media__caption">A bordered media block with a descriptive caption below.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Aspect ratios</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-media ln-media--ratio-1x1 ln-media--bordered">
  <div class="ln-media__frame">
    <img class="ln-media__img" src="/placeholder.svg" alt="1:1 ratio">
  </div>
</div>

<div class="ln-media ln-media--ratio-4x3 ln-media--bordered">
  <div class="ln-media__frame">
    <img class="ln-media__img" src="/placeholder.svg" alt="4:3 ratio">
  </div>
</div>

<div class="ln-media ln-media--ratio-3x2 ln-media--bordered">
  <div class="ln-media__frame">
    <img class="ln-media__img" src="/placeholder.svg" alt="3:2 ratio">
  </div>
</div>

<div class="ln-media ln-media--ratio-16x9 ln-media--bordered">
  <div class="ln-media__frame">
    <img class="ln-media__img" src="/placeholder.svg" alt="16:9 ratio">
  </div>
</div>

<div class="ln-media ln-media--ratio-21x9 ln-media--bordered">
  <div class="ln-media__frame">
    <img class="ln-media__img" src="/placeholder.svg" alt="21:9 ratio">
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-media ln-media--ratio-1x1 ln-media--bordered">
              <div className="ln-media__frame">
                <img className="ln-media__img" src="/placeholder.svg" alt="1:1 ratio" />
              </div>
            </div>
            <div className="ln-media ln-media--ratio-4x3 ln-media--bordered">
              <div className="ln-media__frame">
                <img className="ln-media__img" src="/placeholder.svg" alt="4:3 ratio" />
              </div>
            </div>
            <div className="ln-media ln-media--ratio-3x2 ln-media--bordered">
              <div className="ln-media__frame">
                <img className="ln-media__img" src="/placeholder.svg" alt="3:2 ratio" />
              </div>
            </div>
            <div className="ln-media ln-media--ratio-16x9 ln-media--bordered">
              <div className="ln-media__frame">
                <img className="ln-media__img" src="/placeholder.svg" alt="16:9 ratio" />
              </div>
            </div>
            <div className="ln-media ln-media--ratio-21x9 ln-media--bordered">
              <div className="ln-media__frame">
                <img className="ln-media__img" src="/placeholder.svg" alt="21:9 ratio" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="docs-section">
        <h2>Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
              <th>Responsive</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>.ln-media</code></td>
              <td>Media block container</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-media__frame</code></td>
              <td>Frame wrapper for media content</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-media__img</code></td>
              <td>Image inside frame</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-media__caption</code></td>
              <td>Caption text below frame</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-media--bordered</code></td>
              <td>Adds border to frame</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-media--ratio-1x1</code></td>
              <td>1:1 aspect ratio</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-media--ratio-4x3</code></td>
              <td>4:3 aspect ratio</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-media--ratio-3x2</code></td>
              <td>3:2 aspect ratio</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-media--ratio-16x9</code></td>
              <td>16:9 aspect ratio</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-media--ratio-21x9</code></td>
              <td>21:9 aspect ratio</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
