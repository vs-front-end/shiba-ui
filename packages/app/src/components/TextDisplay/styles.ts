import styled, { css } from 'styled-components/native';
import type { ITextDisplay } from '@shiba-ui/shared';

export const Container = styled.Text<ITextDisplay>`
  ${({
    theme,
    color = 'content',
    fontSize = 16,
    fontWeight = 'regular',
    textAlign = 'left',
    lineHeight,
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${`${fontSize}px`};
    font-weight: ${theme.fontWeight[fontWeight]};

    text-align: ${textAlign};
    ${lineHeight ? `line-height: ${lineHeight}px;` : ''}
  `}
`;
