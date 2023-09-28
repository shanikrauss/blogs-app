import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import "./AppHeader.css";

const AppHeader = ({ btnTitle, handleClick }) => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "20px" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blogs
          </Typography>
          <button className="new-item-btn" onClick={handleClick}>
            {btnTitle}
          </button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
