import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';

import type {
  IBaseVisibility,
  IBaseInteraction,
  IBaseStyling,
} from './base-props';

export interface IIconButton
  extends IBaseVisibility,
    IBaseInteraction,
    IBaseStyling {
  /** Icon name from available icon set */
  icon: IconKeys;
  /** Icon size in pixels */
  iconSize?: number;
  /** Icon color from theme */
  iconColor?: ColorKeys;
  /** Button size (width and height) in pixels */
  size?: number;
}

