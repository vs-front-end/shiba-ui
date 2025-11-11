import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';
import type { IBaseVisibility } from './base-props';

export type StepStatus =
  | 'success'
  | 'error'
  | 'pending'
  | 'active'
  | 'disabled';

export interface IStep {
  /** Step unique identifier */
  id: string | number;
  /** Step content (text or icon) */
  content?: string | IconKeys;
  /** Step status */
  status?: StepStatus;
  /** Step label text */
  label?: string;
  /** Step color from theme */
  stepColor?: ColorKeys;
  /** Label color from theme */
  labelColor?: ColorKeys;
  /** Text color from theme */
  textColor?: ColorKeys;
}

export interface ISteps extends IBaseVisibility {
  /** Steps array */
  steps?: IStep[];
  /** Step size in pixels */
  stepSize?: number;
  /** Connecting line width in pixels */
  lineWidth?: number;
  /** Connecting line height in pixels */
  lineHeight?: number;
  /** Success state color */
  successColor?: ColorKeys;
  /** Error state color */
  errorColor?: ColorKeys;
  /** Pending state color */
  pendingColor?: ColorKeys;
  /** Active state color */
  activeColor?: ColorKeys;
  /** Disabled state color */
  disabledColor?: ColorKeys;
  /** Connecting line color */
  lineColor?: ColorKeys;
}
