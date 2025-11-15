import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-webpack5-compiler-swc', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    config.plugins?.push(new VanillaExtractPlugin());

    // Add path aliases
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ui': resolve(__dirname, '../src/ui'),
      '@components': resolve(__dirname, '../src/components'),
      '@pages': resolve(__dirname, '../src/pages'),
      '@layout': resolve(__dirname, '../src/layout'),
      '@styles': resolve(__dirname, '../src/styles'),
      '@assets': resolve(__dirname, '../src/assets'),
    };

    return config;
  },
};
export default config;
