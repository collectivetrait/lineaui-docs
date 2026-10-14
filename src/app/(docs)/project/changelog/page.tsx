import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Changelog",
  description: "All notable changes to Linea UI.",
};

interface ChangelogEntry {
  heading: string;
  date: string;
  sections: { title: string; items: string[] }[];
}

function parseChangelog(): ChangelogEntry[] {
  const filePath = path.join(
    process.cwd(),
    "node_modules",
    "@collectivetrait",
    "lineaui",
    "CHANGELOG.md"
  );
  const raw = fs.readFileSync(filePath, "utf-8");
  const lines = raw.split("\n");

  const entries: ChangelogEntry[] = [];
  let current: ChangelogEntry | null = null;
  let currentSection: { title: string; items: string[] } | null = null;

  for (const line of lines) {
    const versionMatch = line.match(/^## \[(.+?)\](?:\s*[—–-]\s*(.+))?$/);
    if (versionMatch) {
      current = {
        heading: versionMatch[1],
        date: versionMatch[2]?.trim() ?? "",
        sections: [],
      };
      entries.push(current);
      currentSection = null;
      continue;
    }

    const sectionMatch = line.match(/^### (.+)$/);
    if (sectionMatch && current) {
      currentSection = { title: sectionMatch[1], items: [] };
      current.sections.push(currentSection);
      continue;
    }

    const itemMatch = line.match(/^- (.+)$/);
    if (itemMatch && currentSection) {
      currentSection.items.push(itemMatch[1]);
      continue;
    }

    const contMatch = line.match(/^  (.+)$/);
    if (contMatch && currentSection && currentSection.items.length > 0) {
      currentSection.items[currentSection.items.length - 1] +=
        " " + contMatch[1];
    }
  }

  return entries;
}

function renderInline(text: string) {
  const parts: (string | React.ReactElement)[] = [];
  const re = /\*\*(.+?)\*\*|`(.+?)`|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    if (match[1]) {
      parts.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2]) {
      parts.push(<code key={key++}>{match[2]}</code>);
    } else if (match[3] && match[4]) {
      parts.push(
        <a key={key++} href={match[4]}>
          {match[3]}
        </a>
      );
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return parts;
}

export default function ChangelogPage() {
  const entries = parseChangelog();

  return (
    <article>
      <section className="docs-section">
        <h1 className="text-display-2">Changelog</h1>
        <p className="lead text-subtle">
          All notable changes to Linea UI.
        </p>
      </section>

      <TableOfContents noNumbers />

      <section className="docs-section">
        {entries.map((entry) => (
          <article key={entry.heading}>
            <h2>
              {entry.heading}
              {entry.date && (
                <span className="text-muted">
                  {" "}
                  — {entry.date}
                </span>
              )}
            </h2>

            {entry.sections.length === 0 && (
              <p>No changes recorded yet.</p>
            )}

            {entry.sections.map((section) => (
              <div key={section.title}>
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, j) => (
                    <li key={j}>{renderInline(item)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </section>
    </article>
  );
}
