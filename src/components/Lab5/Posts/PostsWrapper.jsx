import React from "react";
import GetPosts from "./GetPosts";
import GetSpecificPost from "./GetSpecificPost";
import "./posts.css";

function PostsWrapper() {
  return (
    <div className="postsWrapper">
      <div className="container">
        <GetPosts />
        <GetSpecificPost />
      </div>
    </div>
  );
}

export default PostsWrapper;
