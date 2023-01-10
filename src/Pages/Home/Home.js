import "./Home.css";
import PostCard from "../../Components/PostCard/PostCard";

import { useState, useEffect } from "react";
const Home = () => {
  useEffect(() => {
    getAllPosts();
  }, []);

  const [posts, setPosts] = useState(null);

  const getAllPosts = async () => {
    const URL = "http://catstagram.lofty.codes/api/";
    const promise = await fetch(`${URL}posts/`, {
      method: "GET",
      headers: {
        "Content-type": "Application/json",
      },
    });
    const data = await promise.json();
    setPosts(
      data.sort((a, b) => {
        return b.timestamp_created > a.timestamp_created ? 1 : -1;
      })
    );
  };

  const sortPosts = (condition) => {
    if (condition === "newest") {
      setPosts(null);
      getAllPosts();
    } else if (condition === "oldest") {
      setPosts((prevState) => {
        return [
          ...prevState.sort((a, b) => {
            return a.timestamp_created > b.timestamp_created ? 1 : -1;
          }),
        ];
      });
    } else if ("updated") {
      setPosts((prevState) => {
        return [
          ...prevState.sort((a, b) => {
            return b.timestamp_updated > a.timestamp_updated ? 1 : -1;
          }),
        ];
      });
    }
  };

  const showPosts =
    posts &&
    posts.map(({ pk, name, image }) => {
      return <PostCard key={pk} pk={pk} name={name} image={image} />;
    });

  if (!posts) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="Home">
        <div>
          <button onClick={() => sortPosts("newest")}>Newest!</button>
          <button onClick={() => sortPosts("oldest")}>Oldest!</button>
          <button onClick={() => sortPosts("updated")}>
            Recently Updated!
          </button>
        </div>
        <div>{showPosts}</div>
      </div>
    );
  }
};

export default Home;
