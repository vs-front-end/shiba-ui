import { ColorKeys } from "../../theme/theme";

export interface IRadio {
  isSelected?: boolean;
  onChange?: (selected: boolean) => void;
  size?: number;
  background?: ColorKeys;
  isDisabled?: boolean;
  isHidden?: boolean;
}
