import "./Nav.css";
import { Link } from "react-router-dom";
import NewPost from "../NewPost/NewPost";

const Nav = () => {
  return (
    <div className="Nav">
      <div>
        <Link to="/">
          <button>InstaCats</button>
        </Link>
        <Link to="/createAccount">Create an Account!</Link>
      </div>
      <NewPost />
    </div>
  );
};

export default Nav;
