import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { PostListProvider } from "./store/post-list-store";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./page/Home";
import CreatePostPage from "./page/CreatePostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-post",
    element: <CreatePostPage />,
  },
]);

<RouterProvider router={router} />;

const App = () => {
  return (
    <PostListProvider>
      <RouterProvider router={router} />
    </PostListProvider>
  );
};

export default App;
