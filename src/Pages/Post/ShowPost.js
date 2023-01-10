import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowPost = () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [postComments, setPostComments] = useState([]);

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
    setPostComments(await data.comments);
  };

  const showComments = postComments.map(({ pk, text }) => {
    return <li key={pk}>{text}</li>;
  });

  const addComment = async (pk, text) => {
    const promise = await fetch(`${URL}comments/`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        text: text,
        entry: pk,
      }),
    });

    const data = await promise.json();
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addComment(post.pk, e.target.comment.value);
      e.target.comment.value = "";
      getSinglePost();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  if (!post) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="Post">
        <div className="PostInner">
          <img
            src={`http://catstagram.lofty.codes/media/${post.image}`}
            width="300px"
          />
          <h1>{post.name}</h1>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="comment" />
          <button type="submit">Comment</button>
        </form>
        <ul>{showComments}</ul>
      </div>
    );
  }
};

export default ShowPost;
