import { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import "./App.css";
const apiUrl = "http://localhost:3004/posts";

function HomePage() {
  const [postList, setPostList] = useState([]);
  const [newPostTitle, setPostTitle] = useState("");

  async function fetchPostList() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setPostList(data);
  }

  async function createPost(postData) {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchPostList();
    // setPostList(data);
  }

  useEffect(() => {
    fetchPostList();
  }, []);

  return (
    <div className="App">
      {postList.map((post) => {
        return <Link to={`/post/${post.id}`}>{post.title}</Link>;
      })}
      <input
        value={newPostTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      ></input>
      <button
        onClick={() => {
          createPost({ title: newPostTitle, author: "user" });
          setPostTitle("");
        }}
      >
        Create a fake post
      </button>
      <Link to="/create-post">Add a post</Link>
    </div>
  );
}

export default HomePage;
