import * as S from './styles';
import type { IToast, ColorKeys, IconKeys } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { useState, useEffect, useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

const toastManager = {
  listeners: new Set<(toasts: IToast[]) => void>(),
  toasts: [] as IToast[],

  subscribe(listener: (toasts: IToast[]) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },

  addToast(toast: IToast) {
    if (toast.message) {
      const existingToast = this.toasts.find(
        (t) => t.message === toast.message
      );

      if (existingToast) {
        return;
      }
    }

    const id = generateId();
    this.toasts.push({ ...toast, id });
    this.notify();
  },

  removeToast(id: string) {
    if (id) {
      this.toasts = this.toasts.filter((toast) => toast.id !== id);
      this.notify();
    }
  },

  notify() {
    this.listeners.forEach((listener) => listener([...this.toasts]));
  },
};

export const toast = {
  success: (message: string, options?: Partial<IToast>) =>
    toastManager.addToast({ message, variant: 'success', ...options }),

  error: (message: string, options?: Partial<IToast>) =>
    toastManager.addToast({ message, variant: 'error', ...options }),

  warning: (message: string, options?: Partial<IToast>) =>
    toastManager.addToast({ message, variant: 'warning', ...options }),
};

const ToastMessage = ({
  id,
  message,
  color,
  timeout,
  background = 'section',
  height,
  variant,
  width,
  icon,
  borderRadius,
}: IToast) => {
  const translateY = useRef(new Animated.Value(-200)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    translateY.setValue(-200);
    opacity.setValue(0);

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -200,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        if (id) {
          toastManager.removeToast(id);
        }
      });
    }, timeout || 3000);

    return () => clearTimeout(timer);
  }, [id, timeout, translateY, opacity]);

  const getBackgroundColor = (): ColorKeys => {
    if (background && background !== 'section') return background;
    if (variant === 'success') return 'success';
    if (variant === 'error') return 'error';
    if (variant === 'warning') return 'warning';
    return 'section';
  };

  const getIcon = (): IconKeys => {
    if (icon) return icon;
    if (variant === 'success') return 'check-circle';
    if (variant === 'error') return 'x-circle';
    if (variant === 'warning') return 'alert-triangle';
    return 'info';
  };

  const getTextColor = (): ColorKeys => {
    if (color) return color;
    if (variant) return 'paper';
    return 'content';
  };

  const getIconColor = (): ColorKeys => {
    if (variant) return 'paper';
    return 'content';
  };

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        opacity,
        width: '100%',
      }}
    >
      <S.ToastItem
        accessibilityRole="alert"
        accessibilityLiveRegion="polite"
        data-testid="toast"
        variant={variant}
        background={getBackgroundColor()}
        height={height}
        width={width}
        borderRadius={borderRadius}
      >
        <S.ContentWrapper>
          <S.IconWrapper>
            <Icon icon={getIcon()} size={16} color={getIconColor()} />
          </S.IconWrapper>

          <TextDisplay
            text={message || ''}
            fontSize={14}
            fontWeight="medium"
            color={getTextColor()}
          />
        </S.ContentWrapper>

        <TouchableOpacity
          onPress={() => id && toastManager.removeToast(id)}
          accessibilityRole="button"
          accessibilityLabel="Close notification"
          data-testid="toast-close-button"
          activeOpacity={0.8}
        >
          <S.CloseIcon>
            <Icon icon="x" size={14} color={getIconColor()} />
          </S.CloseIcon>
        </TouchableOpacity>
      </S.ToastItem>
    </Animated.View>
  );
};

export const ToastContainer = () => {
  const insets = useSafeAreaInsets();
  const topOffset = insets.top + 8;
  const leftPadding = Math.max(insets.left, 8);
  const rightPadding = Math.max(insets.right, 8);

  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    const unsubscribe = toastManager.subscribe((newToasts) => {
      setToasts([...newToasts]);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <S.Container
      accessibilityRole="none"
      accessibilityLabel="Notifications"
      data-testid="toast-container"
      pointerEvents="box-none"
      topOffset={topOffset}
      leftPadding={leftPadding}
      rightPadding={rightPadding}
    >
      {toasts.map((toastItem) => (
        <ToastMessage key={toastItem?.id} {...toastItem} />
      ))}
    </S.Container>
  );
};
