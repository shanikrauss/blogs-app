import React from "react";
import "./Post.css";
import Chip from "@mui/material/Chip";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = (props) => {
  //   console.log(props.post.title);

  const handleClick = () => console.log("click!");

  return (
    <article className="article-cont">
      <h4>{props.post?.title}</h4>
      <div className="autor-date">
        <h6 className="author">{props.post?.author}</h6>
        <h6 className="date">date</h6>
      </div>
      {props.post?.tags.map((tag) => (
        <Chip
          sx={{
            fontSize: "10px",
            marginLeft: "5px",
          }}
          label={tag}
          href="#basic-chip"
          variant="outlined"
          size="small"
          onClick={handleClick}
        />
      ))}
      <p className="post">{props.post?.body}</p>
      <div>
        <button className="like-dislike">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button className="dislike-btn">
          <FontAwesomeIcon icon={faHeartCrack} />
        </button>
      </div>
    </article>
  );
};

export default Post;
