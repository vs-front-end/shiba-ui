import { create } from 'storybook/theming';
import { addons } from 'storybook/manager-api';

const THEME = {
  BACKGROUND: '#121212',
  SECTION: '#181818',
  CONTENT: '#FFFFFF',
} as const;

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', '/favicon.ico');
document.head.appendChild(link);

addons.setConfig({
  theme: create({
    brandTitle: 'Shiba UI',
    brandImage: '/logo.webp',
    brandUrl: 'https://github.com/vitor-albergaria/shiba-ui',

    base: 'dark',
    appBg: THEME.BACKGROUND,
    textColor: THEME.CONTENT,
    appBorderColor: THEME.SECTION,
    appBorderRadius: 4,

    barBg: THEME.SECTION,
    barTextColor: THEME.CONTENT,
    barSelectedColor: THEME.CONTENT,
    barHoverColor: THEME.CONTENT,

    inputBg: THEME.SECTION,
    inputBorder: THEME.SECTION,
    inputTextColor: THEME.CONTENT,
    inputBorderRadius: 4,
  }),
});
