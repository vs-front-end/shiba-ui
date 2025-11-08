import { ColorKeys } from '../../theme';
import { IconKeys } from './icon';
import React from 'react';

export interface IAccordion extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  titleSize?: number;
  titleColor?: ColorKeys;

  icon?: IconKeys;
  iconSize?: number;
  iconColor?: ColorKeys;

  onToggle?: () => void;
  children?: React.ReactNode;

  width?: number;
  background?: ColorKeys;
  borderColor?: ColorKeys;
  borderRadius?: number;
  borderWidth?: number;
  isHidden?: boolean;
}
