import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ln — UI Library",
  description: "Documentation and demos for the ln UI component library.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/docs.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
