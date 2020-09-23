import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postExampleAction } from "../actions/exampleActions";

function PostPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(0);

  const postContent = useSelector((state) => state.postContent);
  const { loading, error, content } = postContent;

  const dispatch = useDispatch(); 

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postExampleAction(title, body, userId));
  };
  console.log("rendered");
  return (
    <Fragment>
      <form onSubmit={(e) => submitHandler(e)}>
        <label>Post Page</label>
        <ul>
          <li>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </li>
          <li>
            <label>Body</label>
            <input
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></input>
          </li>
          <li>
            <label>UserId</label>

            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            ></input>
          </li>
        </ul>
        <button type="submit">Post</button>
      </form>


      <div className="content">
        <label>Content</label>
        {loading !== false ? (
          <div> Content Loading... </div>
        ) : error !== undefined ? (
          <div> ERROR ! {error} </div>
        ) : (
          <div>
            <div>Title:{content.title}</div>
            <div>Title:{content.body}</div>
            <div>Title:{content.userId}</div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default PostPage;
