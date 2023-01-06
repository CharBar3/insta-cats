import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/">
        <button className="NavHome">InstaCats</button>
      </Link>
      <Link className="NavNewPost" to="/post/new">
        Add Your Photo
      </Link>
    </div>
  );
};

export default Nav;
