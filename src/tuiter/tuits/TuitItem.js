import React from "react";
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";
const TuitItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1 text-center">
          <img
            width={40}
            className="rounded-5"
            src={`/images/${post.image}`}
            alt="Post"
          />
        </div>
        <div className="col-10">
          <div>
          <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}></i>
            <strong>{post.userName}</strong> {post.handle} ⋅ {post.time}
          </div>
          <div>{post.tuit}</div>
          <TuitStats post={post} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
