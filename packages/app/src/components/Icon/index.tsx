import { IIcon, getThemeApp } from '@shiba-ui/shared';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../provider/ThemeProvider';

export const Icon = ({ icon, size, color, isHidden }: IIcon) => {
  const { theme } = useTheme();

  if (isHidden) return null;

  return (
    <Feather
      name={icon}
      size={size}
      color={getThemeApp(color || 'content', theme)}
    />
  );
};
