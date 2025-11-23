import * as S from './styles';
import type { IBottomDrawer } from '@shiba-ui/shared';
import { TouchableWithoutFeedback, ScrollView, useWindowDimensions, Animated, PanResponder } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const BottomDrawer = ({
  isOpen = false,
  onClose,
  children,
  showHandle = true,
  background = 'section',
  borderRadius = 25,
  isHidden,
  ...props
}: IBottomDrawer) => {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  const maxHeight = height * 0.75;
  const translateY = useRef(new Animated.Value(height)).current;
  
  const [visible, setVisible] = useState(false);

  const closeDrawer = () => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      onClose?.();
    });
  };

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      closeDrawer();
    }
  }, [isOpen, height, translateY]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, { dy }) => dy > 0 && Math.abs(dy) > 5,
      onPanResponderGrant: () => {
        translateY.stopAnimation((value) => {
          translateY.setOffset(value);
          translateY.setValue(0);
        });
      },
      onPanResponderMove: (_, { dy }) => {
        if (dy > 0) {
          translateY.setValue(dy);
        }
      },
      onPanResponderRelease: (_, { dy }) => {
        translateY.flattenOffset();
        
        const dragThreshold = 10; 
        
        if (dy > dragThreshold) {
          onClose?.();
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
            tension: 50,
            friction: 8,
          }).start();
        }
      },
    })
  ).current;

  if (isHidden || !visible) return null;

  return (
    <S.Wrapper
      accessibilityRole="none"
      data-testid="bottom-drawer-wrapper"
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <S.Overlay
          accessibilityRole="button"
          accessibilityLabel="Close drawer"
          data-testid="bottom-drawer-overlay"
        />
      </TouchableWithoutFeedback>

      <S.Container
        style={{
          transform: [{ translateY }],
          paddingBottom: insets.bottom + 20,
        }}
        background={background}
        borderRadius={borderRadius}
        maxHeight={maxHeight}
        accessibilityRole="none"
        data-testid="bottom-drawer"
        {...props}
      >
        {showHandle && (
          <S.HandleContainer
            {...panResponder.panHandlers}
            accessibilityRole="button"
            accessibilityLabel="Drag to close drawer"
            data-testid="bottom-drawer-handle"
          >
            <S.Handle />
          </S.HandleContainer>
        )}

        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{ maxHeight: maxHeight - 60 }}
          accessibilityRole="none"
          data-testid="bottom-drawer-content"
        >
          {children}
        </ScrollView>
      </S.Container>
    </S.Wrapper>
  );
};
