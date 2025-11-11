import type { IBaseVisibility } from './base-props';

export interface ITimelineItem {
  /** Item unique identifier */
  id?: number | string;
  /** Item title */
  title: string;
  /** Item subtitle */
  subtitle: string;
  /** Item details list */
  details: string[];
}

export interface ITimeline extends IBaseVisibility {
  /** Timeline items data */
  data: ITimelineItem[];
}
