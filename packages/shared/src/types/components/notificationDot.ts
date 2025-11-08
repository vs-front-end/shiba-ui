import { ColorKeys } from '../../theme';
import { IconKeys } from './icon';
import React from 'react';

export interface INotificationDot extends React.HTMLAttributes<HTMLDivElement> {
  icon?: IconKeys;
  count?: number;
  iconColor?: ColorKeys;
  dotColor?: ColorKeys;
  textColor?: ColorKeys;
  size?: number;
  isHidden?: boolean;
}
