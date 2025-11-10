import styled, { css } from 'styled-components/native';
import type { IAccordion } from '@shiba-ui/shared';

export const Container = styled.View<IAccordion>`
  ${({
    theme,
    background,
    borderColor,
    width,
    borderRadius,
    borderWidth,
  }) => css`
    overflow: hidden;

    width: ${width ? `${width}px` : '100%'};
    background: ${(background && theme.colors[background]) || 'transparent'};

    border-style: solid;
    border-width: ${borderWidth ? `${borderWidth}px` : '1px'};
    border-radius: ${borderRadius ? `${borderRadius}px` : '8px'};
    border-color: ${theme.colors[borderColor || 'highlight']};
  `}
`;

export const Header = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 16px 20px;

  background: transparent;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Content = styled.View<{ hasIcon?: boolean }>`
  ${({ hasIcon }) => css`
    width: 100%;
    padding: ${hasIcon ? '0 48px 16px 48px' : '0 36px 16px 20px'};
  `}
`;
