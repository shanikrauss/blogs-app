import React from "react";
import { useNavigate } from "react-router-dom";
import Post from "./Post";
import "./Feed.css";
import AppHeader from "./AppHeader";

const Feed = (props) => {
  const navigate = useNavigate();

  const navigateToCreateNewPost = () => {
    // 👇️ navigate to /CreateNewPost
    navigate("/CreateNewPost");
  };

  return (
    <>
      <AppHeader btnTitle={"Add new"} handleClick={navigateToCreateNewPost} />
      {props.data.map((item) => {
        return <Post post={item} />;
      })}
      <Post />
    </>
  );
};

export default Feed;
