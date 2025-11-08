import styled from 'styled-components';
import { ColorKeys, ISeparator } from '@shiba-ui/shared';

export const Container = styled.div<ISeparator>`
  display: flex;
  background: ${({ theme, color = 'highlight' }) =>
    theme.colors[color as ColorKeys]};

  ${({ orientation = 'horizontal', width = 1 }) =>
    orientation === 'horizontal'
      ? `
        height: ${width}px;
        width: 100%;
      `
      : `
        width: ${width}px;
        height: 100%;
      `}
`;
