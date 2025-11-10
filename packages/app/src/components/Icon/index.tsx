import type { IIcon } from '@shiba-ui/shared';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

export const Icon = ({
  icon = 'award',
  size = 24,
  color = 'content',
  isHidden = false,
}: IIcon) => {
  const { colors } = useTheme();

  if (isHidden) return null;

  return <Feather name={icon} size={size} color={colors[color]} />;
};
