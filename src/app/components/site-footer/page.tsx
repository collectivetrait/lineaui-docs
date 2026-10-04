import { CodeBlock } from "@/components/CodeBlock";

export default function SiteFooterPage() {
  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Site footer</h1>
        <p className="lead text-subtle">
          A full-width page footer with multi-column link groups, social icons,
          and a bottom bar for legal text. The <code>--inverse</code> modifier
          flips to a dark background. <code>--compact</code> tightens spacing.
        </p>
      </section>

      <section className="docs-section">
        <h2>Default footer</h2>
        <div className="component-demo">
          <CodeBlock language="html">{`<footer class="ln-site-footer">
  <div class="ln-site-footer__inner">
    <div class="ln-site-footer__brand"><strong>Acme Inc.</strong></div>
    <div class="ln-site-footer__columns">
      <div class="ln-site-footer__column">
        <h4 class="ln-site-footer__heading">Product</h4>
        <ul class="ln-site-footer__links">
          <li><a class="ln-site-footer__link" href="#">Features</a></li>
          <li><a class="ln-site-footer__link" href="#">Pricing</a></li>
          <li><a class="ln-site-footer__link" href="#">Changelog</a></li>
        </ul>
      </div>
      <div class="ln-site-footer__column">
        <h4 class="ln-site-footer__heading">Company</h4>
        <ul class="ln-site-footer__links">
          <li><a class="ln-site-footer__link" href="#">About</a></li>
          <li><a class="ln-site-footer__link" href="#">Blog</a></li>
          <li><a class="ln-site-footer__link" href="#">Careers</a></li>
        </ul>
      </div>
      <div class="ln-site-footer__column">
        <h4 class="ln-site-footer__heading">Support</h4>
        <ul class="ln-site-footer__links">
          <li><a class="ln-site-footer__link" href="#">Docs</a></li>
          <li><a class="ln-site-footer__link" href="#">Contact</a></li>
          <li><a class="ln-site-footer__link" href="#">Status</a></li>
        </ul>
      </div>
    </div>
    <div class="ln-site-footer__bottom">
      <span class="ln-site-footer__legal">&copy; 2026 Acme Inc.</span>
    </div>
  </div>
</footer>`}</CodeBlock>
          <div className="component-demo__preview">
            <footer className="ln-site-footer">
              <div className="ln-site-footer__inner">
                <div className="ln-site-footer__brand"><strong>Acme Inc.</strong></div>
                <div className="ln-site-footer__columns">
                  <div className="ln-site-footer__column">
                    <h4 className="ln-site-footer__heading">Product</h4>
                    <ul className="ln-site-footer__links">
                      <li><a className="ln-site-footer__link" href="#">Features</a></li>
                      <li><a className="ln-site-footer__link" href="#">Pricing</a></li>
                      <li><a className="ln-site-footer__link" href="#">Changelog</a></li>
                    </ul>
                  </div>
                  <div className="ln-site-footer__column">
                    <h4 className="ln-site-footer__heading">Company</h4>
                    <ul className="ln-site-footer__links">
                      <li><a className="ln-site-footer__link" href="#">About</a></li>
                      <li><a className="ln-site-footer__link" href="#">Blog</a></li>
                      <li><a className="ln-site-footer__link" href="#">Careers</a></li>
                    </ul>
                  </div>
                  <div className="ln-site-footer__column">
                    <h4 className="ln-site-footer__heading">Support</h4>
                    <ul className="ln-site-footer__links">
                      <li><a className="ln-site-footer__link" href="#">Docs</a></li>
                      <li><a className="ln-site-footer__link" href="#">Contact</a></li>
                      <li><a className="ln-site-footer__link" href="#">Status</a></li>
                    </ul>
                  </div>
                </div>
                <div className="ln-site-footer__bottom">
                  <span className="ln-site-footer__legal">&copy; 2026 Acme Inc.</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </article>
  );
}
