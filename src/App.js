import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import Post from "./Pages/Post/Post";

function App() {
  const [posts, setPosts] = useState(null);

  // API
  const URL = "http://catstagram.lofty.codes/api/";
  const apiCall = async () => {
    const promise = await fetch(URL);
    const data = await promise.json();
    console.log(data);
  };

  // Create a User
  const createUser = async () => {
    const promise = await fetch(`${URL}users/`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        email: "secretMove@gmail.com",
        password: "secretMove",
        first_name: "Secret",
        last_name: "Move",
      }),
    });
    const data = await promise.json();
  };

  // Get Posts
  const getPosts = async () => {
    const promise = await fetch(`${URL}posts/`, {
      method: "GET",
      headers: {
        "Content-type": "Application/json",
      },
    });
    const data = await promise.json();

    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home posts={posts} getPosts={getPosts} />} />
        <Route
          path="/post/:id"
          element={<Post posts={posts} getPosts={getPosts} />}
        />
      </Routes>
    </div>
  );
}

export default App;
