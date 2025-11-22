import styled, { css } from 'styled-components';
import type { ColorKeys } from '@shiba-ui/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  padding: 0;
`;

export const Item = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  position: relative;
`;

export const Marker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;

  width: 24px;
  padding-top: 8px;
`;

export const Circle = styled.div<{ markerColor?: ColorKeys }>`
  ${({ theme, markerColor = 'primary' }) => css`
    width: 8px;
    height: 8px;
    border-radius: 50%;

    background-color: ${theme.colors[markerColor]};
    border: 2px solid ${theme.colors.section || theme.colors.background};
    box-shadow: 0 0 0 2px ${theme.colors[markerColor]};
    margin-bottom: 8px;

    z-index: 1;
    flex-shrink: 0;
  `}
`;

export const Line = styled.div<{ markerColor?: ColorKeys }>`
  ${({ theme, markerColor = 'primary' }) => css`
    flex: 1;
    width: 2px;
    min-height: 0;

    background: linear-gradient(
      to bottom,
      ${theme.colors[markerColor]}40,
      ${theme.colors.highlight}40
    );
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  row-gap: 8px;
  padding-bottom: 8px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding-left: 4px;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 8px;
  line-height: 1.5;
`;

export const Bullet = styled.div`
  ${({ theme }) => css`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${theme.colors.accent};
    margin-top: 6px;
    flex-shrink: 0;
  `}
`;
