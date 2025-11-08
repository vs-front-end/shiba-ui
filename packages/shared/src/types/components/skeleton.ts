import { ColorKeys } from '../../theme';

export interface ISkeleton {
  width?: number;
  height?: number;
  background?: ColorKeys;
  borderRadius?: number;
  isFullSize?: boolean;
  isHidden?: boolean;
}
