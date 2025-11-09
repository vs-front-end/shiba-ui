import * as S from './styles';
import { IAccordion } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export const Accordion = ({
  title,
  icon,
  children,
  onToggle,
  background,
  borderColor,
  titleColor,
  iconColor,
  iconSize,
  titleSize,
  width,
  isHidden,
  ...props
}: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedRotation = useRef(new Animated.Value(0)).current;

  const heightInterpolation = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000],
  });

  const rotationInterpolation = animatedRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleToggle = () => {
    onToggle?.();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const duration = 300;
    const toValue = isOpen ? 1 : 0;

    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(animatedOpacity, {
        toValue,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(animatedRotation, {
        toValue,
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isOpen]);

  if (isHidden) return null;

  return (
    <S.Container
      data-testid="accordion"
      background={background}
      borderColor={borderColor}
      width={width}
      {...props}
    >
      <S.Header
        data-testid="accordion-header"
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
        accessibilityLabel={`${isOpen ? 'Collapse' : 'Expand'} ${title}`}
        onPress={handleToggle}
      >
        <S.TitleContainer>
          {icon && (
            <Icon
              icon={icon}
              color={iconColor || 'content'}
              size={iconSize || 18}
            />
          )}

          <TextDisplay text={title} color={titleColor} fontSize={titleSize} />
        </S.TitleContainer>

        <Animated.View
          style={{
            transform: [{ rotate: rotationInterpolation }],
          }}
        >
          <Icon
            icon={isOpen ? 'minus' : 'plus'}
            color={iconColor || 'content'}
            size={18}
          />
        </Animated.View>
      </S.Header>

      <Animated.View
        style={{
          maxHeight: heightInterpolation,
          opacity: animatedOpacity,
          overflow: 'hidden',
        }}
      >
        <S.Content hasIcon={!!icon} data-testid="accordion-content">
          {children}
        </S.Content>
      </Animated.View>
    </S.Container>
  );
};
