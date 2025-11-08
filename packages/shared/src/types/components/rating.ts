import { ColorKeys } from '../../theme';

export interface IRating {
  rating?: number;
  maxStars?: number;
  readonly?: boolean;
  handleChange?: (rating: number) => void;
  isHidden?: boolean;

  size?: number;
  gap?: number;
  background?: ColorKeys;
}
