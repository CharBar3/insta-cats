import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import ShowPost from "./Pages/Post/ShowPost";

function App() {
  // API URL would normally be hidden in .env
  const URL = "http://catstagram.lofty.codes/api/";

  // Create a User
  const createUser = async () => {
    const promise = await fetch(`http://catstagram.lofty.codes/api/users/`, {
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

  // Add comment to Post
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

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/post/:id"
          element={<ShowPost addComment={addComment} />}
        />
      </Routes>
    </div>
  );
}

export default App;
