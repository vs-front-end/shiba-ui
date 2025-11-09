import * as S from './styles';
import { IPieChart } from '@shiba-ui/shared';
import { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';

export const PieChart = ({
  data = [],
  size = 120,
  isHidden,
  ...props
}: IPieChart) => {
  const { colors } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const calculateCoordinates = (
    percent: number,
    radius: number,
    startAngle: number
  ) => {
    const angle = (percent * 360 * Math.PI) / 18000;
    const x = radius * Math.cos(startAngle + angle);
    const y = radius * Math.sin(startAngle + angle);

    return { x, y };
  };

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

  const radius = size / 2 - 10;
  const centerX = size / 2;
  const centerY = size / 2;

  let startAngle = -Math.PI / 2;

  if (isHidden || !data || data.length === 0) return null;

  return (
    <S.Container role="figure" aria-label="Pie Chart" {...props}>
      <S.ChartContainer
        size={size}
        data-testid="pie-chart"
        role="img"
        aria-label={`Chart showing: ${validatedData
          .map((item) => `${item.label} ${item.percent.toFixed(1)}%`)
          .join(', ')}`}
      >
        <S.Svg viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
          {validatedData.map((slice, index) => {
            const { percent, color, onClick } = slice;
            const largeArcFlag = percent > 50 ? 1 : 0;
            const end = calculateCoordinates(percent, radius, startAngle);
            const isActive = activeIndex === index;

            const pathData = [
              `M ${centerX} ${centerY}`,
              `L ${centerX + radius * Math.cos(startAngle)} ${
                centerY + radius * Math.sin(startAngle)
              }`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${centerX + end.x} ${
                centerY + end.y
              }`,
              'Z',
            ].join(' ');

            const currentStartAngle = startAngle;
            startAngle += (percent * 2 * Math.PI) / 100;

            return (
              <S.Path
                key={index}
                onClick={onClick}
                d={pathData}
                fill={colors[color]}
                isActive={isActive}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                role="button"
                aria-label={`${slice.label}: ${percent.toFixed(1)}%`}
                data-testid={`pie-chart-slice-${index}`}
              />
            );
          })}
        </S.Svg>
      </S.ChartContainer>
    </S.Container>
  );
};
