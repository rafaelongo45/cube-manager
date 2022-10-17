import { createContext, useState } from "react";

const ModalContext = createContext();
export default ModalContext;

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [iconModalName, setIconModalName] = useState("");

  const values = {
    isOpen,
    setIsOpen,
    modalTitle,
    setModalTitle,
    iconModalName,
    setIconModalName
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};
