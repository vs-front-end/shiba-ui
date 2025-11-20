import type { ColorKeys, FontKeys } from '../../theme';
import type { IBaseVisibility } from './base-props';

export type TextAlignmentType = 'left' | 'center' | 'right';

export interface ITextDisplay extends IBaseVisibility {
  /** Text content to display */
  text?: string;
  /** Font size in pixels */
  fontSize?: number;
  /** Font weight from theme */
  fontWeight?: FontKeys;
  /** Text color from theme */
  color?: ColorKeys;
  /** Text alignment */
  textAlign?: TextAlignmentType;
  /** Line height value */
  lineHeight?: number;
  /** Letter spacing value */
  letterSpacing?: number;
}
