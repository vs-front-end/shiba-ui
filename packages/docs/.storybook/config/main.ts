import type { Configuration } from 'webpack';
import type { StorybookConfig } from '@storybook/react-webpack5';

const webpackFinalFn = async (config: Configuration) => {
  config.resolve = config.resolve || {};

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native': 'react-native-web',
  };

  config.resolve.fallback = {
    ...config.resolve.fallback,
    tty: 'tty-browserify',
  };

  config.module = config.module || {};
  config.module.rules = config.module.rules || [];

  config.module.rules.push({
    test: /\.(js|jsx)$/,
    include: /node_modules\/@expo\/vector-icons/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
    exclude: /node_modules/,
  });

  return config;
};

const config: StorybookConfig = {
  stories: [
    '../../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../stories/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-react-native-web',
      options: { modulesToTranspile: ['@expo/vector-icons'] },
    },
  ],
  framework: { name: '@storybook/react-webpack5', options: {} },
  staticDirs: ['../assets'],
  webpackFinal: webpackFinalFn,
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
};

export default config;
