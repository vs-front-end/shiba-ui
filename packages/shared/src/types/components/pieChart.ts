import type { ColorKeys } from '../../theme';

export interface IPieData {
  percent: number;
  color: ColorKeys;
  label: string;
  onClick?: () => void;
}

export interface IPieChart {
  data: IPieData[];
  size?: number;
  isHidden?: boolean;
}
