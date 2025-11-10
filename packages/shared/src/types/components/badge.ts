import type { ColorKeys } from "../../theme";
import type { IconKeys } from "./icon";

export interface IBadge {
  text?: string;
  textSize?: number;
  textColor?: ColorKeys;
  
  borderRadius?: number;
  background?: ColorKeys;

  iconSize?: number;
  iconColor?: ColorKeys;
  rightIcon?: IconKeys;
  leftIcon?: IconKeys;

  isHidden?: boolean;
}

