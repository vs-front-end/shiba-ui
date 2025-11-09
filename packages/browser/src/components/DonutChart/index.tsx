import * as S from './styles';
import { IDonutChart } from '@shiba-ui/shared';
import { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';

export const DonutChart = ({
  data = [],
  size = 120,
  thickness = 20,
  isHidden,
  ...props
}: IDonutChart) => {
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

  const outerRadius = size / 2 - 10;
  const innerRadius = outerRadius - thickness;
  const centerX = size / 2;
  const centerY = size / 2;

  let startAngle = -Math.PI / 2;

  if (isHidden || !data || data.length === 0) return null;

  return (
    <S.Container role="figure" aria-label="Donut Chart" {...props}>
      <S.ChartContainer
        size={size}
        data-testid="donut-chart"
        role="img"
        aria-label={`Chart showing: ${validatedData
          .map((item) => `${item.label} ${item.percent.toFixed(1)}%`)
          .join(', ')}`}
      >
        <S.Svg viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
          {validatedData.map((slice, index) => {
            const { percent, color, onClick } = slice;
            const largeArcFlag = percent > 50 ? 1 : 0;

            const outerEnd = calculateCoordinates(
              percent,
              outerRadius,
              startAngle
            );

            const innerEnd = calculateCoordinates(
              percent,
              innerRadius,
              startAngle
            );

            const innerStart = {
              x: innerRadius * Math.cos(startAngle),
              y: innerRadius * Math.sin(startAngle),
            };
            
            const isActive = activeIndex === index;

            const pathData = [
              `M ${centerX + innerStart.x} ${centerY + innerStart.y}`,
              `L ${centerX + outerRadius * Math.cos(startAngle)} ${
                centerY + outerRadius * Math.sin(startAngle)
              }`,
              `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${centerX + outerEnd.x} ${
                centerY + outerEnd.y
              }`,
              `L ${centerX + innerEnd.x} ${centerY + innerEnd.y}`,
              `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${centerX + innerStart.x} ${
                centerY + innerStart.y
              }`,
              'Z',
            ].join(' ');

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
                data-testid={`donut-chart-slice-${index}`}
              />
            );
          })}
        </S.Svg>
      </S.ChartContainer>
    </S.Container>
  );
};
