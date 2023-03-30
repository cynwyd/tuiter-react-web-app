import React from "react";
import { FaComment, FaRetweet, FaHeart, FaShareAlt } from "react-icons/fa";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";
const TuitStats = ({ post }) => {
  const dispatch = useDispatch();
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
        <div>
          <i
            onClick={() =>
              dispatch(
                updateTuitThunk({
                  ...post,
                  likes: post.likes + 1,
                })
              )
            }
            className="bi bi-heart-fill me-2 text-danger"
          ></i>
          {post.likes}
        </div>
      </div>
      <div className="col-3">
      <div>
          <i
            onClick={() =>
              dispatch(
                updateTuitThunk({
                  ...post,
                  dislikes: post.dislikes + 1,
                })
              )
            }
            className="bi bi-hand-thumbs-down-fill me-2 text-danger"
          ></i>
          {post.dislikes}
        </div>
      </div>
    </div>
  );
};
export default TuitStats;
