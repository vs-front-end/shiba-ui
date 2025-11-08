import styled, { css } from 'styled-components';
import { ITextDisplay } from '@shiba-ui/shared';

export const Container = styled.span<ITextDisplay>`
  ${({
    theme,
    color = 'content',
    fontSize = 16,
    fontWeight = 'regular',
    textAlign = 'left',
    textDecoration = 'none',
    lineHeight = 'normal',
    letterSpacing = 'normal',
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${`${fontSize}px`};
    font-weight: ${theme.fontWeight[fontWeight]};

    text-align: ${textAlign};
    text-decoration: ${textDecoration};

    line-height: ${lineHeight};
    letter-spacing: ${`${letterSpacing}px`};

    font-family: ${theme.fontFamily};

    word-break: break-word;
    overflow-wrap: anywhere;
  `}
`;
