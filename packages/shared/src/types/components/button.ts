import { ColorKeys } from "../../theme/theme";
import { IconKeys } from "./icon";

export interface IButton {
  text?: string;
  onClick?: () => void;
  isLoading?: boolean;
  isHidden?: boolean;
  isDisabled?: boolean;

  rightIcon?: IconKeys;
  leftIcon?: IconKeys;
  iconColor?: ColorKeys;
  iconSize?: number;

  width?: number;
  height?: number;
  textColor?: ColorKeys;
  background?: ColorKeys;
  borderColor?: ColorKeys;
  borderWidth?: number;
  borderRadius?: number;
  padding?: string;
  gap?: string;
  isFullWidth?: boolean;
}
