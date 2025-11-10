import type { ColorKeys } from '../../theme';

export interface IDonutData {
  percent: number;
  color: ColorKeys;
  label: string;
  onClick?: () => void;
}

export interface IDonutChart {
  data: IDonutData[];
  size?: number;
  thickness?: number;
  isHidden?: boolean;
}
