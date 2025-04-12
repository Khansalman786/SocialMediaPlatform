import React from "react";
import CreatePost from "../components/CreatePost";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const CreatePostPage = () => {
  return (
    <div>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Header />
          <CreatePost />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
