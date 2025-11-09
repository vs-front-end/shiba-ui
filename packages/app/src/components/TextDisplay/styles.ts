import styled, { css } from 'styled-components/native';
import { ITextDisplay } from '@shiba-ui/shared';

export const Container = styled.Text<ITextDisplay>`
  ${({
    theme,
    color = 'content',
    fontSize = 16,
    fontWeight = 'regular',
    textAlign = 'left',
    lineHeight,
    letterSpacing,
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${`${fontSize}px`};
    font-weight: ${theme.fontWeight[fontWeight]};

    text-align: ${textAlign};
    line-height: ${lineHeight + 'px' || 'normal'};
    letter-spacing: ${letterSpacing + 'px' || 'normal'};
  `}
`;
