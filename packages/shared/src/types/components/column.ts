import type { ReactNode } from 'react';
import type { IBaseVisibility } from './base-props';

export type AlignType = 'start' | 'end' | 'center';

export type JustifyType =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';

export interface IColumn extends IBaseVisibility {
  /** Gap between children in pixels */
  gap?: number;
  /** Alignment of children */
  align?: AlignType;
  /** Justification of children */
  justify?: JustifyType;
  /** Flex grow value */
  flex?: number;
  /** Column children */
  children: ReactNode;
}
