import type { ColorKeys } from '../../theme';

export interface IStackedData {
  percent: number;
  color: ColorKeys;
  label: string;
  onClick?: () => void;
}

export interface IStackedChart {
  data: IStackedData[];
  width?: number;
  height?: number;
  borderRadius?: number;
  isHidden?: boolean;
}
