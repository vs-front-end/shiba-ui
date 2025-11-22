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
  const { openDrawer } = useUIOverlay();

  const handleOpenForm = () => {
    openDrawer(
      // Drawer props
      {
        showHandle: true,
        borderRadius: 25,
        background: 'section',
        onClose: () => {
          console.log('Drawer closed');
        },
      },
      // Drawer content (children)
      <Column gap={16}>
        <TextDisplay text="Form Title" fontWeight="bold" />
        <TextInput placeholder="Enter name" />
        <Button text="Submit" onPress={() => {}} />
      </Column>
    );
  };

  return <Button text="Open Form" onPress={handleOpenForm} />;
}
\`\`\`

## Features

- **Auto-sizing**: Drawer height adjusts based on content, with a maximum of 75% of screen height
- **Scrollable**: Content automatically becomes scrollable if it exceeds the maximum height
- **Drag to close**: Users can drag the handle down to close the drawer
- **Click outside to close**: Tapping the overlay closes the drawer
- **Smooth animations**: Simple open/close animations

## Customization

You can customize the drawer appearance:

\`\`\`tsx
openDrawer(
  {
    showHandle: true,        // Show drag handle (default: true)
    borderRadius: 30,         // Border radius in pixels (default: 25)
    background: 'primary',    // Background color from theme (default: 'section')
    onClose: () => {},       // Callback when drawer is closed
  },
  <YourContent />
);
\`\`\`

## Props

- **showHandle**: Show drag handle line (default: true)
- **background**: Background color from theme (default: 'section')
- **borderRadius**: Border radius in pixels (default: 25)
- **onClose**: Callback when drawer is closed
- **children**: ReactNode content to display inside the drawer
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const DefaultExample = () => {
  const { openDrawer, closeDrawer } = useUIOverlay();

  const drawerContent = () => {
    return (
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

        <Button text="Submit" onPress={closeDrawer} variant="solid" />

        <TextDisplay
          text="Click outside to close"
          fontSize={12}
          textAlign="center"
          color="accent"
        />
      </Column>
    );
  };

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
      <Button
        text="Open Drawer"
        onPress={() => openDrawer({}, drawerContent())}
        variant="solid"
      />
    </View>
  );
};

export const Default: Story = {
  render: () => <DefaultExample />,
};
