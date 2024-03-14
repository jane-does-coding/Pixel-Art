"use client";
import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}: ModalProps) => {
  const handleClose = useCallback(() => {
    if (disabled) return;

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) return null;

  return (
    <>
      <div className="justify-center items-center flex overflow-hidden h-screen fixed inset-0 w-full outline-none focus:outline-none z-50 bg-slate-800/70 backdrop-blur-sm">
        <div className="relative w-full lg:w-3/6 my-6 mx-auto max-w-3xl h-full lg:h-auto">
          {/* CONTENT */}
          <div className="h-full w-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-black/[30%] outline-none focus:outline-none">
            {/* HEADER */}
            <div className="flex items-center justify-between p-10 py-6 rounded-t">
              <h3 className="text-2xl font-semibold text-white w-full text-center">
                {title}
              </h3>
              <button
                className="text-white font-bold p-3 rounded-full transition hover:bg-black absolute right-4"
                onClick={handleClose}
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            {/* BODY */}
            <div className="relative p-8 flex-auto">{body}</div>
            {/* FOOTER */}
            <div className="flex flex-col gap-2 p-10 pb-6">
              <Button
                onClick={handleSubmit}
                label={actionLabel}
                disabled={disabled}
                fullWidth
                large
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
