import type { IBaseVisibility, IBaseStyling } from './base-props';
import type { ReactNode } from 'react';

export interface IModal extends IBaseVisibility, IBaseStyling {
  /** Whether modal is open */
  isOpen?: boolean;
  /** Callback when modal is closed */
  onClose?: () => void;
  /** Modal content */
  children?: ReactNode;
  /** Modal title (shown in header if showHeader is true) */
  title?: string;
  /** Show header with title and close button */
  showHeader?: boolean;
}

