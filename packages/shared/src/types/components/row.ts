import type { ReactNode } from 'react';
import type { AlignType, JustifyType } from './column';
import type { IBaseVisibility } from './base-props';

export interface IRow extends IBaseVisibility {
  /** Gap between children in pixels */
  gap?: number;
  /** Alignment of children */
  align?: AlignType;
  /** Justification of children */
  justify?: JustifyType;
  /** Flex grow value */
  flex?: number;
  /** Prevents wrapping of children */
  noWrap?: boolean;
  /** Row children */
  children: ReactNode;
}
