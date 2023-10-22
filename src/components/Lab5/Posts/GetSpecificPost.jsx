import React, { useState } from "react";
import { getAllPosts } from "../../Lab3/AxiosConfig/AxiosConfig";

const GetSpecificPost = () => {
  const [postId, setPostId] = useState("");
  const [post, setPost] = useState(null);

  const handleInputChange = (e) => {
    setPostId(e.target.value);
  };

  const fetchSpecificPost = async () => {
    try {
      const postsData = await getAllPosts(`/posts/${postId}`);
      setPost(postsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Get Specific Post Using Hooks</h2>
      <div className="getPost">
        <input
          type="number"
          placeholder="Enter Post ID"
          value={postId}
          onChange={handleInputChange}
        />
        <button onClick={fetchSpecificPost}>Get Post</button>
        {post && (
          <div>
            <h3>Title: {post.title}</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default GetSpecificPost;
