import type { ColorKeys } from '../../theme';
import type { IBaseVisibility } from './base-props';

export interface IDonutData {
  /** Data percentage (0-100) */
  percent: number;
  /** Segment color from theme */
  color: ColorKeys;
  /** Segment label */
  label: string;
  /** Callback when segment is clicked */
  onClick?: () => void;
}

export interface IDonutChart extends IBaseVisibility {
  /** Chart data array */
  data: IDonutData[];
  /** Chart size in pixels */
  size?: number;
  /** Donut thickness in pixels */
  thickness?: number;
}
