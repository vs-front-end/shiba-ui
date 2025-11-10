import type { ReactNode } from 'react';
import type { AlignType, JustifyType } from './column';

export interface IRow {
  gap?: number;
  align?: AlignType;
  justify?: JustifyType;
  flex?: number;
  noWrap?: boolean;
  isHidden?: boolean;
  children: ReactNode;
}
