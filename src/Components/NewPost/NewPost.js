import "./NewPost.css";
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

  const [file, setFile] = useState(null);
  const [postName, setPostName] = useState(null);

  const handleFile = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    setPostName(e.target.value);
  };

  return (
    <div className="NewPost">
      <button onClick={() => setIsOpen(true)}>Add Your Photo</button>
      <Modal isOpen={isOpen}>
        <div ref={modalRef} className="NewPostModal">
          {/* <form> */}
          {/* <label>Choose Photo:</label> */}
          <input type="file" onChange={handleFile} />
          <h1>IMG below</h1>
          {file ? (
            <img src={file} alt={file.name} width="200px" />
          ) : (
            <img
              src="https://i.pinimg.com/564x/eb/bb/b4/ebbbb41de744b5ee43107b25bd27c753.jpg"
              width="200px"
            />
          )}
          <input type="text" onChange={(e) => handleChange(e)} />
          <button>Post</button>
          {/* </form> */}
        </div>
      </Modal>
    </div>
  );
};

export default NewPost;
