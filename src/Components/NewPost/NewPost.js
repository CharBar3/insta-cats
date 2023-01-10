import "./NewPost.css";
import { useState, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
  const [postImage, setPostImage] = useState(null);
  const [postName, setPostName] = useState(null);

  const apiURL = "http://catstagram.lofty.codes/api/";
  const createPost = async () => {
    const formData = new FormData();
    formData.append("name", postName);
    formData.append("image", postImage);
    const promise = await fetch(`${apiURL}posts/`, {
      method: "POST",
      body: formData,
    });
    const data = await promise.json();
    console.log(`/post/${data.pk}`);
    setIsOpen(false);
    navigate(`/post/${data.pk}`);
  };

  const handleFile = (e) => {
    setPostImage(e.target.files[0]);
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
          <input type="file" accept="image/*" onChange={handleFile} />
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
          <button onClick={createPost}>Post</button>
          {/* </form> */}
          <div></div>
        </div>
      </Modal>
    </div>
  );
};

export default NewPost;
