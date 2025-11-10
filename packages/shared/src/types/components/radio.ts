import type { ColorKeys } from '../../theme';

export interface IRadio {
  isSelected?: boolean;
  onChange?: (selected: boolean) => void;
  size?: number;
  background?: ColorKeys;
  isDisabled?: boolean;
  isHidden?: boolean;
}
