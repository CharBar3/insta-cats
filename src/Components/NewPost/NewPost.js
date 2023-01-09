import { useState, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";

const NewPost = () => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let handler = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="NewPost">
      <button onClick={() => setIsOpen(true)}>Add Your Photo</button>
      <Modal isOpen={isOpen}>
        <div ref={modalRef}>
          <h1>Woot Woot</h1>
        </div>
      </Modal>
    </div>
  );
};

export default NewPost;
