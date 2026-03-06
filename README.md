# Typography Tokens

A comprehensive typography system based on the Atlassian Design System (ADS), extracted from Figma and ready to use in your projects.

## Features

- **Design Tokens**: JSON and CSS formats
- **React Components**: Ready-to-use Typography components
- **Complete Documentation**: Usage examples and specifications
- **Type-safe**: TypeScript support included

## Quick Start

### Install Dependencies

```bash
npm install
```

### Import CSS Tokens

```css
@import './tokens/typography.css';
```

### Use React Components

```tsx
import { Heading, Body, Metric, Code } from './components/Typography';

function App() {
  return (
    <div>
      <Heading size="xxlarge" as="h1">Welcome</Heading>
      <Body size="large">This is a paragraph with body text.</Body>
      <Metric size="large">60% complete</Metric>
      <Code>const hello = "world";</Code>
    </div>
  );
}
```

## Documentation

See [TYPOGRAPHY.md](./TYPOGRAPHY.md) for complete documentation including:
- All available styles and sizes
- Usage examples
- Design specifications
- Accessibility guidelines

## Design Source

This typography system is extracted from the Figma design:
[Typography Design System](https://www.figma.com/design/ZVrYSoaMJmGzS0957VIIKk/Typography?node-id=0-1)

## License

MIT
