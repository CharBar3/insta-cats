import "./Home.css";
import PostCard from "../../Components/PostCard/PostCard";
import { getAllPosts } from "../../API/API";

import { useState, useEffect } from "react";
const Home = () => {
  // On component load related functions
  const fetchData = async () => {
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // state variable for holding our posts data after it's been fetched
  const [posts, setPosts] = useState(null);

  const sortPosts = (condition) => {
    if (condition === "newest") {
      setPosts(null);
      // fetchData already organizes from newest to oldest
      fetchData();
    } else if (condition === "oldest") {
      setPosts((prevState) => {
        const newState = prevState.sort((a, b) => {
          return a.timestamp_created > b.timestamp_created ? 1 : -1;
        });
        return [...newState];
      });
    } else if ("updated") {
      setPosts((prevState) => {
        const newState = prevState.sort((a, b) => {
          return b.timestamp_updated > a.timestamp_updated ? 1 : -1;
        });
        return [...newState];
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
        <div className="HomeButtons">
          <button onClick={() => sortPosts("newest")}>Newest!</button>
          <button onClick={() => sortPosts("oldest")}>Oldest!</button>
          <button onClick={() => sortPosts("updated")}>
            Recently Updated!
          </button>
        </div>
        <div className="HomePhotoSection">{showPosts}</div>
      </div>
    );
  }
};

export default Home;
