import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { CookieConsent } from "@/components/CookieConsent";


const description =
  "linea-ui is a lightweight CSS and JS component library built on BEM naming, an 8px vertical rhythm, and cascade layers. Readable class names, accessible defaults, and a small footprint.";

export const metadata: Metadata = {
  metadataBase: new URL("https://linea-ui.com"),
  title: {
    default: "Linea UI - SCSS & JS Library Built On BEM & Vertical Rhythm",
    template: "%s - Linea UI",
  },
  description,
  keywords: [
    "CSS library",
    "BEM",
    "component library",
    "vertical rhythm",
    "CSS framework",
    "UI components",
    "accessible CSS",
    "lightweight CSS",
    "cascade layers",
    "SCSS",
  ],
  authors: [{ name: "Andrés Villarreal" }],
  creator: "Andrés Villarreal",
  openGraph: {
    title: "linea-ui — CSS component library",
    description,
    siteName: "linea-ui",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "linea-ui — CSS component library",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="/theme-init.js" />
        <link rel="stylesheet" href="/fa.css" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/docs.css" />
        <link rel="stylesheet" href="/consent.css" />
        <Script src="/bundle.js" strategy="afterInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "linea-ui",
                  url: "https://linea-ui.com",
                  description:
                    "A lightweight CSS and JS component library built on BEM naming, an 8px vertical rhythm, and cascade layers.",
                },
                {
                  "@type": "SoftwareSourceCode",
                  name: "linea-ui",
                  description:
                    "Lightweight CSS and JS component library with BEM naming, 8px vertical rhythm, and cascade layers.",
                  programmingLanguage: ["CSS", "SCSS", "JavaScript"],
                  runtimePlatform: "Browser",
                  license: "https://opensource.org/licenses/MIT",
                  author: {
                    "@type": "Person",
                    name: "Andrés Villarreal",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        {process.env.NEXT_PUBLIC_SHOW_COOKIE_CONSENT !== "false" &&
          process.env.NEXT_PUBLIC_GA_ID && (
            <CookieConsent gaId={process.env.NEXT_PUBLIC_GA_ID} />
          )}
      </body>
    </html>
  );
}
