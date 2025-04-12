import React from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";
import { useContext } from "react";

const Post = ({ item }) => {
  const Postcontext = useContext(PostListContext);
  const deletePost = Postcontext.deletePost;

  return (
    <div className="card m-2" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6 cursor-pointer"
          onClick={() => deletePost(item.id)}
        >
          <MdDelete />
        </span>
        <p className="card-text">{item.body}</p>
        {item.tags.map((tags) => (
          <span key={tags} className="badge text-bg-primary mx-1 p-2">
            #{tags}
          </span>
        ))}
        <div className="reaction mt-3 d-flex gap-3 align-items-center">
          <span className="reaction_like d-flex align-items-center gap-1">
            <SlLike /> 23
          </span>
          <span className="reaction_dislike d-flex align-items-center gap-1">
            <SlDislike /> 21
          </span>
        </div>
        <div className="alert alert-success mt-2" role="alert">
          Total post of these Blog is {item.totals}.
        </div>
      </div>
    </div>
  );
};

export default Post;
