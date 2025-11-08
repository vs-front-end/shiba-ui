import { ColorKeys } from '../../theme';
import { IconKeys } from './icon';

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
