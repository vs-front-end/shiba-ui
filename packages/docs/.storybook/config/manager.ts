import { create } from 'storybook/theming';
import { addons } from 'storybook/manager-api';
import {
  LIGHT_THEME,
  DARK_THEME,
  OCEAN_THEME,
  COMMON_COLORS,
} from '@shiba-ui/shared';

function createManagerTheme(themeName: string) {
  const themes = {
    light: LIGHT_THEME,
    dark: DARK_THEME,
    ocean: OCEAN_THEME,
  };

  const theme = themes[themeName as keyof typeof themes] || DARK_THEME;

  return create({
    brandTitle: 'Shiba UI',
    brandImage: '/logo.webp',
    brandUrl: 'https://github.com/vs-front-end/shiba-ui',

    base: themeName === 'light' ? 'light' : 'dark',
    appBg: theme.background,
    textColor: theme.content,
    barBg: COMMON_COLORS.paper,
    barSelectedColor: theme.accent,
    barHoverColor: theme.highlight,
    colorSecondary: COMMON_COLORS.alternative,
    colorPrimary: COMMON_COLORS.alternative,
    buttonBg: theme.background,
    buttonBorder: theme.highlight,
  });
}

const initialTheme = localStorage.getItem('theme') || 'dark';

addons.setConfig({
  theme: createManagerTheme(initialTheme),
});

addons.register('dynamic-theme-manager', () => {
  const channel = addons.getChannel();

  channel.on('updateGlobals', (globals) => {
    if (globals.globals?.theme) {
      const newTheme = globals.globals.theme;
      localStorage.setItem('theme', newTheme);

      addons.setConfig({
        theme: createManagerTheme(newTheme),
      });
    }
  });
});

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', '/favicon.ico');
document.head.appendChild(link);
