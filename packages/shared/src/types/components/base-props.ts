import type { ColorKeys } from '../../theme';

/**
 * Base props for component visibility control
 */
export interface IBaseVisibility {
  /** Hides the component completely from the DOM */
  isHidden?: boolean;
}

/**
 * Base props for component interaction control
 */
export interface IBaseInteraction {
  /** Disables user interaction with the component */
  isDisabled?: boolean;
}

/**
 * Base props for component layout dimensions
 */
export interface IBaseLayout {
  /** Component width in pixels */
  width?: number;
  /** Component height in pixels */
  height?: number;
}

/**
 * Base props for component styling
 */
export interface IBaseStyling {
  /** Background color from theme */
  background?: ColorKeys;
  /** Border color from theme */
  borderColor?: ColorKeys;
  /** Border radius in pixels */
  borderRadius?: number;
  /** Border width in pixels */
  borderWidth?: number;
}

/**
 * Base props for color customization
 */
export interface IBaseColors {
  /** Primary color from theme */
  color?: ColorKeys;
  /** Text color from theme */
  textColor?: ColorKeys;
  /** Icon color from theme */
  iconColor?: ColorKeys;
}


