"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/data/nav";

export function SideNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation navigation">
      <ul className="docs-sidenav">
        {NAV.map((section) => (
          <li key={section.group} className="docs-sidenav-section">
            <span className="docs-sidenav-group">{section.group}</span>
            <ul className="docs-sidenav-links">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`docs-sidenav-link${pathname === link.href ? " docs-sidenav-link--active" : ""}`}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
