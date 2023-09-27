import React from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "./AppHeader";
import "./CreateNewPost.css";

const CreateNewPost = () => {
  // Prevent the browser from reloading the page
  const handleSubmit = (e) => e.preventDefault();

  const navigate = useNavigate();

  const navigateToFeed = () => {
    navigate("/");
  };

  return (
    <>
      <AppHeader btnTitle={"Home"} handleClick={navigateToFeed} />
      {/* <form method="post"> */}
      <form onSubmit={handleSubmit}>
        <div className="form-inp">
          <label>
            Enter article title: <input type="text" name="name" required />
          </label>
        </div>
        <div className="form-inp">
          <label>
            Enter article tags: <input type="text" name="text" required />
          </label>
        </div>
        <div className="form-inp">
          <label>
            Enter article:
            <input type="text" name="text" required />
          </label>
        </div>
        <button type="submit">Submit form</button>
      </form>
    </>
  );
};

export default CreateNewPost;
