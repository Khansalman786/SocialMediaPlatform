import { createContext, useReducer } from "react";

// Default post list
const default_add_list = [
  // {
  //   id: 1,
  //   title: "Going to the lonavala",
  //   body: "I am going to the lonavala, Hope to enjoying and peace out",
  //   like: 10,
  //   dislike: 2,
  //   reactions: 12,
  //   user: "user_12",
  //   tag: ["lonavala", "Enjoying", "Peace"],
  // },
  // {
  //   id: 2,
  //   title: "Going to the Mumbai",
  //   body: "I am going to the Mumbai, Hope to enjoying and peace out",
  //   like: 120,
  //   dislike: 12,
  //   reactions: 19,
  //   user: "user_12",
  //   tag: ["lonavala", "Enjoying", "Peace"],
  // },
];

// Context with correct default shape
const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  AddInitialPost: () => {},
  deletePost: () => {},
});

// Reducer function
const reducer = (currLPostList, action) => {
  switch (action.type) {
    case "delete_Post":
      return currLPostList.filter((post) => post.id !== action.payload.postId);

    case "add_post":
      return [action.payload, ...currLPostList];

    case "AddInitial_Post":
      return [...action.payload.posts, ...currLPostList];

    default:
      return currLPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchedPostList] = useReducer(reducer, default_add_list);

  const addPost = (newPost) => {
    dispatchedPostList({
      type: "add_post",
      payload: {
        id: Date.now(),
        title: newPost.title,
        body: newPost.body,
        like: newPost.like,
        dislike: newPost.dislike,
        reactions: newPost.reaction,
        user: newPost.id,
        tag: newPost.tags,
      },
    });
    console.log(
      `${newPost.title} ${newPost.body} ${newPost.like} ${newPost.dislike} ${newPost.reaction} ${newPost.tags}`
    );
  };

  const AddInitialPost = (posts) => {
    dispatchedPostList({
      type: "AddInitial_Post",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchedPostList({
      type: "delete_Post",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostListContext.Provider
      value={{ postList, addPost, AddInitialPost, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export { PostListProvider, PostListContext };
