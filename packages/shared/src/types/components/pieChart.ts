import type { ColorKeys } from '../../theme';
import type { IBaseVisibility } from './base-props';

export interface IPieData {
  /** Data percentage (0-100) */
  percent: number;
  /** Segment color from theme */
  color: ColorKeys;
  /** Segment label */
  label: string;
  /** Callback when segment is clicked */
  onClick?: () => void;
}

export interface IPieChart extends IBaseVisibility {
  /** Chart data array */
  data: IPieData[];
  /** Chart size in pixels */
  size?: number;
}
