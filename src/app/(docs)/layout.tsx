import { DocShell } from "@/components/DocShell";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocShell>{children}</DocShell>;
}
