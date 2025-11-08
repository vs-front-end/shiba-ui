import { IIcon } from '@shiba-ui/shared';
import { useTheme } from 'styled-components';
import * as FeatherIcons from 'react-feather';

export type IconNames = keyof typeof FeatherIcons;

export const Icon = ({
  icon = 'award',
  size = 24,
  color = 'content',
  isHidden = false,
}: IIcon) => {
  const { colors } = useTheme();

  const convertIconName = (iconName: string): string => {
    const separatedIconName = iconName.split('-');

    const capitalizedWords = separatedIconName.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    return capitalizedWords.join('');
  };

  const iconName = convertIconName(icon as IconNames);
  const IconComponent = FeatherIcons[iconName as keyof typeof FeatherIcons];

  if (isHidden) return null;

  return <IconComponent size={size} color={colors[color]} />;
};
