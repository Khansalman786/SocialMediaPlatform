import { React, useContext, useRef, useState } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const [alertMessage, setAlertMessage] = useState(true);

  const userId = useRef(null);
  const userTitle = useRef(null);
  const userBody = useRef(null);
  const userReaction = useRef(null);
  const userTags = useRef(null);
  const userlike = useRef(null);
  const userdislike = useRef(null);

  const handleOnClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setAlertMessage(alertMessage);
    }, 1000);
    setAlertMessage(!alertMessage);

    const newPostData = {
      id: Number(userId.current.value),
      title: userTitle.current.value,
      body: userBody.current.value,
      reaction: Number(userReaction.current.value),
      like: Number(userlike.current.value),
      dislike: Number(userdislike.current.value),
      tags: userTags.current.value.trim().split(" "),
    };

    addPost(newPostData);

    // Optionally clear inputs after submit
    userId.current.value = "";
    userTitle.current.value = "";
    userBody.current.value = "";
    userReaction.current.value = "";
    userTags.current.value = "";
    userlike.current.value = "";
    userdislike.current.value = "";
  };

  return (
    <>
      <div
        class={`alertMessage alert alert-success text-center position-absolute z-1 w-50 ${
          alertMessage ? "d-none" : "d-block"
        }`}
        role="alert"
      >
        Blog Post successfully added.
      </div>
      <form className="createPost">
        <div className="heading text-center">
          <h2>Create Post</h2>
        </div>
        <div className="mb-2">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Please Enter your User ID."
            ref={userId}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="postTitle"
            placeholder="What are you doing today?"
            ref={userTitle}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="postBody" className="form-label">
            Post Content
          </label>
          <textarea
            className="form-control"
            id="postBody"
            rows="3"
            placeholder="Tell me about something..."
            ref={userBody}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="postReaction" className="form-label">
            Post Reaction
          </label>
          <input
            type="number"
            className="form-control"
            id="postReaction"
            placeholder="Enter total number of reactions."
            ref={userReaction}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="postTags" className="form-label">
            Post Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="postTags"
            placeholder="Please enter tags separated by spaces."
            ref={userTags}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="postLike" className="form-label">
            Post Like
          </label>
          <input
            type="text"
            className="form-control"
            id="postLike"
            placeholder="Enter total likes."
            ref={userlike}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="postdislike" className="form-label">
            Post Dislike
          </label>
          <input
            type="text"
            className="form-control"
            id="postdislike"
            placeholder="Enter total dislikes."
            ref={userdislike}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-2 fw-medium px-5 fs-6"
          onClick={handleOnClick}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
