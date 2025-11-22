import * as S from './styles';
import type { IToast, ColorKeys, IconKeys } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

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

    const id = nanoid();
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
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      const removeTimer = setTimeout(() => {
        if (id) {
          toastManager.removeToast(id);
        }
      }, 300);

      return () => clearTimeout(removeTimer);
    }, timeout || 3000);

    return () => clearTimeout(timer);
  }, [id, timeout]);

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
    <S.ToastItem
      role="alert"
      aria-live="polite"
      data-testid="toast"
      isExiting={isExiting}
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

      <S.CloseIcon
        onClick={() => id && toastManager.removeToast(id)}
        role="button"
        aria-label="Close notification"
        data-testid="toast-close-button"
      >
        <Icon icon="x" size={16} color={getIconColor()} />
      </S.CloseIcon>
    </S.ToastItem>
  );
};

export const ToastContainer = () => {
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
      role="region"
      aria-label="Notifications"
      data-testid="toast-container"
    >
      {toasts.map((toastItem) => (
        <ToastMessage key={toastItem?.id} {...toastItem} />
      ))}
    </S.Container>
  );
};
