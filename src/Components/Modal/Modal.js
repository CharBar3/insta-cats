const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return children;
};

export default Modal;
