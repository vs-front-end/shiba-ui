import { ColorKeys } from '../../theme';

export interface IProgressBar {
  progressValue?: number;
  background?: ColorKeys;
  height?: number;
  width?: number;
  isHidden?: boolean;
  hideLabel?: boolean;
}
