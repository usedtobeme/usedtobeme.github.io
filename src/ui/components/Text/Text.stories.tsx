import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'UI/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'signature', 'colorful'],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
    },
    size: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is default text',
    variant: 'default',
    as: 'p',
  },
};

export const Signature: Story = {
  args: {
    children: 'Iki Amortegui',
    variant: 'signature',
    as: 'h1',
  },
};

export const SignatureSmall: Story = {
  args: {
    children: 'Iki Amortegui',
    variant: 'signature',
    as: 'h3',
    size: 'h3',
  },
};

export const Colorful: Story = {
  args: {
    children: 'AMAZING PORTFOLIO',
    variant: 'colorful',
    as: 'h1',
  },
};

export const ColorfulSmall: Story = {
  args: {
    children: 'CREATIVE WORK',
    variant: 'colorful',
    as: 'h2',
    size: 'h2',
  },
};

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text as="h1" size="h1">
        Heading 1
      </Text>
      <Text as="h2" size="h2">
        Heading 2
      </Text>
      <Text as="h3" size="h3">
        Heading 3
      </Text>
      <Text as="h4" size="h4">
        Heading 4
      </Text>
      <Text as="h5" size="h5">
        Heading 5
      </Text>
      <Text as="h6" size="h6">
        Heading 6
      </Text>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center',
      }}
    >
      <Text variant="default" as="h2">
        Default Text Style
      </Text>
      <Text variant="signature" as="h1">
        Iki Amortegui
      </Text>
      <Text variant="colorful" as="h1">
        PORTFOLIO
      </Text>
    </div>
  ),
};
