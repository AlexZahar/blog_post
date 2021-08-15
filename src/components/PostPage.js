import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const apiUrl = "http://localhost:3004/posts";

function PostPage() {
  const { ...post } = useParams();
  const [postData, setPostData] = useState(null);

  async function fetchSinglePost() {
    console.log(post);
    const response = await fetch(`${apiUrl}/${post.id}`);
    const data = await response.json();
    setPostData(data);
    console.log(data);
  }

  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <div>
      <h2>{postData && postData.title}</h2>
      <p>{postData && postData.description}</p>
      <Link to="/">Back Home</Link>
    </div>
  );
}

export default PostPage;
