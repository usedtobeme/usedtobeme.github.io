import type { Meta, StoryObj } from '@storybook/react';
import { tokens } from '@ui/tokens.css';
import { style } from '@vanilla-extract/css';

const colorSwatchStyle = style({
  width: '60px',
  height: '60px',
  borderRadius: tokens.borderRadius.md,
  display: 'inline-block',
  marginRight: tokens.spacing.sm,
  border: `1px solid ${tokens.colors.semantic.border}`,
});

const tokenRowStyle = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: tokens.spacing.sm,
  padding: tokens.spacing.sm,
  borderRadius: tokens.borderRadius.sm,
  backgroundColor: tokens.colors.semantic.card,
});

const tokenLabelStyle = style({
  marginLeft: tokens.spacing.md,
  fontSize: tokens.typography.fontSize.sm,
  color: tokens.colors.semantic.foreground,
});

const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <div className={tokenRowStyle}>
    <div className={colorSwatchStyle} style={{ backgroundColor: color }} />
    <div className={tokenLabelStyle}>
      <strong>{name}</strong>
      <br />
      <code>{color}</code>
    </div>
  </div>
);

const SpacingToken = ({ size, name }: { size: string; name: string }) => (
  <div className={tokenRowStyle}>
    <div
      style={{
        width: size,
        height: '20px',
        backgroundColor: tokens.colors.semantic.accent,
        borderRadius: tokens.borderRadius.sm,
      }}
    />
    <div className={tokenLabelStyle}>
      <strong>{name}</strong>
      <br />
      <code>{size}</code>
    </div>
  </div>
);

const TypographyToken = ({ size, name }: { size: string; name: string }) => (
  <div className={tokenRowStyle}>
    <div className={tokenLabelStyle}>
      <div style={{ fontSize: size, lineHeight: 1.2 }}>
        <strong>{name}</strong>
      </div>
      <code>{size}</code>
    </div>
  </div>
);

const meta: Meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    docs: {
      description: {
        component:
          'Design tokens define the visual foundation of our design system.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Colors: Story = {
  render: () => (
    <div>
      <h3>Primitive Colors</h3>
      <ColorSwatch color="hsl(266, 78%, 93%)" name="Light" />
      <ColorSwatch color="hsl(282, 100%, 16%)" name="Dark" />
      <ColorSwatch color="hsl(280, 100%, 70%)" name="Glow" />
      <ColorSwatch color="hsl(270, 100%, 60%)" name="Base" />
      <ColorSwatch color="hsl(266, 78%, 45%)" name="Strong" />
      <ColorSwatch color="hsl(192, 65%, 72%)" name="Accent" />
      <ColorSwatch color="hsl(192, 50%, 35%)" name="Accent Dark" />
      <ColorSwatch color="hsl(192, 50%, 90%)" name="Accent Light" />
      <ColorSwatch color="hsl(5, 100%, 71%)" name="Destructive" />
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div>
      <h3>Spacing Tokens</h3>
      <SpacingToken size="0.25rem" name="XS" />
      <SpacingToken size="0.5rem" name="SM" />
      <SpacingToken size="1rem" name="MD" />
      <SpacingToken size="1.5rem" name="LG" />
      <SpacingToken size="2rem" name="XL" />
      <SpacingToken size="3rem" name="2XL" />
      <SpacingToken size="4rem" name="3XL" />
      <SpacingToken size="6rem" name="4XL" />
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div>
      <h3>Typography Scale</h3>
      <TypographyToken size="0.75rem" name="XS" />
      <TypographyToken size="0.875rem" name="SM" />
      <TypographyToken size="1rem" name="Base" />
      <TypographyToken size="1.125rem" name="LG" />
      <TypographyToken size="1.25rem" name="XL" />
      <TypographyToken size="1.5rem" name="2XL" />
      <TypographyToken size="1.875rem" name="3XL" />
      <TypographyToken size="2.25rem" name="4XL" />
      <TypographyToken size="3rem" name="5XL" />
      <TypographyToken size="3.75rem" name="6XL" />
      <TypographyToken size="4.5rem" name="7XL" />
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div>
      <h3>Border Radius</h3>
      {[
        { name: 'None', value: '0' },
        { name: 'SM', value: '0.125rem' },
        { name: 'MD', value: '0.375rem' },
        { name: 'LG', value: '0.5rem' },
        { name: 'XL', value: '0.75rem' },
        { name: 'Full', value: '9999px' },
      ].map(({ name, value }) => (
        <div key={name} className={tokenRowStyle}>
          <div
            style={{
              width: '60px',
              height: '40px',
              backgroundColor: tokens.colors.semantic.accent,
              borderRadius: value,
              marginRight: tokens.spacing.md,
            }}
          />
          <div className={tokenLabelStyle}>
            <strong>{name}</strong>
            <br />
            <code>{value}</code>
          </div>
        </div>
      ))}
    </div>
  ),
};
