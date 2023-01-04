import "./App.css";
import { useState } from "react";
import { createUser, getPosts } from "./API/api";

function App() {
  const [dataState, setDataState] = useState(null);

  const getPostFromAPI = async () => {
    const posts = await getPosts();
    setDataState(posts[0]);
  };

  return (
    <div className="App">
      Lofty
      <button onClick={getPostFromAPI}>API Call</button>
      {dataState ? (
        <div>
          <h1></h1>
          <img
            src={`http://catstagram.lofty.codes/media/${dataState.image}`}
            width="300px"
            height="300px"
          />
        </div>
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  );
}

export default App;
