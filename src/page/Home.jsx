import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import PostListfunction from "../components/PostList";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Header />
          <PostListfunction />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
