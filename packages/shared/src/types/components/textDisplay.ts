import { ColorKeys, FontKeys } from '../../theme';

export type TextAlignmentType =
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'inherit';

export type TextDecorationType =
  | 'none'
  | 'underline'
  | 'line-through'
  | 'overline';

export interface ITextDisplay {
  text?: string;
  fontSize?: number;
  fontWeight?: FontKeys;
  color?: ColorKeys;
  textAlign?: TextAlignmentType;
  textDecoration?: TextDecorationType;
  lineHeight?: number;
  letterSpacing?: number;
  isHidden?: boolean;
}
