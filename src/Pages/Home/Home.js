import "./Home.css";
import PostCard from "../../Components/PostCard/PostCard";
const Home = ({ posts }) => {
  const showPosts =
    posts &&
    posts.map(({ pk, name, image }) => {
      return <PostCard key={pk} pk={pk} name={name} image={image} />;
    });

  if (!posts) {
    return <h1>Loading...</h1>;
  } else {
    return <div className="Home">{showPosts}</div>;
  }
};

export default Home;
