import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWrap } from './Modal.styled';
import { IModal } from 'components/types';

const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;

export default function Modal({ onClose, children }: IModal) {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = (event: { code: string; }) => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdrop = (event: { currentTarget: any; target: any; }) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdrop}>
      <ModalWrap>{children}</ModalWrap>
    </Overlay>,
    modalRoot
  );
}
