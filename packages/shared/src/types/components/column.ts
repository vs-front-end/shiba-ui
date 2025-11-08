import { ReactNode } from 'react';

export type AlignType = 'start' | 'end' | 'center';

export type JustifyType =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';

export interface IColumn {
  gap?: number;
  align?: AlignType;
  justify?: JustifyType;
  isHidden?: boolean;
  children: ReactNode;
}
