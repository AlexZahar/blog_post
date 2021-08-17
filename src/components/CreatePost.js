import React, { useState } from "react";
import { Link } from "react-router-dom";

const apiUrl = "http://localhost:3004/posts";

function CreatePost() {
  const [isSuccess, setIsSuccess] = useState(false);

  async function createPost(postData) {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSuccess(true);
    // setPostList(data);
  }

  return (
    <div>
      <h1>Create New Post:</h1>
      {!isSuccess ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newPost = {
              title: event.target.title.value,
              description: event.target.description.value,
            };
            createPost(newPost);
          }}
        >
          <div>
            <label>Title:</label>
            <input name="title"></input>
          </div>
          <div>
            <label>Description:</label>
            <textarea name="description"></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>Post was created</div>
      )}

      <Link to="/">Back Home</Link>
    </div>
  );
}

export default CreatePost;
