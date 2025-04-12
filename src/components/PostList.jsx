import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostListfunction = () => {
  const { postList, AddInitialPost } = useContext(PostListContext);

  const [fatching, setfatching] = useState(true);

  useEffect(() => {
    setfatching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        AddInitialPost(data.posts);
        setfatching(false);
      });
  }, []);

  return (
    <div className="postlist-container">
      {fatching && <LoadingSpinner />}
      {!fatching && postList.map((item) => <Post item={item} key={item.userID} />)}
      {!fatching && <WelcomeMessage postList={postList} />}
    </div>
  );
};

export default PostListfunction;
