import type { Metadata } from "next";

import { CodeBlock } from "@/components/CodeBlock";
import { QuantityInit } from "@/components/QuantityInit";
import { GalleryInit } from "@/components/GalleryInit";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Product listing and detail page patterns built with linea-ui card, grid, and form components.",
};

export default function EcommercePatterns() {
  return (
    <article>
      <QuantityInit />
      <GalleryInit />
      <section className="docs-section">
        <h1 className="text-display-2">E-commerce</h1>
        <p className="lead text-subtle">
          E-commerce blocks cover product display, pricing, variant selection,
          cart management, and checkout summaries. They compose with content and
          action blocks to build complete shopping experiences.
        </p>
      </section>

      <TableOfContents />

      {/* --- Price --- */}
      <section className="docs-section">
        <h2>Price</h2>
        <p>
          Formatted price display with tabular numerals. Supports sale pricing
          with original/discount, currency symbols, and subscription periods.
        </p>

        <h3>Default price</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<span class="ln-price">
  <span class="ln-price__currency">$</span>
  <span class="ln-price__current">49.99</span>
</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <span className="ln-price">
              <span className="ln-price__currency">$</span>
              <span className="ln-price__current">49.99</span>
            </span>
          </div>
        </div>

        <h3>Sale price</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<span class="ln-price ln-price--sale">
  <span class="ln-price__currency">$</span>
  <span class="ln-price__current">29.99</span>
  <span class="ln-price__original">$49.99</span>
  <span class="ln-price__discount">-40%</span>
</span>`}</CodeBlock>
          <div className="component-demo__preview">
            <span className="ln-price ln-price--sale">
              <span className="ln-price__currency">$</span>
              <span className="ln-price__current">29.99</span>
              <span className="ln-price__original">$49.99</span>
              <span className="ln-price__discount">-40%</span>
            </span>
          </div>
        </div>
      </section>

      {/* --- Rating --- */}
      <section className="docs-section">
        <h2>Rating</h2>
        <p>
          Star rating display with optional numeric value and review count.
          Set <code>--rating</code> (0–5) on the stars element to control
          fill level. Override <code>--star-color</code> to change the fill
          color.
        </p>

        <h3>Default rating</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-rating">
  <div class="ln-rating__stars" style="--rating: 4"></div>
  <span class="ln-rating__value">4.0</span>
  <span class="ln-rating__count">(128 reviews)</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-rating">
              <div className="ln-rating__stars" style={{ "--rating": 4 } as React.CSSProperties}></div>
              <span className="ln-rating__value">4.0</span>
              <span className="ln-rating__count">(128 reviews)</span>
            </div>
          </div>
        </div>

        <h3>Custom color</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-rating">
  <div class="ln-rating__stars" style="--rating: 3.5; --star-color: var(--warning-text)"></div>
  <span class="ln-rating__value">3.5</span>
  <span class="ln-rating__count">(42 reviews)</span>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-rating">
              <div className="ln-rating__stars" style={{ "--rating": 3.5, "--star-color": "var(--warning-text)" } as React.CSSProperties}></div>
              <span className="ln-rating__value">3.5</span>
              <span className="ln-rating__count">(42 reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Swatch --- */}
      <section className="docs-section">
        <h2>Swatch</h2>
        <p>
          Variant selectors for color, text, and image options. Uses visually
          hidden radio/checkbox inputs with custom styled labels. Set the{" "}
          <code>--c</code> custom property to control each option&rsquo;s color.
        </p>

        <h3>Color swatches</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-swatch">
  <label class="ln-swatch__option">
    <input class="ln-swatch__input" type="radio" name="color" value="black" checked>
    <span class="ln-swatch__color" style="--c: #000"></span>
  </label>
  <label class="ln-swatch__option">
    <input class="ln-swatch__input" type="radio" name="color" value="white">
    <span class="ln-swatch__color" style="--c: #fff"></span>
  </label>
  <label class="ln-swatch__option">
    <input class="ln-swatch__input" type="radio" name="color" value="blue">
    <span class="ln-swatch__color" style="--c: #3b82f6"></span>
  </label>
  <label class="ln-swatch__option">
    <input class="ln-swatch__input" type="radio" name="color" value="red">
    <span class="ln-swatch__color" style="--c: #ef4444"></span>
  </label>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-swatch">
              <label className="ln-swatch__option">
                <input className="ln-swatch__input" type="radio" name="color-demo" defaultValue="black" defaultChecked />
                <span className="ln-swatch__color" style={{ "--c": "#000" } as React.CSSProperties}></span>
              </label>
              <label className="ln-swatch__option">
                <input className="ln-swatch__input" type="radio" name="color-demo" defaultValue="white" />
                <span className="ln-swatch__color" style={{ "--c": "#fff" } as React.CSSProperties}></span>
              </label>
              <label className="ln-swatch__option">
                <input className="ln-swatch__input" type="radio" name="color-demo" defaultValue="blue" />
                <span className="ln-swatch__color" style={{ "--c": "#3b82f6" } as React.CSSProperties}></span>
              </label>
              <label className="ln-swatch__option">
                <input className="ln-swatch__input" type="radio" name="color-demo" defaultValue="red" />
                <span className="ln-swatch__color" style={{ "--c": "#ef4444" } as React.CSSProperties}></span>
              </label>
            </div>
          </div>
        </div>

        <h3>Text swatches</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-swatch ln-swatch--text">
  <label class="ln-swatch__option">
    <input class="ln-swatch__input" type="radio" name="size" value="s" checked>
    <span class="ln-swatch__color">S</span>
  </label>
  <label class="ln-swatch__option">
    <input class="ln-swatch__input" type="radio" name="size" value="m">
    <span class="ln-swatch__color">M</span>
  </label>
  <label class="ln-swatch__option">
    <input class="ln-swatch__input" type="radio" name="size" value="l">
    <span class="ln-swatch__color">L</span>
  </label>
  <label class="ln-swatch__option">
    <input class="ln-swatch__input" type="radio" name="size" value="xl">
    <span class="ln-swatch__color">XL</span>
  </label>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-swatch ln-swatch--text">
              <label className="ln-swatch__option">
                <input className="ln-swatch__input" type="radio" name="size-demo" defaultValue="s" defaultChecked />
                <span className="ln-swatch__color">S</span>
              </label>
              <label className="ln-swatch__option">
                <input className="ln-swatch__input" type="radio" name="size-demo" defaultValue="m" />
                <span className="ln-swatch__color">M</span>
              </label>
              <label className="ln-swatch__option">
                <input className="ln-swatch__input" type="radio" name="size-demo" defaultValue="l" />
                <span className="ln-swatch__color">L</span>
              </label>
              <label className="ln-swatch__option">
                <input className="ln-swatch__input" type="radio" name="size-demo" defaultValue="xl" />
                <span className="ln-swatch__color">XL</span>
              </label>
            </div>
          </div>
        </div>

        <h3>Text swatches with custom colors</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-swatch ln-swatch--text">
  <label class="ln-swatch__option">
    <input class="ln-swatch__input" type="radio" name="plan" value="basic" checked>
    <span class="ln-swatch__color" style="--c: #22c55e">Basic</span>
  </label>
  <label class="ln-swatch__option">
    <input class="ln-swatch__input" type="radio" name="plan" value="pro">
    <span class="ln-swatch__color" style="--c: #a855f7">Pro</span>
  </label>
  <label class="ln-swatch__option">
    <input class="ln-swatch__input" type="radio" name="plan" value="enterprise">
    <span class="ln-swatch__color" style="--c: #f97316">Enterprise</span>
  </label>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-swatch ln-swatch--text">
              <label className="ln-swatch__option">
                <input className="ln-swatch__input" type="radio" name="plan-demo" defaultValue="basic" defaultChecked />
                <span className="ln-swatch__color" style={{ "--c": "#22c55e" } as React.CSSProperties}>Basic</span>
              </label>
              <label className="ln-swatch__option">
                <input className="ln-swatch__input" type="radio" name="plan-demo" defaultValue="pro" />
                <span className="ln-swatch__color" style={{ "--c": "#a855f7" } as React.CSSProperties}>Pro</span>
              </label>
              <label className="ln-swatch__option">
                <input className="ln-swatch__input" type="radio" name="plan-demo" defaultValue="enterprise" />
                <span className="ln-swatch__color" style={{ "--c": "#f97316" } as React.CSSProperties}>Enterprise</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* --- Quantity --- */}
      <section className="docs-section">
        <h2>Quantity</h2>
        <p>
          Increment/decrement input for cart quantities. Add{" "}
          <code>data-ln-quantity</code> to wire up the buttons automatically.
          Respects <code>min</code>, <code>max</code>, and <code>step</code>{" "}
          attributes on the input.
        </p>

        <h3>Default quantity</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-quantity" data-ln-quantity>
  <button class="ln-quantity__decrement" type="button">−</button>
  <input class="ln-quantity__input" type="number" value="1" min="1" max="10">
  <button class="ln-quantity__increment" type="button">+</button>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-quantity" data-ln-quantity="">
              <button className="ln-quantity__decrement" type="button">−</button>
              <input className="ln-quantity__input" type="number" defaultValue="1" min="1" max="10" />
              <button className="ln-quantity__increment" type="button">+</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Gallery --- */}
      <section className="docs-section">
        <h2>Gallery</h2>
        <p>
          Image gallery with scroll-snap slides, thumbnail strip, and dot
          indicators. Add <code>data-ln-gallery</code> to sync thumbnail
          selection with the visible slide.
        </p>

        <h3>Gallery with thumbnails</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-gallery" data-ln-gallery>
  <div class="ln-gallery__main">
    <div class="ln-gallery__slide">
      <img src="/placeholder-1.svg" alt="Product view 1">
    </div>
    <div class="ln-gallery__slide">
      <img src="/placeholder-2.svg" alt="Product view 2">
    </div>
    <div class="ln-gallery__slide">
      <img src="/placeholder-3.svg" alt="Product view 3">
    </div>
  </div>
  <div class="ln-gallery__thumbs">
    <button class="ln-gallery__thumb is-active" aria-selected="true">
      <img src="/placeholder-1.svg" alt="Thumb 1">
    </button>
    <button class="ln-gallery__thumb" aria-selected="false">
      <img src="/placeholder-2.svg" alt="Thumb 2">
    </button>
    <button class="ln-gallery__thumb" aria-selected="false">
      <img src="/placeholder-3.svg" alt="Thumb 3">
    </button>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-gallery" data-ln-gallery="">
              <div className="ln-gallery__main">
                <div className="ln-gallery__slide">
                  <img src="/placeholder-1.svg" alt="Product view 1" />
                </div>
                <div className="ln-gallery__slide">
                  <img src="/placeholder-2.svg" alt="Product view 2" />
                </div>
                <div className="ln-gallery__slide">
                  <img src="/placeholder-3.svg" alt="Product view 3" />
                </div>
              </div>
              <div className="ln-gallery__thumbs">
                <button className="ln-gallery__thumb is-active" aria-selected="true">
                  <img src="/placeholder-1.svg" alt="Thumb 1" />
                </button>
                <button className="ln-gallery__thumb" aria-selected="false">
                  <img src="/placeholder-2.svg" alt="Thumb 2" />
                </button>
                <button className="ln-gallery__thumb" aria-selected="false">
                  <img src="/placeholder-3.svg" alt="Thumb 3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Product Card --- */}
      <section className="docs-section">
        <h2>Product Card</h2>
        <p>
          Commerce-ready card with media area, vendor label, title, price,
          and actions. Supports aspect ratio modifiers, badges, and sold-out
          state.
        </p>

        <h3>Default product card</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-product-card">
  <div class="ln-product-card__media">
    <div class="ln-product-card__img">
      <div class="docs-placeholder docs-placeholder--fill"></div>
    </div>
  </div>
  <div class="ln-product-card__body">
    <span class="ln-product-card__vendor">Acme Co</span>
    <h3 class="ln-product-card__title">Classic T-Shirt</h3>
    <span class="ln-price">
      <span class="ln-price__currency">$</span>
      <span class="ln-price__current">29.00</span>
    </span>
  </div>
  <div class="ln-product-card__actions">
    <button class="ln-button ln-button--solid ln-button--block">Add to cart</button>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--xs">
            <div className="ln-product-card">
              <div className="ln-product-card__media">
                <div className="ln-product-card__img">
                  <div className="docs-placeholder docs-placeholder--fill"></div>
                </div>
              </div>
              <div className="ln-product-card__body">
                <span className="ln-product-card__vendor">Acme Co</span>
                <h3 className="ln-product-card__title">Classic T-Shirt</h3>
                <span className="ln-price">
                  <span className="ln-price__currency">$</span>
                  <span className="ln-price__current">29.00</span>
                </span>
              </div>
              <div className="ln-product-card__actions">
                <button className="ln-button ln-button--solid ln-button--block">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Line Item --- */}
      <section className="docs-section">
        <h2>Line Item</h2>
        <p>
          Cart or order row with image thumbnail, product details, price, and
          remove button. Uses a 3-column grid:{" "}
          <code>4rem 1fr auto</code>. Group multiple items for a cart list —
          borders separate them automatically.
        </p>

        <h3>Default line item</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-line-item">
  <div class="ln-line-item__media">
    <div class="docs-placeholder docs-placeholder--fill"></div>
  </div>
  <div class="ln-line-item__body">
    <div class="ln-line-item__title">Classic T-Shirt</div>
    <div class="ln-line-item__meta">Black / M</div>
  </div>
  <div class="ln-line-item__side">
    <div class="ln-line-item__price">$58.00</div>
    <button class="ln-line-item__remove" type="button" aria-label="Remove">&times;</button>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div className="ln-line-item">
              <div className="ln-line-item__media">
                <div className="docs-placeholder docs-placeholder--fill"></div>
              </div>
              <div className="ln-line-item__body">
                <div className="ln-line-item__title">Classic T-Shirt</div>
                <div className="ln-line-item__meta">Black / M</div>
              </div>
              <div className="ln-line-item__side">
                <div className="ln-line-item__price">$58.00</div>
                <button className="ln-line-item__remove" type="button" aria-label="Remove">&times;</button>
              </div>
            </div>
          </div>
        </div>

        <h3>Multiple line items</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div>
  <div class="ln-line-item">
    <div class="ln-line-item__media">
      <div class="docs-placeholder docs-placeholder--fill"></div>
    </div>
    <div class="ln-line-item__body">
      <div class="ln-line-item__title">Classic T-Shirt</div>
      <div class="ln-line-item__meta">Black / M · Qty 2</div>
    </div>
    <div class="ln-line-item__side">
      <div class="ln-line-item__price">$58.00</div>
      <button class="ln-line-item__remove" type="button" aria-label="Remove">&times;</button>
    </div>
  </div>
  <div class="ln-line-item">
    <div class="ln-line-item__media">
      <div class="docs-placeholder docs-placeholder--fill"></div>
    </div>
    <div class="ln-line-item__body">
      <div class="ln-line-item__title">Slim Fit Jeans</div>
      <div class="ln-line-item__meta">Indigo / 32</div>
    </div>
    <div class="ln-line-item__side">
      <div class="ln-line-item__price">$79.00</div>
      <button class="ln-line-item__remove" type="button" aria-label="Remove">&times;</button>
    </div>
  </div>
  <div class="ln-line-item">
    <div class="ln-line-item__media">
      <div class="docs-placeholder docs-placeholder--fill"></div>
    </div>
    <div class="ln-line-item__body">
      <div class="ln-line-item__title">Canvas Sneakers</div>
      <div class="ln-line-item__meta">White / 10</div>
    </div>
    <div class="ln-line-item__side">
      <div class="ln-line-item__price">$65.00</div>
      <button class="ln-line-item__remove" type="button" aria-label="Remove">&times;</button>
    </div>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview">
            <div>
              <div className="ln-line-item">
                <div className="ln-line-item__media">
                  <div className="docs-placeholder docs-placeholder--fill"></div>
                </div>
                <div className="ln-line-item__body">
                  <div className="ln-line-item__title">Classic T-Shirt</div>
                  <div className="ln-line-item__meta">Black / M · Qty 2</div>
                </div>
                <div className="ln-line-item__side">
                  <div className="ln-line-item__price">$58.00</div>
                  <button className="ln-line-item__remove" type="button" aria-label="Remove">&times;</button>
                </div>
              </div>
              <div className="ln-line-item">
                <div className="ln-line-item__media">
                  <div className="docs-placeholder docs-placeholder--fill"></div>
                </div>
                <div className="ln-line-item__body">
                  <div className="ln-line-item__title">Slim Fit Jeans</div>
                  <div className="ln-line-item__meta">Indigo / 32</div>
                </div>
                <div className="ln-line-item__side">
                  <div className="ln-line-item__price">$79.00</div>
                  <button className="ln-line-item__remove" type="button" aria-label="Remove">&times;</button>
                </div>
              </div>
              <div className="ln-line-item">
                <div className="ln-line-item__media">
                  <div className="docs-placeholder docs-placeholder--fill"></div>
                </div>
                <div className="ln-line-item__body">
                  <div className="ln-line-item__title">Canvas Sneakers</div>
                  <div className="ln-line-item__meta">White / 10</div>
                </div>
                <div className="ln-line-item__side">
                  <div className="ln-line-item__price">$65.00</div>
                  <button className="ln-line-item__remove" type="button" aria-label="Remove">&times;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Order Summary --- */}
      <section className="docs-section">
        <h2>Order Summary</h2>
        <p>
          Checkout totals panel with line rows for subtotal, shipping, tax,
          and a bold total. Includes an actions area for the checkout button.
        </p>

        <h3>Default order summary</h3>
        <div className="component-demo shadow-2">
          <CodeBlock language="html">{`<div class="ln-order-summary">
  <div class="ln-order-summary__header">Order Summary</div>
  <div class="ln-order-summary__row">
    <span>Subtotal</span>
    <span>$87.00</span>
  </div>
  <div class="ln-order-summary__row">
    <span>Shipping</span>
    <span>$5.99</span>
  </div>
  <div class="ln-order-summary__row">
    <span>Tax</span>
    <span>$7.44</span>
  </div>
  <div class="ln-order-summary__total">
    <span>Total</span>
    <span>$100.43</span>
  </div>
  <div class="ln-order-summary__actions">
    <button class="ln-button ln-button--solid ln-button--block ln-button--lg">Checkout</button>
  </div>
</div>`}</CodeBlock>
          <div className="component-demo__preview component-demo__preview--sm">
            <div className="ln-order-summary">
              <div className="ln-order-summary__header">Order Summary</div>
              <div className="ln-order-summary__row">
                <span>Subtotal</span>
                <span>$87.00</span>
              </div>
              <div className="ln-order-summary__row">
                <span>Shipping</span>
                <span>$5.99</span>
              </div>
              <div className="ln-order-summary__row">
                <span>Tax</span>
                <span>$7.44</span>
              </div>
              <div className="ln-order-summary__total">
                <span>Total</span>
                <span>$100.43</span>
              </div>
              <div className="ln-order-summary__actions">
                <button className="ln-button ln-button--solid ln-button--block ln-button--lg">Checkout</button>
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
            <tr><td><code>.ln-price</code></td><td>Formatted price display</td><td>No</td></tr>
            <tr><td><code>.ln-price--sale</code></td><td>Sale price layout with original and discount</td><td>No</td></tr>
            <tr><td><code>.ln-price--sm</code></td><td>Small size variant</td><td>No</td></tr>
            <tr><td><code>.ln-price--lg</code></td><td>Large size variant</td><td>No</td></tr>
            <tr><td><code>.ln-rating</code></td><td>Star rating display</td><td>No</td></tr>
            <tr><td><code>.ln-rating--compact</code></td><td>Compact rating layout</td><td>No</td></tr>
            <tr><td><code>.ln-swatch</code></td><td>Variant selector group</td><td>No</td></tr>
            <tr><td><code>.ln-swatch--text</code></td><td>Text label swatches</td><td>No</td></tr>
            <tr><td><code>.ln-swatch--image</code></td><td>Image swatches</td><td>No</td></tr>
            <tr><td><code>.ln-quantity</code></td><td>Increment/decrement input</td><td>No</td></tr>
            <tr><td><code>.ln-quantity--compact</code></td><td>Compact quantity control</td><td>No</td></tr>
            <tr><td><code>.ln-gallery</code></td><td>Image gallery with scroll-snap</td><td>No</td></tr>
            <tr><td><code>.ln-gallery--thumbs-start</code></td><td>Thumbnails on the left side</td><td>No</td></tr>
            <tr><td><code>.ln-gallery--grid</code></td><td>Grid layout instead of carousel</td><td>No</td></tr>
            <tr><td><code>.ln-product-card</code></td><td>Commerce card with media, body, and actions</td><td>No</td></tr>
            <tr><td><code>.ln-product-card--horizontal</code></td><td>Horizontal card layout</td><td>No</td></tr>
            <tr><td><code>.ln-product-card--compact</code></td><td>Compact card</td><td>No</td></tr>
            <tr><td><code>.ln-product-card--flat</code></td><td>No background or border</td><td>No</td></tr>
            <tr><td><code>.ln-line-item</code></td><td>Cart or order row</td><td>No</td></tr>
            <tr><td><code>.ln-line-item--compact</code></td><td>Compact line item</td><td>No</td></tr>
            <tr><td><code>.ln-line-item--readonly</code></td><td>Read-only line item (no remove button)</td><td>No</td></tr>
            <tr><td><code>.ln-order-summary</code></td><td>Checkout totals panel</td><td>No</td></tr>
            <tr><td><code>.ln-order-summary--sticky</code></td><td>Sticky positioning</td><td>No</td></tr>
            <tr><td><code>.ln-order-summary--compact</code></td><td>Compact spacing</td><td>No</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
