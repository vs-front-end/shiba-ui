import type { ColorKeys } from '../../theme';
import type { IBaseVisibility, IBaseLayout } from './base-props';

export interface IStackedData {
  /** Data percentage (0-100) */
  percent: number;
  /** Segment color from theme */
  color: ColorKeys;
  /** Segment label */
  label: string;
}

export interface IStackedChart extends IBaseVisibility, IBaseLayout {
  /** Chart data array */
  data: IStackedData[];
  /** Border radius in pixels */
  borderRadius?: number;
}
