import "./PostCard.css";
import { ReactComponent as DownArrow } from "../../Icons/chevron-down.svg";
import { Link } from "react-router-dom";

const PostCard = ({ pk, name, image }) => {
  return (
    <Link to={`/post/${pk}`}>
      <div className="PostCard">
        <div className="PostCardOverlay">
          <h1>{name}</h1>
          <h2>Click for comments!</h2>
        </div>
        <img src={`http://catstagram.lofty.codes/media/${image}`} alt={name} />
      </div>
    </Link>
  );
};

export default PostCard;
