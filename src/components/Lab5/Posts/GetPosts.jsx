import React, { useState, useEffect } from "react";
import { getAllPosts } from "../../Lab3/AxiosConfig/AxiosConfig";

const GetPosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const postsData = await getAllPosts("/posts");
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h2>Get All Posts Title Using Hooks</h2>
      {posts.map(({ title, id }) => (
        <span key={id} className="post">
          {title}
        </span>
      ))}
    </>
  );
};

export default GetPosts;
