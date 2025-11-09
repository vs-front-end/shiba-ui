import styled, { css } from 'styled-components/native';
import { ColorKeys } from '@shiba-ui/shared';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View<{
  width?: number;
}>`
  ${({ width }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: ${width && width > 0 ? `${width}px` : '100%'};
  `}
`;

export const ChartContainer = styled.View<{
  height?: number;
}>`
  ${({ height = 12 }) => css`
    display: flex;
    width: 100%;
    height: ${`${height}px`};
  `}
`;

export const Bar = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const SegmentWrapper = styled.View<{
  width: number;
}>`
  ${({ width }) => css`
    height: 100%;
    width: ${`${width}%`};
  `}
`;

export const SegmentTouchable = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
`;

export const Segment = styled.View<{
  background: ColorKeys;
  borderRadius: number;
  isFirst: boolean;
  isLast: boolean;
  isActive: boolean;
}>`
  ${({ theme, background, borderRadius, isFirst, isLast, isActive }) => {
    const backgroundColor = theme.colors[background];
    return css`
      height: 100%;
      width: 100%;
      background: ${backgroundColor};
      border-top-left-radius: ${isFirst ? `${borderRadius}px` : '0px'};
      border-bottom-left-radius: ${isFirst ? `${borderRadius}px` : '0px'};
      border-top-right-radius: ${isLast ? `${borderRadius}px` : '0px'};
      border-bottom-right-radius: ${isLast ? `${borderRadius}px` : '0px'};
      opacity: ${isActive ? 0.9 : 1};
    `;
  }}
`;
