import styled, { css } from 'styled-components/native';
import { ColorKeys, ITextDisplay } from '@shiba-ui/shared';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const StepContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
`;

export const Step = styled.View<{
  stepSize?: number;
  background?: ColorKeys;
  textColor?: ColorKeys;
}>`
  ${({ theme, stepSize = 32, background = 'primary' }) => {
    const backgroundColor =
      (background && theme.colors[background]) || theme.colors.primary;

    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      width: ${`${stepSize}px`};
      height: ${`${stepSize}px`};
      background: ${backgroundColor};
      border-radius: 50%;
      position: relative;
      z-index: 2;
      border: 2px solid transparent;
    `;
  }}
`;

export const StepLabel = styled.View`
  position: absolute;
  top: 100%;
  margin-top: 8px;
  align-self: center;
  min-width: 60px;
  max-width: 120px;
  align-items: center;
  justify-content: center;
`;

export const LabelText = styled.Text<ITextDisplay>`
  ${({
    theme,
    color = 'content',
    fontSize = 14,
    fontWeight = 'regular',
    textAlign = 'center',
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${`${fontSize}px`};
    font-weight: ${theme.fontWeight[fontWeight]};
    text-align: ${textAlign};
  `}
`;

export const Connector = styled.View<{
  lineWidth?: number;
  lineHeight?: number;
  lineColor?: ColorKeys;
}>`
  ${({ theme, lineHeight = 2, lineColor = 'highlight' }) => {
    const connectorColor =
      (lineColor && theme.colors[lineColor]) || theme.colors.highlight;

    return css`
      flex: 1;
      min-width: 0;
      height: ${`${lineHeight}px`};
      background: ${connectorColor};
      margin: 0 8px;
      position: relative;
      z-index: 1;
    `;
  }}
`;
