import { ReactNode } from 'react';
import { AlignType, JustifyType } from './column';

export interface IRow {
  gap?: number;
  align?: AlignType;
  justify?: JustifyType;
  flex?: number;
  noWrap?: boolean;
  isHidden?: boolean;
  children: ReactNode;
}
