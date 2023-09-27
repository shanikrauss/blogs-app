import React from "react";
import { useNavigate } from "react-router-dom";

const CreateNewPost = () => {
  const navigate = useNavigate();

  const navigateToFeed = () => {
    // 👇️ navigate to /CreateNewPost
    navigate("/");
  };

  return <button onClick={navigateToFeed}>Home</button>;
};

export default CreateNewPost;
