import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import ShowPost from "./Pages/Post/ShowPost";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";

function App() {
  // API URL would normally be hidden in .env
  const URL = "http://catstagram.lofty.codes/api/";

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<ShowPost />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
