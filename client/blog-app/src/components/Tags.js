import React from "react";
import Chip from "@mui/material/Chip";
import "./Tags.css";

const Tags = ({ tags }) => {
  const handleClick = () => console.log("click");

  return (
    <div className="tags">
      {tags.map((tag) => (
        <Chip
          sx={{
            fontSize: "10px",
            margin: "2px",
          }}
          label={tag}
          href="#basic-chip"
          variant="outlined"
          size="small"
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Tags;
