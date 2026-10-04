import { CodeBlock } from "@/components/CodeBlock";

const BLOCKS = [
  { name: "Stat", class: "ln-stat", description: "Key metric display with label, value, delta, and optional sparkline." },
  { name: "Data List", class: "ln-data-list", description: "Key-value pairs in vertical or horizontal layout." },
  { name: "Toolbar", class: "ln-toolbar", description: "Horizontal action bar with grouping, search, and count." },
  { name: "Timeline", class: "ln-timeline", description: "Vertical sequence of events with markers and connector lines." },
];

export default function DashboardPatterns() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Dashboard</h1>
        <p className="lead text-subtle">
          Dashboard blocks display key metrics, key-value pairs,
          action toolbars, and chronological timelines for admin and analytics
          interfaces.
        </p>
      </section>

      {/* --- Stat --- */}
      <section className="docs-section">
        <h2>Stat</h2>
        <p>
          Key metric display with label, large value, delta indicator, and
          optional unit. The default style includes a border and background.
          Use <code>--flat</code> to remove the container,{" "}
          <code>--inline</code> for horizontal layout. Delta modifiers:{" "}
          <code>--positive</code> and <code>--negative</code>.
        </p>

        <h3>Default stat</h3>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-stat">
  <span class="ln-stat__label">Revenue</span>
  <span class="ln-stat__value">$48,290<span class="ln-stat__unit">/mo</span></span>
  <span class="ln-stat__delta ln-stat__delta--positive">
    <span>+12.5%</span>
    <span>vs. last month</span>
  </span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-stat">
              <span className="ln-stat__label">Revenue</span>
              <span className="ln-stat__value">$48,290<span className="ln-stat__unit">/mo</span></span>
              <span className="ln-stat__delta ln-stat__delta--positive">
                <span>+12.5%</span>
                <span>vs. last month</span>
              </span>
            </div>
          </div>
        </div>

        <h3>Flat modifier with negative delta</h3>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-stat ln-stat--flat">
  <span class="ln-stat__label">Users</span>
  <span class="ln-stat__value">3,841</span>
  <span class="ln-stat__delta ln-stat__delta--negative">
    <span>-2.1%</span>
    <span>vs. last month</span>
  </span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-stat ln-stat--flat">
              <span className="ln-stat__label">Users</span>
              <span className="ln-stat__value">3,841</span>
              <span className="ln-stat__delta ln-stat__delta--negative">
                <span>-2.1%</span>
                <span>vs. last month</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Data List --- */}
      <section className="docs-section">
        <h2>Data List</h2>
        <p>
          Key-value pairs displayed vertically or horizontally. Modifiers
          include <code>--horizontal</code>, <code>--divided</code>,{" "}
          <code>--striped</code>, and <code>--compact</code>.
        </p>

        <h3>Horizontal divided</h3>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-data-list ln-data-list--horizontal ln-data-list--divided">
  <div class="ln-data-list__item">
    <span class="ln-data-list__term">Name</span>
    <span class="ln-data-list__value">Alice Johnson</span>
  </div>
  <div class="ln-data-list__item">
    <span class="ln-data-list__term">Email</span>
    <span class="ln-data-list__value">alice@example.com</span>
  </div>
  <div class="ln-data-list__item">
    <span class="ln-data-list__term">Role</span>
    <span class="ln-data-list__value">Administrator</span>
  </div>
  <div class="ln-data-list__item">
    <span class="ln-data-list__term">Joined</span>
    <span class="ln-data-list__value">March 15, 2024</span>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-data-list ln-data-list--horizontal ln-data-list--divided">
              <div className="ln-data-list__item">
                <span className="ln-data-list__term">Name</span>
                <span className="ln-data-list__value">Alice Johnson</span>
              </div>
              <div className="ln-data-list__item">
                <span className="ln-data-list__term">Email</span>
                <span className="ln-data-list__value">alice@example.com</span>
              </div>
              <div className="ln-data-list__item">
                <span className="ln-data-list__term">Role</span>
                <span className="ln-data-list__value">Administrator</span>
              </div>
              <div className="ln-data-list__item">
                <span className="ln-data-list__term">Joined</span>
                <span className="ln-data-list__value">March 15, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Toolbar --- */}
      <section className="docs-section">
        <h2>Toolbar</h2>
        <p>
          Horizontal action bar with start/end grouping. Contains button groups,
          search fields, counts, and vertical dividers. Supports{" "}
          <code>--bulk</code>, <code>--sticky</code>, and{" "}
          <code>--compact</code> modifiers.
        </p>

        <h3>Default toolbar</h3>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-toolbar">
  <div class="ln-toolbar__start">
    <div class="ln-toolbar__group">
      <button class="ln-button ln-button--outline ln-button--sm">Filter</button>
      <button class="ln-button ln-button--outline ln-button--sm">Sort</button>
    </div>
    <div class="ln-toolbar__divider"></div>
    <span class="ln-toolbar__count">24 results</span>
  </div>
  <div class="ln-toolbar__end">
    <button class="ln-button ln-button--solid ln-button--sm">Export</button>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-toolbar">
              <div className="ln-toolbar__start">
                <div className="ln-toolbar__group">
                  <button className="ln-button ln-button--outline ln-button--sm">Filter</button>
                  <button className="ln-button ln-button--outline ln-button--sm">Sort</button>
                </div>
                <div className="ln-toolbar__divider"></div>
                <span className="ln-toolbar__count">24 results</span>
              </div>
              <div className="ln-toolbar__end">
                <button className="ln-button ln-button--solid ln-button--sm">Export</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Timeline --- */}
      <section className="docs-section">
        <h2>Timeline</h2>
        <p>
          Vertical sequence of events with circular markers and connector lines.
          Add role classes to items (e.g.{" "}
          <code>ln-timeline__item--success</code>) to color markers.
        </p>

        <h3>Default timeline</h3>
        <div className="component-demo">
          <CodeBlock language="html">{`<div class="ln-timeline">
  <div class="ln-timeline__item">
    <div class="ln-timeline__marker ln-timeline__marker--success"></div>
    <div class="ln-timeline__content">
      <div class="ln-timeline__title">Order shipped</div>
      <div class="ln-timeline__time">Sep 28, 2026 · 2:30 PM</div>
      <div class="ln-timeline__body">Package picked up by carrier.</div>
    </div>
  </div>
  <div class="ln-timeline__item">
    <div class="ln-timeline__marker ln-timeline__marker--primary"></div>
    <div class="ln-timeline__content">
      <div class="ln-timeline__title">Payment confirmed</div>
      <div class="ln-timeline__time">Sep 27, 2026 · 10:15 AM</div>
      <div class="ln-timeline__body">Payment of $129.00 processed.</div>
    </div>
  </div>
  <div class="ln-timeline__item">
    <div class="ln-timeline__marker"></div>
    <div class="ln-timeline__content">
      <div class="ln-timeline__title">Order placed</div>
      <div class="ln-timeline__time">Sep 27, 2026 · 9:42 AM</div>
      <div class="ln-timeline__body">Order #4821 created by customer.</div>
    </div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-timeline">
              <div className="ln-timeline__item">
                <div className="ln-timeline__marker ln-timeline__marker--success"></div>
                <div className="ln-timeline__content">
                  <div className="ln-timeline__title">Order shipped</div>
                  <div className="ln-timeline__time">Sep 28, 2026 · 2:30 PM</div>
                  <div className="ln-timeline__body">Package picked up by carrier.</div>
                </div>
              </div>
              <div className="ln-timeline__item">
                <div className="ln-timeline__marker ln-timeline__marker--primary"></div>
                <div className="ln-timeline__content">
                  <div className="ln-timeline__title">Payment confirmed</div>
                  <div className="ln-timeline__time">Sep 27, 2026 · 10:15 AM</div>
                  <div className="ln-timeline__body">Payment of $129.00 processed.</div>
                </div>
              </div>
              <div className="ln-timeline__item">
                <div className="ln-timeline__marker"></div>
                <div className="ln-timeline__content">
                  <div className="ln-timeline__title">Order placed</div>
                  <div className="ln-timeline__time">Sep 27, 2026 · 9:42 AM</div>
                  <div className="ln-timeline__body">Order #4821 created by customer.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Reference Table --- */}
      <section className="docs-section">
        <h2>Block reference</h2>
        <div className="docs-scroll-x">
          <table>
            <thead>
              <tr>
                <th>Block</th>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {BLOCKS.map((block) => (
                <tr key={block.class}>
                  <td><strong>{block.name}</strong></td>
                  <td><code>{block.class}</code></td>
                  <td>{block.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
