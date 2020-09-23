import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExampleAction, postExampleAction } from "../actions/exampleActions";

function GetPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(0);
  const getContent = useSelector((state) => state.getContent);
  const { loading, error, content } = getContent;

  const dispatch = useDispatch();

  const handleGet = () => {
    dispatch(getExampleAction());
  };

  const mapContent = () => {
    console.log("content", content);
    return content.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
          <td>{item.userId}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <button type="button" onClick={handleGet}>
        Get Content
      </button>
      {loading !== false ? (
        <div>Content Loading... </div>
      ) : error !== undefined ? (
        <div> ERROR! {error} </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>UserId</th>
            </tr>
          </thead>
          <tbody>{mapContent()}</tbody>
        </table>
      )}
    </div>
  );
}

export default GetPage;
