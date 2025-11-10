import type { IIcon } from '@shiba-ui/shared';
import { useTheme } from 'styled-components';
import { useState, useEffect } from 'react';

type IconComponent = React.ComponentType<{ size?: number; color?: string }>;

const iconCache = new Map<string, IconComponent>();

const convertIconName = (iconName: string): string => {
  return iconName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

const loadIcon = async (iconName: string): Promise<IconComponent> => {
  if (iconCache.has(iconName)) return iconCache.get(iconName)!;

  const pascalName = convertIconName(iconName);
  const iconModule = await import('react-feather');

  const Icon = iconModule[
    pascalName as keyof typeof iconModule
  ] as IconComponent;

  if (Icon) {
    iconCache.set(iconName, Icon);
    return Icon;
  }

  return iconModule.Award;
};

export type IconNames = string;

export const Icon = ({
  icon = 'award',
  size = 24,
  color = 'content',
  isHidden = false,
}: IIcon) => {
  const { colors } = useTheme();
  const [IconComponent, setIconComponent] = useState<IconComponent>();

  useEffect(() => {
    loadIcon(icon).then(setIconComponent);
  }, [icon]);

  if (isHidden || !IconComponent) return null;

  return <IconComponent size={size} color={colors[color]} />;
};
