import { ColorKeys } from "../../theme/theme";

export interface ISwitch {
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
  size?: number;
  background?: ColorKeys;
  isDisabled?: boolean;
  isHidden?: boolean;
}
