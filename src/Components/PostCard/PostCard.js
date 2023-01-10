import "./PostCard.css";
import { Link } from "react-router-dom";
import noImageFound from "../../Photos/error.png";

const PostCard = ({ pk, name, image }) => {
  const imageError = (e) => {
    // updates src image to a no image found file
    // e.target.src = noImageFound;
    // I just wanted them removed all together
    // because if your post has no photo why even have it am i right?
    e.currentTarget.style.display = "none";
  };

  return (
    <Link to={`/post/${pk}`}>
      <div className="PostCard">
        <div className="PostCardOverlay">
          <h1>{name}</h1>
          <h2>Click for comments!</h2>
        </div>
        <img
          src={`http://catstagram.lofty.codes/media/${image}`}
          alt={name}
          onError={(e) => imageError(e)}
        />
      </div>
    </Link>
  );
};

export default PostCard;
