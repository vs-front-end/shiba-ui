# Shiba UI - Monorepo

A simple monorepo UI library supporting both React.js and React Native.

## Structure

```
shiba-ui/
├── packages/
│   ├── shared/         # Shared types and interfaces
│   ├── browser/        # React.js components
│   └── mobile/         # React Native components
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Build all packages
npm run build
```

### Building

```bash
# Build all packages
npm run build

# Build specific packages
npm run build:shared
npm run build:browser
npm run build:mobile
```

## Usage

### Browser (React.js)

```tsx
import { Button } from '@shiba-ui/browser';

function App() {
  return (
    <Button 
      text="Click me" 
      variant="primary" 
      onPress={() => console.log('Clicked!')} 
    />
  );
}
```

### Mobile (React Native)

```tsx
import { Button } from '@shiba-ui/mobile';

function App() {
  return (
    <Button 
      text="Click me" 
      variant="primary" 
      onPress={() => console.log('Clicked!')} 
    />
  );
}
```

## Features

- ✅ Shared types and interfaces
- ✅ Consistent API across platforms
- ✅ TypeScript support
- ✅ Minimal dependencies (no build tools)
- ✅ Simple monorepo structure
- ✅ Ready for Storybook integration
