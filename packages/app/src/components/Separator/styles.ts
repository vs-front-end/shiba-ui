import styled, { css } from 'styled-components/native';
import { ColorKeys, ISeparator } from '@shiba-ui/shared';

export const Container = styled.View<ISeparator>`
  ${({
    theme,
    color = 'highlight',
    orientation = 'horizontal',
    width = 1,
  }) => css`
    background: ${(color && theme.colors[color]) || theme.colors.highlight};

    ${orientation === 'horizontal'
      ? `
        height: ${width}px;
        width: 100%;
      `
      : `
        width: ${width}px;
        height: 100%;
      `}
  `}
`;
