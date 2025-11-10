# Shiba UI

A clean, small, and simple UI library supporting both React.js and React Native.

## Installation

### For Web (React.js)

```bash
npm install @shiba-ui/browser
```

### For Mobile (React Native/Expo)

```bash
npm install @shiba-ui/app
```

## Usage

### Web Example

```tsx
import { ThemeProvider, Button, TextDisplay, Row } from '@shiba-ui/browser';

function App() {
  return (
    <ThemeProvider selectedTheme="dark">
      <Row gap={12}>
        <TextDisplay text="Hello Shiba UI" fontSize={16} />

        <Button 
          text="Click me" 
          background="primary"
          onClick={() => console.log('Clicked!')} 
        />
      </Row>
    </ThemeProvider>
  );
}
```

### Mobile Example

```tsx
import { ThemeProvider, Button, TextDisplay, Row } from '@shiba-ui/app';

function App() {
  return (
    <ThemeProvider selectedTheme="dark">
      <Row gap={12}>
        <TextDisplay text="Hello Shiba UI" fontSize={16} />
        
        <Button 
          text="Click me" 
          background="primary"
          onPress={() => console.log('Clicked!')} 
        />
      </Row>
    </ThemeProvider>
  );
}
```

## Features

- ✅ Clean and simple API
- ✅ Small bundle size
- ✅ TypeScript support
- ✅ Consistent API across platforms
- ✅ Minimal dependencies
- ✅ Theme support (light, dark, ocean)

## Structure

```
shiba-ui/
├── packages/
│   ├── shared/    # Shared types and interfaces
│   ├── browser/   # React.js components
│   └── app/        # React Native components
```
