import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { IDialog, IBottomDrawer } from '@shiba-ui/shared';
import { Dialog } from '../components/Dialog';
import { BottomDrawer } from '../components/BottomDrawer';

interface DialogState extends Omit<IDialog, 'isOpen' | 'isHidden'> {
  isOpen: boolean;
}

interface DrawerState extends Omit<IBottomDrawer, 'isOpen' | 'isHidden' | 'children'> {
  isOpen: boolean;
  content: ReactNode;
}

interface UIOverlayContextType {
  openDialog: (props: Omit<IDialog, 'isOpen' | 'isHidden'>) => void;
  closeDialog: () => void;
  openDrawer: (props: Omit<IBottomDrawer, 'isOpen' | 'isHidden' | 'children'>, content: ReactNode) => void;
  closeDrawer: () => void;
}

const UIOverlayContext = createContext<UIOverlayContextType | undefined>(undefined);

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

  const openDialog = useCallback((props: Omit<IDialog, 'isOpen' | 'isHidden'>) => {
    setDialogState({
      ...props,
      isOpen: true,
    });
  }, []);

  const closeDialog = useCallback(() => {
    setDialogState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  const openDrawer = useCallback((
    props: Omit<IBottomDrawer, 'isOpen' | 'isHidden' | 'children'>,
    content: ReactNode
  ) => {
    setDrawerState({
      ...props,
      isOpen: true,
      content,
    });
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerState((prev) => ({
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

  const handleDrawerClose = useCallback(() => {
    drawerState.onClose?.();
    closeDrawer();
  }, [drawerState.onClose, closeDrawer]);

  return (
    <UIOverlayContext.Provider
      value={{
        openDialog,
        closeDialog,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
      
      <Dialog
        {...dialogState}
        onConfirm={handleDialogConfirm}
        onCancel={handleDialogCancel}
      />

      <BottomDrawer
        {...drawerState}
        onClose={handleDrawerClose}
      >
        {drawerState.content}
      </BottomDrawer>
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

