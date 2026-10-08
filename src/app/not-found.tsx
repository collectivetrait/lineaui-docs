import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="docs-not-found">
        <h1 className="text-display-1 font-prose">404</h1>
        <p className="text-body-lg color-muted mb-4">
          The page you&#39;re looking for doesn&#39;t exist.
        </p>
        <Link href="/" className="ln-button ln-button--solid">
          Go home
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
