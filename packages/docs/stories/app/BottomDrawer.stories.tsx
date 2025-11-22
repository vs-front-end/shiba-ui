import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import {
  BottomDrawer,
  TextDisplay,
  Button,
  Column,
  TextInput,
  PasswordInput,
} from '@shiba-ui/app';

const meta: Meta<typeof BottomDrawer> = {
  title: 'APP - Components/Feedback/BottomDrawer',
  component: BottomDrawer,
};

export default meta;
type Story = StoryObj<typeof BottomDrawer>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
          <Button
            text="Open Drawer"
            onPress={() => setIsOpen(true)}
            variant="solid"
          />
        </View>

        <BottomDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
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

            <Button
              text="Submit"
              onPress={() => setIsOpen(false)}
              variant="solid"
            />

            <TextDisplay
              text="Click outside to close"
              fontSize={12}
              textAlign="center"
              color="accent"
            />
          </Column>
        </BottomDrawer>
      </>
    );
  },
};
