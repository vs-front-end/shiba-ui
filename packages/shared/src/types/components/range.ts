import { ColorKeys } from '../../theme';

export interface IRange {
  value?: number;
  handleChange?: (range: number) => void;
  min?: number;
  max?: number;
  width?: number;
  height?: number;
  background?: ColorKeys;
  isHidden?: boolean;
}
