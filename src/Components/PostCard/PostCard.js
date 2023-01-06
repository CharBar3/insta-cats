import "./PostCard.css";
import { ReactComponent as DownArrow } from "../../Icons/chevron-down.svg";
import { Link } from "react-router-dom";

const PostCard = ({ pk, name, image }) => {
  return (
    <div className="PostCard">
      <div>
        <img src={`http://catstagram.lofty.codes/media/${image}`} alt={name} />
        <h1>{name}</h1>
      </div>

      <div>
        <Link to={`/post/${pk}`}>
          <DownArrow />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
