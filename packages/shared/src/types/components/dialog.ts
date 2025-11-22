import type { IBaseVisibility, IBaseStyling, IBaseColors } from './base-props';
import type { ColorKeys } from '../../theme';

export interface IDialog extends IBaseVisibility, IBaseStyling, IBaseColors {
  /** Whether dialog is open */
  isOpen?: boolean;
  /** Dialog title */
  title?: string;
  /** Dialog message/content */
  message?: string;
  /** Confirm button text */
  confirmText?: string;
  /** Cancel button text */
  cancelText?: string;
  /** Show confirm button */
  showConfirm?: boolean;
  /** Show cancel button */
  showCancel?: boolean;
  /** Callback when confirm is pressed */
  onConfirm?: () => void;
  /** Callback when cancel is pressed */
  onCancel?: () => void;
  /** Confirm button variant */
  confirmVariant?: 'solid' | 'outlined' | 'text';
  /** Cancel button variant */
  cancelVariant?: 'solid' | 'outlined' | 'text';
  /** Confirm button color */
  confirmColor?: ColorKeys;
  /** Cancel button color */
  cancelColor?: ColorKeys;
  /** Title color */
  titleColor?: ColorKeys;
  /** Message color */
  messageColor?: ColorKeys;
}

