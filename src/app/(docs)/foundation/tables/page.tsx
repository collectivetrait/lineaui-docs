import { CodeBlock } from "@/components/CodeBlock";
import { TableSelectInit } from "@/components/TableSelectInit";
import { TableOfContents } from "@/components/TableOfContents";

export default function TablesPage() {
  return (
    <article>
      <TableSelectInit />
      <section className="docs-section">
        <h1 className="text-display-2">Tables</h1>
        <p className="lead text-subtle">
          Base styling for HTML tables, plus the <code>ln-table</code> block
          for enhanced tables with sorting, selection, striping, and responsive
          stacking.
        </p>
      </section>

      <TableOfContents />

      <section className="docs-section">
        <h2>Base element defaults</h2>
        <p>
          Plain <code>&lt;table&gt;</code>, <code>&lt;th&gt;</code>, and{" "}
          <code>&lt;td&gt;</code> elements receive sensible defaults from{" "}
          <code>@layer base</code>. Tables are full-width with collapsed
          borders. Cells use box-shadow instead of real borders to stay on the
          24px rhythm grid.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<table>
  <caption>Base table — no classes needed</caption>
  <thead>
    <tr>
      <th>Token</th>
      <th>Value</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--s1</code></td>
      <td>0.5rem</td>
      <td>Tight spacing</td>
    </tr>
    <tr>
      <td><code>--s2</code></td>
      <td>1rem</td>
      <td>Default gap</td>
    </tr>
    <tr>
      <td><code>--s3</code></td>
      <td>1.5rem</td>
      <td>Section gap</td>
    </tr>
  </tbody>
</table>`}</CodeBlock>
          <div className="component-demo__preview">
            <table>
              <caption>Base table — no classes needed</caption>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Value</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>--s1</code></td>
                  <td>0.5rem</td>
                  <td>Tight spacing</td>
                </tr>
                <tr>
                  <td><code>--s2</code></td>
                  <td>1rem</td>
                  <td>Default gap</td>
                </tr>
                <tr>
                  <td><code>--s3</code></td>
                  <td>1.5rem</td>
                  <td>Section gap</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Striped table</h2>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-table ln-table--striped">
  <table class="ln-table__grid">
    <thead>
      <tr>
        <th class="ln-table__header">Product</th>
        <th class="ln-table__header ln-table__header--numeric">SKU</th>
        <th class="ln-table__header ln-table__header--numeric">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr class="ln-table__row">
        <td class="ln-table__cell">Wireless Headphones</td>
        <td class="ln-table__cell ln-table__cell--numeric ln-table__cell--mono">WH-1042</td>
        <td class="ln-table__cell ln-table__cell--numeric">$89.00</td>
      </tr>
      <tr class="ln-table__row">
        <td class="ln-table__cell">USB-C Hub</td>
        <td class="ln-table__cell ln-table__cell--numeric ln-table__cell--mono">UC-3391</td>
        <td class="ln-table__cell ln-table__cell--numeric">$45.00</td>
      </tr>
      <tr class="ln-table__row">
        <td class="ln-table__cell">Mechanical Keyboard</td>
        <td class="ln-table__cell ln-table__cell--numeric ln-table__cell--mono">MK-7780</td>
        <td class="ln-table__cell ln-table__cell--numeric">$129.00</td>
      </tr>
    </tbody>
  </table>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-table ln-table--striped">
              <table className="ln-table__grid">
                <thead>
                  <tr>
                    <th className="ln-table__header">Product</th>
                    <th className="ln-table__header ln-table__header--numeric">SKU</th>
                    <th className="ln-table__header ln-table__header--numeric">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ln-table__row">
                    <td className="ln-table__cell">Wireless Headphones</td>
                    <td className="ln-table__cell ln-table__cell--numeric ln-table__cell--mono">WH-1042</td>
                    <td className="ln-table__cell ln-table__cell--numeric">$89.00</td>
                  </tr>
                  <tr className="ln-table__row">
                    <td className="ln-table__cell">USB-C Hub</td>
                    <td className="ln-table__cell ln-table__cell--numeric ln-table__cell--mono">UC-3391</td>
                    <td className="ln-table__cell ln-table__cell--numeric">$45.00</td>
                  </tr>
                  <tr className="ln-table__row">
                    <td className="ln-table__cell">Mechanical Keyboard</td>
                    <td className="ln-table__cell ln-table__cell--numeric ln-table__cell--mono">MK-7780</td>
                    <td className="ln-table__cell ln-table__cell--numeric">$129.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Table block — full-featured</h2>
        <p>
          The <code>ln-table</code> block wraps enhanced tables with modifiers
          for divided rows, sortable headers, row selection, and pagination.
          Modifiers include <code>--divided</code>, <code>--striped</code>,{" "}
          <code>--bordered</code>, <code>--compact</code>,{" "}
          <code>--spacious</code>, <code>--sticky-header</code>, and{" "}
          <code>--sticky-first</code>.
        </p>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-table ln-table--divided">
  <table class="ln-table__grid">
    <thead>
      <tr>
        <th class="ln-table__header ln-table__select">
          <input type="checkbox" class="ln-choice__input">
        </th>
        <th class="ln-table__header">
          <button class="ln-table__sort" aria-sort="ascending">Name</button>
        </th>
        <th class="ln-table__header">Role</th>
        <th class="ln-table__header">Status</th>
        <th class="ln-table__header ln-table__header--numeric">Hours</th>
      </tr>
    </thead>
    <tbody>
      <tr class="ln-table__row" aria-selected="true">
        <td class="ln-table__cell ln-table__select">
          <input type="checkbox" class="ln-choice__input" checked>
        </td>
        <td class="ln-table__cell">
          <span class="d-flex align-items-center gap-2">
            <span class="ln-avatar ln-avatar--sm">AJ</span>
            Alice Johnson
          </span>
        </td>
        <td class="ln-table__cell">Engineer</td>
        <td class="ln-table__cell">
          <span class="ln-badge ln-badge--success">Active</span>
        </td>
        <td class="ln-table__cell ln-table__cell--numeric">142</td>
      </tr>
      <tr class="ln-table__row" aria-selected="true">
        <td class="ln-table__cell ln-table__select">
          <input type="checkbox" class="ln-choice__input" checked>
        </td>
        <td class="ln-table__cell">
          <span class="d-flex align-items-center gap-2">
            <span class="ln-avatar ln-avatar--sm">BS</span>
            Bob Smith
          </span>
        </td>
        <td class="ln-table__cell">Designer</td>
        <td class="ln-table__cell">
          <span class="ln-badge ln-badge--warning">Away</span>
        </td>
        <td class="ln-table__cell ln-table__cell--numeric">98</td>
      </tr>
      <tr class="ln-table__row">
        <td class="ln-table__cell ln-table__select">
          <input type="checkbox" class="ln-choice__input">
        </td>
        <td class="ln-table__cell">
          <span class="d-flex align-items-center gap-2">
            <span class="ln-avatar ln-avatar--sm">CL</span>
            Carol Lee
          </span>
        </td>
        <td class="ln-table__cell">Manager</td>
        <td class="ln-table__cell">
          <span class="ln-badge ln-badge--success">Active</span>
        </td>
        <td class="ln-table__cell ln-table__cell--numeric">160</td>
      </tr>
      <tr class="ln-table__row">
        <td class="ln-table__cell ln-table__select">
          <input type="checkbox" class="ln-choice__input">
        </td>
        <td class="ln-table__cell">
          <span class="d-flex align-items-center gap-2">
            <span class="ln-avatar ln-avatar--sm">DK</span>
            David Kim
          </span>
        </td>
        <td class="ln-table__cell">Developer</td>
        <td class="ln-table__cell">
          <span class="ln-badge ln-badge--danger">Offline</span>
        </td>
        <td class="ln-table__cell ln-table__cell--numeric">72</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">
          <div class="ln-table__foot">
            <span data-select-count>2 of 4 selected</span>
            <div class="ln-table__actions">
              <button class="ln-button ln-button--outline ln-button--sm" disabled>Previous</button>
              <span>Page 1 of 3</span>
              <button class="ln-button ln-button--outline ln-button--sm">Next</button>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-table ln-table--divided">
              <table className="ln-table__grid">
                <thead>
                  <tr>
                    <th className="ln-table__header ln-table__select">
                      <input type="checkbox" className="ln-choice__input" />
                    </th>
                    <th className="ln-table__header">
                      <button className="ln-table__sort" aria-sort="ascending">Name</button>
                    </th>
                    <th className="ln-table__header">Role</th>
                    <th className="ln-table__header">Status</th>
                    <th className="ln-table__header ln-table__header--numeric">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ln-table__row" aria-selected="true">
                    <td className="ln-table__cell ln-table__select">
                      <input type="checkbox" className="ln-choice__input" defaultChecked />
                    </td>
                    <td className="ln-table__cell">
                      <span className="d-flex align-items-center gap-2">
                        <span className="ln-avatar ln-avatar--sm">AJ</span>
                        Alice Johnson
                      </span>
                    </td>
                    <td className="ln-table__cell">Engineer</td>
                    <td className="ln-table__cell">
                      <span className="ln-badge ln-badge--success">Active</span>
                    </td>
                    <td className="ln-table__cell ln-table__cell--numeric">142</td>
                  </tr>
                  <tr className="ln-table__row" aria-selected="true">
                    <td className="ln-table__cell ln-table__select">
                      <input type="checkbox" className="ln-choice__input" defaultChecked />
                    </td>
                    <td className="ln-table__cell">
                      <span className="d-flex align-items-center gap-2">
                        <span className="ln-avatar ln-avatar--sm">BS</span>
                        Bob Smith
                      </span>
                    </td>
                    <td className="ln-table__cell">Designer</td>
                    <td className="ln-table__cell">
                      <span className="ln-badge ln-badge--warning">Away</span>
                    </td>
                    <td className="ln-table__cell ln-table__cell--numeric">98</td>
                  </tr>
                  <tr className="ln-table__row">
                    <td className="ln-table__cell ln-table__select">
                      <input type="checkbox" className="ln-choice__input" />
                    </td>
                    <td className="ln-table__cell">
                      <span className="d-flex align-items-center gap-2">
                        <span className="ln-avatar ln-avatar--sm">CL</span>
                        Carol Lee
                      </span>
                    </td>
                    <td className="ln-table__cell">Manager</td>
                    <td className="ln-table__cell">
                      <span className="ln-badge ln-badge--success">Active</span>
                    </td>
                    <td className="ln-table__cell ln-table__cell--numeric">160</td>
                  </tr>
                  <tr className="ln-table__row">
                    <td className="ln-table__cell ln-table__select">
                      <input type="checkbox" className="ln-choice__input" />
                    </td>
                    <td className="ln-table__cell">
                      <span className="d-flex align-items-center gap-2">
                        <span className="ln-avatar ln-avatar--sm">DK</span>
                        David Kim
                      </span>
                    </td>
                    <td className="ln-table__cell">Developer</td>
                    <td className="ln-table__cell">
                      <span className="ln-badge ln-badge--danger">Offline</span>
                    </td>
                    <td className="ln-table__cell ln-table__cell--numeric">72</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5}>
                      <div className="ln-table__foot">
                        <span data-select-count="">2 of 4 selected</span>
                        <div className="ln-table__actions">
                          <button className="ln-button ln-button--outline ln-button--sm" disabled>Previous</button>
                          <span>Page 1 of 3</span>
                          <button className="ln-button ln-button--outline ln-button--sm">Next</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
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
              <td><code>.ln-table</code></td>
              <td>Table block container</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table__grid</code></td>
              <td>The <code>&lt;table&gt;</code> element</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table__header</code></td>
              <td>Header cell (<code>&lt;th&gt;</code>)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table__cell</code></td>
              <td>Body cell (<code>&lt;td&gt;</code>)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table__row</code></td>
              <td>Body row (<code>&lt;tr&gt;</code>)</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table__foot</code></td>
              <td>Footer cell with pagination/selection count</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table__select</code></td>
              <td>Checkbox column cell</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table__sort</code></td>
              <td>Sortable header button</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table--divided</code></td>
              <td>Row dividers between cells</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table--striped</code></td>
              <td>Alternating row backgrounds</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table--bordered</code></td>
              <td>Borders on all cells</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table--compact</code></td>
              <td>Reduced cell padding</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table--spacious</code></td>
              <td>Increased cell padding</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table--sticky-header</code></td>
              <td>Sticky column headers</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table--sticky-first</code></td>
              <td>Sticky first column</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>.ln-table--stack</code></td>
              <td>Card layout below md breakpoint</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
