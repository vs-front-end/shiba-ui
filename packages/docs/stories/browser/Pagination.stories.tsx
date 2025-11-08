import { Pagination } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  title: 'WEB - Components/Navigation/Pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    maxVisiblePages: 5,
  },
};

export const MiddlePage: Story = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 5,
    maxVisiblePages: 5,
  },
};

export const LastPage: Story = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 10,
    maxVisiblePages: 5,
  },
};
