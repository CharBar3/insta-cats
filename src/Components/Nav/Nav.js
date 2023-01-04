import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/">InstaCats</Link>
      {/* <Link to="/post/new">Add Your Photo</Link> */}
    </div>
  );
};

export default Nav;
