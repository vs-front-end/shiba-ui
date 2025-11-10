import type { ColorKeys } from '../../theme';

export type OrientationType = 'horizontal' | 'vertical';

export interface ISeparator {
  orientation?: OrientationType;
  width?: number;
  color?: ColorKeys;
  isHidden?: boolean;
}
