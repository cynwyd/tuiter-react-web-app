import React from "react";
import { FaComment, FaRetweet, FaHeart, FaShareAlt } from "react-icons/fa";
import { likeTuit } from "./tuits-reducer";
import { useDispatch } from "react-redux";
const TuitStats = ({ post }) => {
  const dispatch = useDispatch();
  const likeTuitCall = (tuit) => {
    dispatch(likeTuit(tuit));
    console.log("LIKING TUIT", tuit);
  };
  return (
    <div className="row mt-2 mb-0 pb-0">
      <div className="col-3">
        <span>
          <FaComment /> {post.replies}
        </span>
      </div>
      <div className="col-3">
        <span>
          <FaRetweet /> {post.retuits}
        </span>
      </div>
      <div className="col-3">
        {post.liked ? (
          <span>
            <FaHeart onClick={() => likeTuitCall(post)} style={{ color: "red", cursor: "pointer" }} />{" "}
            {post.likes}
          </span>
        ) : (
          <span>
            <FaHeart onClick={() => likeTuitCall(post)} style={{cursor: "pointer"}}/> {post.likes}
          </span>
        )}
      </div>
      <div className="col-3">
        <FaShareAlt />
      </div>
    </div>
  );
};
export default TuitStats;
