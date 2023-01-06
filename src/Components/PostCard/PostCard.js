import "./PostCard.css";
import { ReactComponent as DownArrow } from "../../Icons/chevron-down.svg";

const PostCard = ({ name, image }) => {
  // console.log(typeof name);
  return (
    <div className="PostCard">
      <div>
        <img src={`http://catstagram.lofty.codes/media/${image}`} alt={name} />
        <h1>{name}</h1>
      </div>

      <div>
        <DownArrow />
      </div>
    </div>
  );
};

export default PostCard;
