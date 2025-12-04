import React from 'react';
import { useUIOverlay, Button, UIOverlayProvider, Column, TextInput, TextArea } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'WEB - Components/Feedback/Modal',
  parameters: {
    docs: {
      description: {
        component: `
The \`Modal\` component is used to display modal dialogs that appear in the center of the screen in your web application.

## Setup

The \`Modal\` is managed through the \`UIOverlayProvider\` and \`useUIOverlay\` hook. Make sure to wrap your app with the \`UIOverlayProvider\`:

\`\`\`tsx
import { ThemeProvider, UIOverlayProvider } from '@shiba-ui/browser';

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

Use the \`useUIOverlay\` hook to open modals from anywhere in your app:

\`\`\`tsx
import { useUIOverlay, Column, TextInput, Button } from '@shiba-ui/browser';

function MyComponent() {
  const { openModal, closeModal } = useUIOverlay();

  const handleOpenForm = () => {
    openModal(
      <Column gap={16}>
        <TextInput label="Name" placeholder="Enter name" />
        <TextArea label="Message" placeholder="Enter message" />
        <Button text="Submit" onClick={closeModal} />
      </Column>,
      {
        title: 'Form Modal',
        showHeader: true,
      }
    );
  };

  return <Button text="Open Form" onClick={handleOpenForm} />;
}
\`\`\`

## Features

- **Centered display**: Modal appears in the center of the screen
- **Optional header**: Show header with title and close button
- **Click outside to close**: Clicking the overlay closes the modal
- **Customizable**: Customize background, border radius, and more
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const ModalExample = () => {
  const { openModal, closeModal } = useUIOverlay();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
      <Button
        text="Open Modal"
        onClick={() =>
          openModal(
            <Column gap={16}>
              <TextInput label="Name" placeholder="Enter name" />
              <TextInput label="Email" placeholder="Enter email" />
              <Button text="Submit" onClick={closeModal} />
            </Column>,
            {
              title: 'Form Modal',
              showHeader: true,
            }
          )
        }
      />
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <UIOverlayProvider>
      <ModalExample />
    </UIOverlayProvider>
  ),
};

