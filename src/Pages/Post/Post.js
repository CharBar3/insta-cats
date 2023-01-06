import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = ({ posts, getPosts, addComment }) => {
  const params = useParams();
  const [post, setPost] = useState(
    posts && posts.find((post) => post.pk == params.id)
  );

  console.log(post);

  const showComments = post.comments.map(({ pk, text }) => {
    return <li>{text}</li>;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(post.pk, e.target.comment.value);
  };

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

export default Post;
