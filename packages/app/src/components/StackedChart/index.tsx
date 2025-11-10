import * as S from './styles';
import type { IStackedChart, IStackedData } from '@shiba-ui/shared';
import { useMemo, useState } from 'react';

interface IStackedDataWithPress extends IStackedData {
  onPress?: () => void;
}

interface IStackedChartProps extends Omit<IStackedChart, 'data'> {
  data: IStackedDataWithPress[];
}

export const StackedChart = ({
  data = [],
  width,
  height = 12,
  borderRadius = 8,
  isHidden,
  ...props
}: IStackedChartProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const validatedData = useMemo(() => {
    const total = data.reduce((sum, item) => sum + item.percent, 0);

    if (total !== 100) {
      return data.map((item) => ({
        ...item,
        percent: (item.percent / total) * 100,
      }));
    }

    return data;
  }, [data]);

  if (isHidden || !data || data.length === 0) return null;

  return (
    <S.Container
      accessibilityRole="none"
      accessibilityLabel="Stacked Chart"
      data-testid="stacked-chart"
      width={width}
      {...props}
    >
      <S.ChartContainer
        height={height}
        accessibilityRole="none"
        accessibilityLabel={`Chart showing: ${validatedData
          .map((item) => `${item.label} ${item.percent.toFixed(1)}%`)
          .join(', ')}`}
      >
        <S.Bar>
          {validatedData.map((segment, index) => {
            const { percent, color, onPress, label } = segment;
            const isFirst = index === 0;
            const isLast = index === validatedData.length - 1;
            const isActive = activeIndex === index;

            const segmentContent = (
              <S.Segment
                background={color}
                borderRadius={borderRadius}
                isFirst={isFirst}
                isLast={isLast}
                isActive={isActive}
                data-testid={`stacked-chart-segment-${index}`}
              />
            );

            if (onPress) {
              return (
                <S.SegmentWrapper key={index} width={percent}>
                  <S.SegmentTouchable
                    onPress={onPress}
                    onPressIn={() => setActiveIndex(index)}
                    onPressOut={() => setActiveIndex(null)}
                    activeOpacity={0.9}
                    accessibilityRole="button"
                    accessibilityLabel={`${label}: ${percent.toFixed(1)}%`}
                  >
                    {segmentContent}
                  </S.SegmentTouchable>
                </S.SegmentWrapper>
              );
            }

            return (
              <S.SegmentWrapper key={index} width={percent}>
                {segmentContent}
              </S.SegmentWrapper>
            );
          })}
        </S.Bar>
      </S.ChartContainer>
    </S.Container>
  );
};
