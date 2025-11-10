import * as S from './styles';
import type { IStackedChart } from '@shiba-ui/shared';
import { useMemo, useState } from 'react';

export const StackedChart = ({
  data = [],
  width,
  height = 12,
  borderRadius = 8,
  isHidden,
  ...props
}: IStackedChart) => {
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
      role="figure"
      data-testid="stacked-chart"
      aria-label="Stacked Chart"
      width={width}
      {...props}
    >
      <S.ChartContainer
        height={height}
        aria-label={`Chart showing: ${validatedData
          .map((item) => `${item.label} ${item.percent.toFixed(1)}%`)
          .join(', ')}`}
      >
        <S.Bar>
          {validatedData.map((segment, index) => {
            const { percent, color, onClick, label } = segment;
            const isFirst = index === 0;
            const isLast = index === validatedData.length - 1;
            const isActive = activeIndex === index;

            return (
              <S.Segment
                key={index}
                width={percent}
                background={color}
                borderRadius={borderRadius}
                isFirst={isFirst}
                isLast={isLast}
                isActive={isActive}
                onClick={onClick}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                role="button"
                aria-label={`${label}: ${percent.toFixed(1)}%`}
                data-testid={`stacked-chart-segment-${index}`}
              />
            );
          })}
        </S.Bar>
      </S.ChartContainer>
    </S.Container>
  );
};
