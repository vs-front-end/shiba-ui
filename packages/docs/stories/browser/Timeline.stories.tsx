import { Timeline } from '@shiba-ui/browser';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Timeline> = {
  title: 'WEB - Components/Viewers/Timeline',
  component: Timeline,
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    data: [
      {
        id: 1,
        title: 'Front-End Developer',
        subtitle: 'Mid-Level Developer at ABC Corp - 2 years',
        details: [
          'Developed and maintained user interfaces using React, Redux, and JavaScript.',
          'Collaborated with back-end developers to integrate APIs for dynamic web applications.',
        ],
      },
      {
        id: 2,
        title: 'Front-End Developer',
        subtitle: 'Junior Developer at XYZ Ltd - 2 years',
        details: [
          "Contributed to the development of the company's web application with HTML, CSS, and JavaScript.",
          'Optimized web page performance by minimizing load times and enhancing responsiveness.',
        ],
      },
    ],
  },
};
