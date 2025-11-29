import * as S from './styles';
import type { IBottomDrawer } from '@shiba-ui/shared';
import { useEffect, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  TouchableWithoutFeedback,
  ScrollView,
  useWindowDimensions,
  Animated,
  PanResponder,
  Keyboard,
  BackHandler,
} from 'react-native';


export const BottomDrawer = ({
  isOpen = false,
  onClose,
  children,
  showHandle = true,
  background = 'section',
  borderRadius = 25,
  ...props
}: IBottomDrawer) => {
  const keyboardHeightRef = useRef(0);

  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  const maxHeight = height * 0.85;
  const translateY = useRef(new Animated.Value(height)).current;

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const closeDrawer = () => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onClose?.();
    });
  };

  const openDrawer = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

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

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', (e) => {
      keyboardHeightRef.current = e.endCoordinates.height;
      setKeyboardHeight(e.endCoordinates.height);
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      keyboardHeightRef.current = 0;
      setKeyboardHeight(0);
    });

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (keyboardHeightRef.current > 0) {
          Keyboard.dismiss();
          return true;
        }

        closeDrawer();
        return true;
      }
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
      backHandler.remove();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    } else {
      closeDrawer();
    }
  }, [isOpen]);

  return (
    <S.Wrapper accessibilityRole="none" data-testid="bottom-drawer-wrapper">
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
          paddingBottom: insets.bottom + 20 + keyboardHeight,
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
          keyboardShouldPersistTaps="handled"
          accessibilityRole="none"
          data-testid="bottom-drawer-content"
        >
          {children}
        </ScrollView>
      </S.Container>
    </S.Wrapper>
  );
};
