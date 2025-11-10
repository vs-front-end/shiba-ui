import type { ColorKeys, FontKeys } from '../../theme';

export type TextAlignmentType =
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'inherit';

export interface ITextDisplay {
  text?: string;
  fontSize?: number;
  fontWeight?: FontKeys;
  color?: ColorKeys;
  textAlign?: TextAlignmentType;
  lineHeight?: number;
  letterSpacing?: number;
  isHidden?: boolean;
}
