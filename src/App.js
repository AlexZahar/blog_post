import { useState, useEffect } from "react";
import "./App.css";
const apiUrl = "http://localhost:3004/posts";
function App() {
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
        return <div>{post.title}</div>;
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
    </div>
  );
}

export default App;
