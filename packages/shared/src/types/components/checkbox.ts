import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';

export interface ICheckbox {
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: number;
  background?: ColorKeys;
  icon?: IconKeys;
  iconColor?: ColorKeys;
  isDisabled?: boolean;
  isHidden?: boolean;
}
