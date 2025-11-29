import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import type { IDialog, IBottomDrawer } from '@shiba-ui/shared';
import { Dialog } from '../components/Dialog';
import { BottomDrawer } from '../components/BottomDrawer';

interface DialogState extends Omit<IDialog, 'isOpen' | 'isHidden'> {
  isOpen: boolean;
}

interface DrawerState
  extends Omit<IBottomDrawer, 'isOpen' | 'isHidden' | 'children'> {
  isOpen: boolean;
  content: ReactNode;
}

interface UIOverlayContextType {
  openDialog: (props: Omit<IDialog, 'isOpen' | 'isHidden'>) => void;
  closeDialog: () => void;
  openBottomDrawer: (
    content: ReactNode,
    props?: Omit<IBottomDrawer, 'isOpen' | 'isHidden' | 'children'>
  ) => void;
  closeBottomDrawer: () => void;
}

const UIOverlayContext = createContext<UIOverlayContextType | undefined>(
  undefined
);

interface UIOverlayProviderProps {
  children: ReactNode;
}

export const UIOverlayProvider = ({ children }: UIOverlayProviderProps) => {
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen: false,
  });

  const [drawerState, setDrawerState] = useState<DrawerState>({
    isOpen: false,
    content: null,
  });

  const openDialog = useCallback(
    (props: Omit<IDialog, 'isOpen' | 'isHidden'>) => {
      setDialogState({
        ...props,
        isOpen: true,
      });
    },
    []
  );

  const closeDialog = useCallback(() => {
    setDialogState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  const handleDialogConfirm = useCallback(() => {
    dialogState.onConfirm?.();
    closeDialog();
  }, [dialogState.onConfirm, closeDialog]);

  const handleDialogCancel = useCallback(() => {
    dialogState.onCancel?.();
    closeDialog();
  }, [dialogState.onCancel, closeDialog]);

  const openBottomDrawer = useCallback(
    (
      content: ReactNode,
      props?: Omit<IBottomDrawer, 'isOpen' | 'isHidden' | 'children'>
    ) => {
      setDrawerState({
        isOpen: true,
        content,
        ...props,
      });
    },
    []
  );

  const closeBottomDrawer = useCallback(() => {
    setDrawerState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  return (
    <UIOverlayContext.Provider
      value={{
        openDialog,
        closeDialog,
        openBottomDrawer,
        closeBottomDrawer,
      }}
    >
      {children}

      {dialogState.isOpen && (
        <Dialog
          {...dialogState}
          onConfirm={handleDialogConfirm}
          onCancel={handleDialogCancel}
        />
      )}

      {drawerState.isOpen && (
        <BottomDrawer
          isOpen={drawerState.isOpen}
          onClose={closeBottomDrawer}
          background={drawerState.background}
          borderRadius={drawerState.borderRadius}
          showHandle={drawerState.showHandle}
          borderColor={drawerState.borderColor}
          borderWidth={drawerState.borderWidth}
        >
          {drawerState.content}
        </BottomDrawer>
      )}
    </UIOverlayContext.Provider>
  );
};

export const useUIOverlay = (): UIOverlayContextType => {
  const context = useContext(UIOverlayContext);

  if (!context) {
    throw new Error('useUIOverlay must be used within UIOverlayProvider');
  }

  return context;
};
