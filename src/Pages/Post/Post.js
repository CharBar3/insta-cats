import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = ({ posts, getPosts, addComment }) => {
  const params = useParams();
  const [post, setPost] = useState(null);

  // get single post
  const URL = "http://catstagram.lofty.codes/api/";
  const getSinglePost = async () => {
    const promise = await fetch(`${URL}posts/${params.id}`, {
      method: "GET",
      headers: {
        "Content-type": "Application/json",
      },
    });
    const data = await promise.json();
    return await data;
  };

  // setPost(getSinglePost());

  const showComments = post.comments.map(({ pk, text }) => {
    return <li>{text}</li>;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    getSinglePost();
    // const response = await addComment(post.pk, e.target.comment.value);
    // if (response.text) {

    //   });
    // } else {
    //   console.log("Comment Failed! Please try again later");
    // }
  };

  if (post) {
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

export default Post;
