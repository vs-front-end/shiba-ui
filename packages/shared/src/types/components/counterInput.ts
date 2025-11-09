import { ColorKeys } from '../../theme';

export interface ICounterInput {
  value?: number;
  minValue?: number;
  maxValue?: number;
  increaseBy?: number;
  handleChange?: (value: number) => void;
  isDisabled?: boolean;
  isHidden?: boolean;

  width?: number;
  height?: number;
  background?: ColorKeys;
  borderRadius?: number;

  buttonBackground?: ColorKeys;
  valueColor?: ColorKeys;
  iconColor?: ColorKeys;
  iconSize?: number;
}
