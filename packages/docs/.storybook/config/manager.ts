import { create } from 'storybook/theming';
import { addons } from 'storybook/manager-api';

const MANAGER_THEME = {
  BACKGROUND: '#121212',
  SECTION: '#181818',
  CONTENT: '#FFFFFF',
} as const;

addons.register('theme-storage', () => {
  const channel = addons.getChannel();
  channel.on('updateGlobals', (globals) => {
    if (globals.globals?.backgrounds?.value) {
      localStorage.setItem('theme', globals.globals.backgrounds.value);
    }
  });
});

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
    appBg: MANAGER_THEME.BACKGROUND,
    textColor: MANAGER_THEME.CONTENT,
    appBorderColor: MANAGER_THEME.SECTION,
    appBorderRadius: 4,

    barBg: MANAGER_THEME.SECTION,
    barTextColor: MANAGER_THEME.CONTENT,
    barSelectedColor: MANAGER_THEME.CONTENT,
    barHoverColor: MANAGER_THEME.CONTENT,

    inputBg: MANAGER_THEME.SECTION,
    inputBorder: MANAGER_THEME.SECTION,
    inputTextColor: MANAGER_THEME.CONTENT,
    inputBorderRadius: 4,
  }),
});
