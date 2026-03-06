# Typography System

This typography system is based on the Atlassian Design System (ADS) and provides a comprehensive set of text styles for headings, body text, metrics, and code.

## Overview

The system includes four main categories:
- **Headings**: For titles and section headers (7 sizes)
- **Body**: For general content text (3 sizes, 3 weights each)
- **Metric**: For displaying numbers and statistics (3 sizes)
- **Code**: For code snippets and technical content

## Design Tokens

Design tokens are available in two formats:
- `tokens/typography.json` - JSON format for JavaScript/TypeScript projects
- `tokens/typography.css` - CSS custom properties for direct stylesheet usage

## Components

React components are provided in `components/Typography.tsx` for easy integration.

---

## Heading Styles

Headings use **Atlassian Sans Bold** and are designed for titles and section headers.

### Sizes

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `font.heading.xxlarge` | 32px | 36px | Page titles, hero headings |
| `font.heading.xlarge` | 28px | 32px | Major section headings |
| `font.heading.large` | 24px | 28px | Section headings |
| `font.heading.medium` | 20px | 24px | Subsection headings |
| `font.heading.small` | 16px | 20px | Card titles, small headings |
| `font.heading.xsmall` | 14px | 20px | Table headers, labels |
| `font.heading.xxsmall` | 12px | 16px | Compact headers |

### Usage Examples

#### CSS
```css
.my-heading {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-heading-large);
  line-height: var(--line-height-heading-large);
  font-weight: var(--font-weight-heading);
}

/* Or use the utility class */
.my-heading {
  @apply heading-large;
}
```

#### React Component
```tsx
import { Heading } from './components/Typography';

<Heading size="xxlarge" as="h1">Page Title</Heading>
<Heading size="large" as="h2">Section Heading</Heading>
<Heading size="small" as="h3">Subsection</Heading>
```

---

## Body Styles

Body text uses **Atlassian Sans** and comes in three sizes with three weight variants each.

### Sizes & Weights

| Token | Size | Line Height | Weights Available |
|-------|------|-------------|-------------------|
| `font.body.large` | 16px | 24px | Regular (400), Medium (500), Bold (700) |
| `font.body.medium` | 14px | 20px | Regular (400), Medium (500), Bold (700) |
| `font.body.small` | 12px | 16px | Regular (400), Medium (500), Bold (700) |

### Usage Examples

#### CSS
```css
/* Regular weight */
.body-text {
  font-family: var(--font-family-body);
  font-size: var(--font-size-body-medium);
  line-height: var(--line-height-body-medium);
  font-weight: var(--font-weight-body-regular);
}

/* Or use utility classes */
.body-text { @apply body-medium; }
.body-text-bold { @apply body-medium-bold; }
```

#### React Component
```tsx
import { Body } from './components/Typography';

<Body size="large">Default paragraph text</Body>
<Body size="medium" weight="medium">Medium weight text</Body>
<Body size="small" weight="bold">Small bold text</Body>
```

---

## Metric Styles

Metric styles are designed for displaying numbers, statistics, and data. They use **Atlassian Sans Bold**.

### Sizes

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `font.metric.large` | 28px | 32px | Large statistics, KPIs |
| `font.metric.medium` | 24px | 28px | Medium metrics |
| `font.metric.small` | 16px | 20px | Compact metrics |

### Usage Examples

#### CSS
```css
.metric {
  font-family: var(--font-family-metric);
  font-size: var(--font-size-metric-large);
  line-height: var(--line-height-metric-large);
  font-weight: var(--font-weight-metric);
}

/* Or use utility class */
.metric { @apply metric-large; }
```

#### React Component
```tsx
import { Metric } from './components/Typography';

<Metric size="large">60% complete</Metric>
<Metric size="medium">5 in review</Metric>
<Metric size="small">12 tasks</Metric>
```

---

## Code Style

Code style uses **Atlassian Mono** for displaying code snippets and technical content.

### Specifications

| Property | Value |
|----------|-------|
| Font Family | Atlassian Mono |
| Size | 12px |
| Line Height | 20px |
| Weight | 400 (Regular) |
| Features | `'zero' 1, 'calt' 0` |

### Usage Examples

#### CSS
```css
.code-block {
  font-family: var(--font-family-code);
  font-size: var(--font-size-code);
  line-height: var(--line-height-code);
  font-weight: var(--font-weight-code);
  font-feature-settings: 'zero' 1, 'calt' 0;
}

/* Or use utility class */
.code-block { @apply code; }
```

#### React Component
```tsx
import { Code } from './components/Typography';

// Block code
<Code>
{`for (int i = 0; i < 26; i++) {
  printf("Hello World");
}`}
</Code>

// Inline code
<Code inline>const value = 42;</Code>
```

---

## Installation

### 1. Import CSS Tokens
```css
@import './tokens/typography.css';
```

### 2. Use React Components
```tsx
import { Heading, Body, Metric, Code } from './components/Typography';
```

### 3. Or Use JSON Tokens
```typescript
import tokens from './tokens/typography.json';

const headingStyle = {
  fontFamily: tokens.typography.fontFamily.heading,
  fontSize: tokens.typography.fontSize.heading.large,
  lineHeight: tokens.typography.lineHeight.heading.large,
  fontWeight: tokens.typography.fontWeight.heading
};
```

---

## Font Loading

Make sure to load the required fonts in your project:

```html
<!-- Add to your HTML head -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atlassian+Sans:wght@400;500;700&display=swap">
```

Or install via npm if using a font package manager.

---

## Accessibility

- All text styles maintain WCAG 2.1 AA contrast ratios when used with appropriate background colors
- Line heights are optimized for readability
- Font sizes are specified in pixels but can be converted to rem units for better accessibility

---

## Design Reference

This typography system is extracted from the Figma design:
[Typography Design System](https://www.figma.com/design/ZVrYSoaMJmGzS0957VIIKk/Typography?node-id=0-1)

For the latest updates and design specifications, refer to the Figma file.
