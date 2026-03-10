import React, { useEffect, useState } from 'react';
import { ContactSection } from '../contact-section';

const CONTACT_MODAL_EVENT_NAME: string = 'open-contact-modal';

export const ContactModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleOpenModal = (): void => {
      setIsOpen(true);
    };
    window.addEventListener(CONTACT_MODAL_EVENT_NAME, handleOpenModal);
    return () => {
      window.removeEventListener(CONTACT_MODAL_EVENT_NAME, handleOpenModal);
    };
  }, []);
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const initialOverflow: string = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = initialOverflow;
    };
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Закрыть модальное окно"
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative z-10 w-full max-w-2xl">
        <button
          type="button"
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <ContactSection mode="modal" />
      </div>
    </div>
  );
};
