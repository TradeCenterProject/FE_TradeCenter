import { Dispatch, ReactNode, SetStateAction } from "react";
import CloseIcon from "@public/close_icon.svg";

interface ModalProps {
  children: ReactNode;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, setIsOpenModal }: ModalProps) => {
  const onCloseModal = () => setIsOpenModal(false);

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
      <div className="relative m-20 h-3/5 w-full rounded-xl bg-white p-5">
        <CloseIcon
          className="absolute right-5 cursor-pointer hover:opacity-80 active:opacity-100"
          onClick={onCloseModal}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
