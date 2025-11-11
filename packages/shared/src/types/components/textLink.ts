import type { ColorKeys } from '../../theme';
import type { ITextDisplay } from './textDisplay';

export interface ITextLink extends ITextDisplay {
  /** Link URL */
  href: string;
  /** Hover state color */
  hoverColor?: ColorKeys;
  /** Opens link in new tab */
  isExternal?: boolean;
}
