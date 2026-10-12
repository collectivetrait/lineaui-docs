---
description: Check docs TSX and CSS files for BEM violations. Optionally pass a component name (e.g. "CodeBlock") to check one file.
---

# Check BEM violations

Static analysis of TSX components and `public/docs.css` for BEM methodology
violations in Linea UI class usage.

## Input

The argument is an optional component name (e.g. `CodeBlock`, `Sidebar`).
If given, check only that component file. If omitted, check all `.tsx` files
under `src/` and `public/docs.css`.

## Violation types

### 1. Orphaned BEM elements

A BEM element class (`ln-block__element`) used in JSX markup without the
corresponding block class (`ln-block`) present in the HTML ancestry. An
orphaned element class is a BEM violation — either add the block class to
the markup or rename the class.

**How to detect:** In JSX `className` attributes, look for classes matching
`ln-*__*`. Trace up the component tree to verify the parent block class
exists.

### 2. Structural BEM violations

Invalid BEM structures in class names:
- Double elements: `__element__subelement` (BEM is flat — elements don't nest)
- Modifier of element expressed backwards: `--modifier__element`

**How to detect:** In class names used in `className` attributes or CSS
selectors, look for patterns with two `__` segments or `--` followed by `__`.

### 3. Wildcard selectors in docs.css

Any use of `> *` or bare `*` as a selector targeting Linea UI components in
`public/docs.css`. Always target children by their explicit BEM class name.

**How to detect:** Look for `> *` or `* {` patterns in selector context in
`public/docs.css`. Ignore comments.

### 4. Hardcoded wrong prefix

Class names in markup or CSS that use a prefix other than `ln-` for Linea UI
components (e.g. `linea-`, `ui-`).

**How to detect:** Look for BEM-structured class names that follow block,
element, modifier patterns but use a prefix other than `ln-`.

## Steps

1. List all `.tsx` files under `src/`.
2. If an argument was given, filter to just that component file.
3. For each file, read its contents and check violations 1, 2, and 4.
4. Read `public/docs.css` and check violations 2, 3, and 4.
5. Collect violations as `{ file, line, rule, detail }`.
6. Print results as a markdown table grouped by file.
7. Print a summary: files checked, files clean, files with violations, total
   violation count by rule.

## Output format

For each file with violations, print a section:

### `CodeBlock.tsx`

| Line | Rule | Detail |
|------|------|--------|
| 42 | orphaned-element | `ln-card__header` without `ln-card` ancestor |
| 78 | structural | double element `ln-card__header__title` |

Then a summary:

**Summary:** 24 files checked, 22 clean, 2 with violations.

| Rule | Count |
|------|-------|
| orphaned-element | 1 |
| structural | 1 |

If all files are clean:

**Summary:** 24 files checked, all clean.
