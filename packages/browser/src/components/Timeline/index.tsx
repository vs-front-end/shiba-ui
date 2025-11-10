import * as S from './styles';
import type { ITimeline, ITimelineItem } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';

export const Timeline = ({ data = [], isHidden, ...props }: ITimeline) => {
  if (isHidden || !data || data.length === 0) return null;

  return (
    <S.Container
      role="list"
      aria-label="Timeline"
      data-testid="timeline"
      {...props}
    >
      {data.map((item: ITimelineItem, index: number) => (
        <S.Item key={item?.id || index} role="listitem">
          <S.Marker aria-hidden="true">
            <S.Circle />
            {index < data.length - 1 && <S.Line />}
          </S.Marker>

          <S.Content>
            <S.Header>
              <TextDisplay text={item?.title} fontWeight="bold" />

              <TextDisplay
                text={item?.subtitle}
                fontSize={14}
                color="accent"
                fontWeight="medium"
              />
            </S.Header>

            <S.Details role="list" aria-label="Details">
              {item?.details?.map((topic: string, detailIndex: number) => (
                <S.DetailItem key={detailIndex} role="listitem">
                  <TextDisplay text="•" aria-hidden="true" />
                  <TextDisplay text={topic} />
                </S.DetailItem>
              ))}
            </S.Details>
          </S.Content>
        </S.Item>
      ))}
    </S.Container>
  );
};
