import * as S from './styles';
import type { ITimeline } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';

export const Timeline = ({
  data = [],
  isHidden,
  markerColor = 'primary',
  ...props
}: ITimeline) => {
  if (isHidden || data.length === 0) return null;

  return (
    <S.Container role="list" data-testid="timeline" {...props}>
      {data.map((item, index) => (
        <S.Item key={item?.id || index} role="listitem">
          <S.Marker aria-hidden="true">
            <S.Circle markerColor={markerColor} />
            <S.Line markerColor={markerColor} />
          </S.Marker>

          <S.Content>
            <S.Header>
              <TextDisplay text={item.title} fontWeight="bold" />

              <TextDisplay
                text={item.subtitle}
                fontSize={14}
                color="accent"
                fontWeight="medium"
              />
            </S.Header>

            {item.details && item.details.length > 0 && (
              <S.Details>
                {item.details.map((topic, detailIndex) => (
                  <S.DetailItem key={`${item?.id || index}-${detailIndex}`}>
                    <S.Bullet aria-hidden="true" />
                    <TextDisplay text={topic} fontSize={14} />
                  </S.DetailItem>
                ))}
              </S.Details>
            )}
          </S.Content>
        </S.Item>
      ))}
    </S.Container>
  );
};
