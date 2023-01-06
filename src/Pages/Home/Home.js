import React from "react";
import { useEffect } from "react";
import PostCard from "../../Components/PostCard/PostCard";

const Home = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  const showPosts =
    posts &&
    posts.map(({ name }) => {
      return <PostCard name={name} />;
    });

  if (!posts) {
    return <h1>Loading...</h1>;
  } else {
    return <div className="Home">{showPosts}</div>;
  }
};

export default Home;
