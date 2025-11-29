import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

import {
  useUIOverlay,
  TextDisplay,
  Button,
  Column,
  TextInput,
  PasswordInput,
} from '@shiba-ui/app';

const meta: Meta = {
  title: 'APP - Components/Feedback/BottomDrawer',
  parameters: {
    docs: {
      description: {
        component: `
The \`BottomDrawer\` component is used to display a bottom sheet drawer that slides up from the bottom of the screen in your React Native application.

## Setup

The \`BottomDrawer\` is managed through the \`UIOverlayProvider\` and \`useUIOverlay\` hook. Make sure to wrap your app with the \`UIOverlayProvider\`:

\`\`\`tsx
import { ThemeProvider, UIOverlayProvider } from '@shiba-ui/app';

function App() {
  return (
    <ThemeProvider>
      <UIOverlayProvider>
        {/* Your app content */}
      </UIOverlayProvider>
    </ThemeProvider>
  );
}
\`\`\`

## Usage

Use the \`useUIOverlay\` hook to open drawers from anywhere in your app:

\`\`\`tsx
import { useUIOverlay, Column, TextDisplay, Button } from '@shiba-ui/app';

function MyComponent() {
  const { openBottomDrawer, closeBottomDrawer } = useUIOverlay();

  const handleOpenForm = () => {
    openBottomDrawer(
      <Column gap={16}>
        <TextDisplay text="Form Title" fontWeight="bold" />
        <TextInput placeholder="Enter name" />
        <Button text="Submit" onPress={closeBottomDrawer} />
      </Column>
    );
  };

  return <Button text="Open Form" onPress={handleOpenForm} />;
}
\`\`\`

## Customization

You can customize the drawer appearance by passing optional props:

\`\`\`tsx
openBottomDrawer(
  <YourContent />,
  {
    background: 'primary',    // Background color from theme (default: 'section')
    borderRadius: 30,         // Border radius in pixels (default: 25)
    showHandle: true,        // Show drag handle (default: true)
  }
);
\`\`\`

## Features

- **Auto-sizing**: Drawer height adjusts based on content, with a maximum of 85% of screen height
- **Scrollable**: Content automatically becomes scrollable if it exceeds the maximum height
- **Drag to close**: Users can drag the handle down to close the drawer
- **Click outside to close**: Tapping the overlay closes the drawer
- **Keyboard aware**: Drawer automatically adjusts when keyboard opens, keeping inputs visible
- **Back button support**: Android back button closes keyboard first, then drawer
- **Smooth animations**: Simple open/close animations
- **Performance optimized**: Component is unmounted when closed, saving memory
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const DefaultExample = () => {
  const { openBottomDrawer, closeBottomDrawer } = useUIOverlay();

  const drawerContent = (
    <Column gap={16} align="center" justify="start">
      <TextDisplay
        text="Bottom Drawer"
        fontSize={20}
        fontWeight="bold"
        color="content"
      />

      <TextDisplay
        text="This is a bottom drawer component example with some content."
        fontSize={14}
        color="accent"
        textAlign="center"
      />

      <TextInput
        placeholder="Enter your name"
        value="John Doe"
        handleChange={(value) => console.log(value)}
      />

      <TextInput
        placeholder="Enter your email"
        value="john.doe@example.com"
        handleChange={(value) => console.log(value)}
      />

      <PasswordInput
        placeholder="Enter your password"
        value="123456"
        handleChange={(value) => console.log(value)}
      />

      <Button text="Submit" onPress={closeBottomDrawer} variant="solid" />

      <TextDisplay
        text="Click outside to close"
        fontSize={12}
        textAlign="center"
        color="accent"
      />
    </Column>
  );

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
      <Button
        text="Open Drawer"
        onPress={() => openBottomDrawer(drawerContent)}
        variant="solid"
      />
    </View>
  );
};

export const Default: Story = {
  render: () => <DefaultExample />,
};
