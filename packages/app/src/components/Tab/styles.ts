import styled, { css } from 'styled-components/native';
import { ColorKeys } from '@shiba-ui/shared';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View<{
  width?: number;
  height?: number;
}>`
  ${({ width, height }) => css`
    display: flex;
    flex-direction: row;
    width: ${width && width > 0 ? `${width}px` : '100%'};
    height: ${height && height > 0 ? `${height}px` : 'auto'};
  `}
`;

export const Option = styled.View<{
  isActive?: boolean;
  activeColor?: ColorKeys;
  borderColor?: ColorKeys;
}>`
  ${({
    theme,
    isActive,
    activeColor = 'primary',
    borderColor = 'highlight',
  }) => {
    const borderBottomColor = isActive
      ? theme.colors[activeColor]
      : theme.colors[borderColor];

    return css`
      flex: 1;
      padding: 12px 16px 8px 16px;
      border-bottom-width: 2px;
      border-bottom-color: ${borderBottomColor};
    `;
  }}
`;

export const OptionTouchable = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
