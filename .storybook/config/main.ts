import type { UserConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const viteFinalFn = async (config: UserConfig) => {
  config.resolve = config.resolve || {};

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native': 'react-native-web',
  };

  return config;
};

const config: StorybookConfig = {
  stories: ['../../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: { name: '@storybook/react-vite', options: {} },
  staticDirs: ['../assets'],
  viteFinal: viteFinalFn,
};

export default config;
