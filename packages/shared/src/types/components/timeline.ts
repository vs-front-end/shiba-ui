export interface ITimelineItem {
  id?: number | string;
  title: string;
  subtitle: string;
  details: string[];
}

export interface ITimeline {
  data: ITimelineItem[];
  isHidden?: boolean;
}
