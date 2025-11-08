import { ColorKeys } from '../../theme';

export interface IAvatar {
  username?: string;
  image?: string;
  size?: number;
  background?: ColorKeys;
  textColor?: ColorKeys;
  isHidden?: boolean;
}
