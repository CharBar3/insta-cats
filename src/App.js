import "./App.css";
import { useState, useEffect } from "react";
import { createUser, getPosts } from "./API/api";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  const [posts, setPosts] = useState(null);

  const getPostFromAPI = async () => {
    const posts = await getPosts();
  };

  useEffect(() => {
    setPosts(getPosts());
    // return () => {
    //   cleanup
    // };
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post/:id" />
      </Routes>
    </div>
  );
}

export default App;
