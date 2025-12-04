import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import type { IDialog, IModal } from '@shiba-ui/shared';
import { Dialog } from '../components/Dialog';
import { Modal } from '../components/Modal';

interface DialogState extends Omit<IDialog, 'isOpen' | 'isHidden'> {
  isOpen: boolean;
}

interface ModalState
  extends Omit<IModal, 'isOpen' | 'isHidden' | 'children'> {
  isOpen: boolean;
  content: ReactNode;
}

interface UIOverlayContextType {
  openDialog: (props: Omit<IDialog, 'isOpen' | 'isHidden'>) => void;
  closeDialog: () => void;
  openModal: (
    content: ReactNode,
    props?: Omit<IModal, 'isOpen' | 'isHidden' | 'children'>
  ) => void;
  closeModal: () => void;
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

  const [modalState, setModalState] = useState<ModalState>({
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

  const openModal = useCallback(
    (
      content: ReactNode,
      props?: Omit<IModal, 'isOpen' | 'isHidden' | 'children'>
    ) => {
      setModalState({
        isOpen: true,
        content,
        ...props,
      });
    },
    []
  );

  const closeModal = useCallback(() => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  return (
    <UIOverlayContext.Provider
      value={{
        openDialog,
        closeDialog,
        openModal,
        closeModal,
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

      {modalState.isOpen && (
        <Modal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          title={modalState.title}
          showHeader={modalState.showHeader}
          background={modalState.background}
          borderRadius={modalState.borderRadius}
        >
          {modalState.content}
        </Modal>
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

