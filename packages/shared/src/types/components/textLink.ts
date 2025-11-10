import type { ColorKeys } from '../../theme';
import type { ITextDisplay } from './textDisplay';

export interface ITextLink extends ITextDisplay {
  href: string;
  hoverColor?: ColorKeys;
  isExternal?: boolean;
}
