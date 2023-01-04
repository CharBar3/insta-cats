import "./App.css";
import { useState } from "react";
import { createUser, getPosts } from "./API/api";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  const [dataState, setDataState] = useState(null);

  const getPostFromAPI = async () => {
    const posts = await getPosts();
    setDataState(posts[0]);
  };

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
