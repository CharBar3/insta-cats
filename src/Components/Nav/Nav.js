import "./Nav.css";
import { Link } from "react-router-dom";
import NewPost from "../NewPost/NewPost";

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/">
        <button className="NavHome">InstaCats</button>
      </Link>
      <NewPost />
    </div>
  );
};

export default Nav;
