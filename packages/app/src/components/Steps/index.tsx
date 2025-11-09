import * as S from './styles';
import { ISteps, IconKeys } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { Fragment } from 'react';
import { TouchableOpacity } from 'react-native';

export const Steps = ({
  steps,
  isHidden,
  stepSize,
  lineWidth,
  lineHeight,
  successColor,
  errorColor,
  pendingColor,
  activeColor,
  disabledColor,
  lineColor,
  ...props
}: ISteps) => {
  const getStepIcon = (status?: string) => {
    if (status === 'success') return 'check';
    if (status === 'error') return 'x-circle';
    if (status === 'pending') return 'info';
    return 'check-circle';
  };

  const getStepColor = (status: string) => {
    if (status === 'success') return successColor || 'success';
    if (status === 'error') return errorColor || 'error';
    if (status === 'pending') return pendingColor || 'warning';
    if (status === 'active') return activeColor || 'primary';
    return disabledColor || 'highlight';
  };

  if (isHidden || !steps || steps.length === 0) return null;

  return (
    <S.Container
      accessibilityRole="none"
      accessibilityLabel="Progress steps"
      data-testid="steps"
      {...props}
    >
      {steps.map((step, index) => {
        const status = step?.status || 'active';
        const color = step?.stepColor || getStepColor(status);

        const getIconName = () => {
          if (step?.content && typeof step.content === 'string') {
            return step.content;
          }

          if (
            !step?.content &&
            ['success', 'error', 'pending'].includes(status)
          ) {
            return getStepIcon(status);
          }

          return undefined;
        };

        const iconName = getIconName();

        const stepContent = (
          <S.StepContainer
            accessibilityLabel={`Step ${index + 1}: ${status}${
              step?.label ? `, ${step.label}` : ''
            }`}
            data-testid={`step-${index}`}
          >
            <S.Step
              stepSize={stepSize}
              background={color}
              textColor={step?.textColor}
            >
              {iconName ? (
                <Icon
                  icon={iconName as IconKeys}
                  color={step?.textColor || 'paper'}
                  size={(stepSize || 32) / 2}
                />
              ) : (
                <TextDisplay
                  fontSize={(stepSize || 32) / 2.5}
                  text={String(step?.content || index + 1)}
                  color={step?.textColor || 'content'}
                />
              )}

              {step?.label && (
                <S.StepLabel>
                  <S.LabelText
                    color={step?.labelColor || 'content'}
                    fontSize={14}
                    textAlign="center"
                    numberOfLines={1}
                  >
                    {step.label}
                  </S.LabelText>
                </S.StepLabel>
              )}
            </S.Step>
          </S.StepContainer>
        );

        if (step?.onClick) {
          return (
            <Fragment key={step.id}>
              <TouchableOpacity onPress={step.onClick} activeOpacity={0.8}>
                {stepContent}
              </TouchableOpacity>

              {index < steps.length - 1 && (
                <S.Connector
                  key={`connector-${index}`}
                  lineWidth={lineWidth}
                  lineHeight={lineHeight}
                  lineColor={lineColor}
                  data-testid={`connector-${index}`}
                />
              )}
            </Fragment>
          );
        }

        return (
          <Fragment key={step.id}>
            {stepContent}

            {index < steps.length - 1 && (
              <S.Connector
                key={`connector-${index}`}
                lineWidth={lineWidth}
                lineHeight={lineHeight}
                lineColor={lineColor}
                data-testid={`connector-${index}`}
              />
            )}
          </Fragment>
        );
      })}
    </S.Container>
  );
};
