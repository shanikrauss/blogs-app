import React from "react";
import { useNavigate } from "react-router-dom";
import Post from "./Post";
import "./Feed.css";
import AppHeader from "./AppHeader";
import Tags from "./Tags";

const Feed = (props) => {
  const navigate = useNavigate();

  const navigateToCreateNewPost = () => {
    // 👇️ navigate to /CreateNewPost
    navigate("/CreateNewPost");
  };

  const removeDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  };
  const tags = removeDuplicates(props.data.map((item) => item.tags).flat());

  return (
    <>
      <AppHeader btnTitle={"Add new"} handleClick={navigateToCreateNewPost} />
      <div className="feed-container">
        <div className="posts-container">
          {props.data.map((item) => {
            return <Post post={item} />;
          })}
        </div>
        <Tags tags={tags} />
      </div>
    </>
  );
};

export default Feed;
