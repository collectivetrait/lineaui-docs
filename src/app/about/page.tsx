import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GridToggle } from "@/components/GridToggle";
import { BackToTop } from "@/components/BackToTop";

export default function AboutPage() {
  return (
    <div className="docs-shell">
      <SiteHeader />
      <GridToggle />
      <BackToTop />

      <main className="about-page">
        <div className="about-page__inner">
          <div className="ln-page-header ln-page-header--hero">
            <span className="ln-page-header__eyebrow">About</span>
            <h1 className="ln-page-header__title">About linea</h1>
            <div className="about-page__rule" />
          </div>

          <div className="about-page__body">
            <p className="lead">
              linea is a small SCSS and JS library built on BEM naming and
              vertical rhythm. I made it for my own projects and shared it so
              anyone can use it.
            </p>
            <p>
              Questions, bugs and suggestions are welcome on{" "}
              <a href="https://github.com">GitHub</a>.
            </p>
          </div>

          <div className="about-page__attribution">
            <p>Made by Andrés Villarreal</p>
            <a href="https://andrezrv.com">andrezrv.com</a>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
