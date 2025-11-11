import styled, { css } from 'styled-components/native';
import type { ITextDisplay } from '@shiba-ui/shared';

export const Container = styled.Text<ITextDisplay>`
  ${({
    theme,
    color = 'content',
    fontSize = 16,
    textAlign = 'left',
    lineHeight,
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${`${fontSize}px`};

    text-align: ${textAlign};
    ${lineHeight ? `line-height: ${lineHeight}px;` : ''}
  `}
`;
