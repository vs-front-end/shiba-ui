import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';

export type StepStatus =
  | 'success'
  | 'error'
  | 'pending'
  | 'active'
  | 'disabled';

export interface IStep {
  id: string | number;
  content?: string | IconKeys;
  status?: StepStatus;
  label?: string;
  stepColor?: ColorKeys;
  labelColor?: ColorKeys;
  textColor?: ColorKeys;
}

export interface ISteps {
  steps?: IStep[];
  isHidden?: boolean;

  stepSize?: number;
  lineWidth?: number;
  lineHeight?: number;

  successColor?: ColorKeys;
  errorColor?: ColorKeys;
  pendingColor?: ColorKeys;
  activeColor?: ColorKeys;
  disabledColor?: ColorKeys;
  lineColor?: ColorKeys;
}
