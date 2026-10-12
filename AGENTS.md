<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project rules for AI agents

## Class prefix
The Linea UI library uses the `ln-` prefix for BEM block and layout classes.
Helpers and utilities use bare unprefixed class names. When writing markup that
uses Linea UI components, follow the same convention.

## BEM elements require their block
Never use a BEM element class (`block__element`) without the corresponding
block class (`block`) present in the HTML ancestry. An orphaned element class
is a BEM violation — either add the block class to the markup or rename the
class to avoid the `__` pattern.

## No wildcard selectors in BEM blocks
Never use `> *` or `*` selectors when styling Linea UI components in
`docs.css`. Always target children by their explicit BEM class name.

## Use the simplest property available
Always prefer the simplest CSS property. Use `margin-top` not
`margin-block-start`, `margin-bottom` not `margin-block-end`, `padding-left`
not `padding-inline-start`, etc. Logical properties are only justified when the
layout genuinely needs to support both LTR and RTL writing modes.

## Outline vs border
Use `outline` with a negative offset for box outlines around containers. Use
real `border` only for single-side separators. When a real border is used on a
separator, adjust the element height to compensate so vertical rhythm is
preserved.

## Prefix from config
The Linea UI class prefix is `ln-`. Never hardcode a different prefix in
component markup or in `docs.css` overrides.

## Run skills on changed code before committing
Before creating a git commit, run every applicable skill (e.g. `check-bem`,
`check-a11y-compat`) against only the new or changed code and fix any issues
they surface. Also review changes for potential security issues — XSS via
`dangerouslySetInnerHTML` or unsanitized user-facing content, open redirects,
exposed secrets or API keys, and insecure script loading — even when the site
has no users or database. Do not commit until all skills pass cleanly and no
security concerns remain.

## Fix linter errors on commit failure
If a commit fails because a linter reports errors, fix every reported issue,
re-stage the files, and reattempt the commit. If the build fails, stop and ask
the user for input instead of trying to fix it. Never skip hooks with
`--no-verify`.

## Run check-preview-rhythm before pushing
When the user asks to push, run `check-preview-rhythm` on every docs page
affected by the changes before executing the push. If any preview fails the
8px-grid check, stop and ask the user for input instead of pushing.

## Never push automatically
Never push to a remote repository unless the user explicitly asks for it.
