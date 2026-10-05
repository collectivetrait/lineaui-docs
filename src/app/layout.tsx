import type { Metadata } from "next";
import "./demo.css";
import "./docs.css";
import { DocShell } from "@/components/DocShell";

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
      </head>
      <body>
        <DocShell>{children}</DocShell>
      </body>
    </html>
  );
}
