import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowPost = () => {
  const params = useParams();

  const [post, setPost] = useState(null);

  const URL = "http://catstagram.lofty.codes/api/";
  const getSinglePost = async () => {
    const promise = await fetch(`${URL}posts/${params.id}`, {
      method: "GET",
      headers: {
        "Content-type": "Application/json",
      },
    });
    const data = await promise.json();
    setPost(await data);
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  if (!post) {
    return <h1>Loading...</h1>;
  } else {
    return <h1>We have a post</h1>;
  }
};

export default ShowPost;
