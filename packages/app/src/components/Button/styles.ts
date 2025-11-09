import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { IButton } from '@shiba-ui/shared';

export const PressableWrapper = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})<{ width?: number }>`
  ${({ width }) => css`
    width: ${width ? `${width}px` : '100%'};
  `}
`;

export const Container = styled.View<
  IButton & { isDisabled?: boolean; isLoading?: boolean }
>`
  ${({
    theme,
    height = 40,
    background = 'primary',
    borderColor = 'primary',
    borderRadius = 8,
    borderWidth = 0,
    gap = '12px',
    variant = 'solid',
    isDisabled,
  }) => {
    const getBorderWidth = () => {
      if (variant === 'text') return 0;

      if (variant === 'outlined') {
        return borderWidth > 0 ? borderWidth : 1;
      }

      return borderWidth;
    };

    const getBackground = () => {
      if (variant === 'solid') {
        return (background && theme.colors[background]) || theme.colors.primary;
      }

      return 'transparent';
    };

    return css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: ${gap};

      border-style: solid;
      border-width: ${`${getBorderWidth()}px`};
      border-color: ${theme.colors[borderColor]};
      border-radius: ${`${borderRadius}px`};

      padding: 8px 16px;
      height: ${`${height}px`};
      width: 100%;
      background: ${getBackground()};

      overflow: hidden;
      opacity: ${isDisabled ? 0.5 : 1};
    `;
  }}
`;
