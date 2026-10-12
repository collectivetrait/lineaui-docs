# Linea UI Docs

Documentation site for [Linea UI](https://www.npmjs.com/package/@collectivetrait/lineaui), built with [Next.js](https://nextjs.org). Live at **[lineaui.com](https://lineaui.com)**.

## Sections

| Section | Contents |
|---------|----------|
| **Getting started** | Introduction, BEM guide, vertical rhythm, customization, principles |
| **Foundation** | Typography, fonts, text, icons, theme, tables, figures, media |
| **Layout** | Container, grid, shell, section, cluster |
| **Components** | Alert, badge, breadcrumb, button, button group, divider, drawer, dropdown, empty state, menu, modal, navbar, pagination, progress, site footer, skeleton, spinner, steps, tabs, tag, toast, tooltip |
| **Content** | Prose and content-flow styling |
| **Forms** | Form controls and field patterns |
| **Patterns** | Composite UI patterns |
| **Utilities** | Spacing, flex, display, text, color utility classes |
| **Project** | About, changelog |

## Development

```bash
npm install
npm run dev        # start dev server
npm run build      # production build
npm run lint       # ESLint
```

The library styles and scripts come from the [`@collectivetrait/lineaui`](https://www.npmjs.com/package/@collectivetrait/lineaui) npm package. Site-specific styles live in `public/docs.css`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # root layout (CSS/JS imports, metadata)
│   ├── page.tsx            # home page
│   └── (docs)/             # documentation pages
│       ├── components/     # component demos and docs
│       ├── foundation/     # design tokens, typography, icons
│       ├── getting-started/
│       ├── layout/
│       ├── content/
│       ├── forms/
│       ├── patterns/
│       ├── utilities/
│       └── project/        # about, changelog
├── components/             # shared React components
public/
├── docs.css                # site-specific styles
├── consent.css             # cookie consent styles
└── fa.css                  # Font Awesome subset
```

## License

[MIT](LICENSE)
