import "./NewPost.css";
import { useState, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../API/api";

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

  const [imagePreview, setImagePreview] = useState(null);
  const [postImage, setPostImage] = useState(null);
  const [postName, setPostName] = useState(null);

  const handleFile = (e) => {
    setPostImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    setPostName(e.target.value);
  };

  const submitPost = async (e) => {
    e.preventDefault();

    const data = await createPost(postName, postImage);

    if (data > 299) {
      alert("Failed to Post!");
    } else {
      setIsOpen(false);
      navigate(`/post/${data.pk}`);
    }
  };

  return (
    <div className="NewPost">
      <button onClick={() => setIsOpen(true)}>Add Your Photo</button>
      <Modal isOpen={isOpen}>
        <div ref={modalRef} className="NewPostModal">
          <form onSubmit={(e) => submitPost(e)}>
            <input
              className="imageInput"
              type="file"
              accept="image/*"
              onChange={handleFile}
              required
            />
            {!imagePreview ? (
              <h1>Photo Preview</h1>
            ) : (
              <img src={imagePreview} alt={imagePreview.name} />
            )}
            <div>
              <label>Name your Photo!</label>
              <input type="text" onChange={(e) => handleChange(e)} required />
              <button type="submit">POST IT!</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default NewPost;
