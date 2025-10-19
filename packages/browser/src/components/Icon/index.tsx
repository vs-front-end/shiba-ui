import * as FeatherIcons from 'react-feather';
import { IIcon, getThemeWeb, convertIconName } from '@shiba-ui/shared';

export type IconNames = keyof typeof FeatherIcons;

export const Icon = ({ icon, size, color, isHidden }: IIcon) => {
  if (isHidden) return null;

  const iconName = convertIconName(icon as IconNames);
  const IconComponent = FeatherIcons[iconName as keyof typeof FeatherIcons];

  return <IconComponent size={size} color={getThemeWeb(color || 'content')} />;
};
