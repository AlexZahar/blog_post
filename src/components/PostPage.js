import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const apiUrl = "http://localhost:3004/posts";

function PostPage() {
  const { ...post } = useParams();
  const [postData, setPostData] = useState(null);
  const [listComments, setListComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  async function fetchSinglePost() {
    console.log(post);
    const response = await fetch(`${apiUrl}/${post.id}`);
    const data = await response.json();

    const responseComments = await fetch(`${apiUrl}/${post.id}/comments`);
    const dataComments = await responseComments.json();

    setPostData(data);
    setListComments(dataComments);

    console.log(data);
  }
  async function createComment(commData) {
    const response = await fetch(`${apiUrl}/${post.id}/comments`, {
      method: "POST",
      body: JSON.stringify({ body: commData, postid: post.id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchSinglePost();
    // setCommentText(data);
  }
  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <div>
      <h2>{postData && postData.title}</h2>
      <p>{postData && postData.description}</p>
      <h2>Comments:</h2>
      <div>
        {listComments.map((comm) => {
          return <p>{comm.body}</p>;
        })}
      </div>
      <div>
        <textarea
          value={commentText}
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
        ></textarea>
        <button
          onClick={() => {
            createComment(commentText);
            setCommentText("");
          }}
        >
          Comment
        </button>
      </div>
      <Link to="/">Back Home</Link>
    </div>
  );
}

export default PostPage;
