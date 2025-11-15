import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card';

const meta: Meta<typeof Card> = {
  title: 'Design System/Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'spacious'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} style={{ width: '350px' }}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Card description goes here. This provides additional context about the
          card content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content area of the card.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
  args: {
    variant: 'default',
  },
};

export const Compact: Story = {
  render: (args) => (
    <Card {...args} style={{ width: '300px' }}>
      <CardHeader>
        <CardTitle>Compact Card</CardTitle>
        <CardDescription>
          A more compact version with tighter spacing.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Less padding for a more condensed layout.</p>
      </CardContent>
    </Card>
  ),
  args: {
    variant: 'compact',
  },
};

export const Spacious: Story = {
  render: (args) => (
    <Card {...args} style={{ width: '400px' }}>
      <CardHeader>
        <CardTitle>Spacious Card</CardTitle>
        <CardDescription>
          A more spacious version with generous padding for breathing room.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>More padding creates a more relaxed, premium feel.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button style={{ marginLeft: '1rem' }}>Continue</Button>
      </CardFooter>
    </Card>
  ),
  args: {
    variant: 'spacious',
  },
};

export const WithoutHeader: Story = {
  render: (args) => (
    <Card {...args} style={{ width: '350px' }}>
      <CardContent>
        <p>This card has no header, just content.</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost">Close</Button>
      </CardFooter>
    </Card>
  ),
  args: {
    variant: 'default',
  },
};

export const ContentOnly: Story = {
  render: (args) => (
    <Card {...args} style={{ width: '300px' }}>
      <CardContent>
        <h4 style={{ marginBottom: '0.5rem' }}>Simple Content Card</h4>
        <p>Sometimes you just need a simple container with content.</p>
      </CardContent>
    </Card>
  ),
  args: {
    variant: 'default',
  },
};
