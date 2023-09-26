import React from "react";
import {
  Button,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Post from "./Post";

const Feed = (props) => {
  console.log(props);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
          </Toolbar>
        </AppBar>
      </Box>
      {props.data.map((item) => {
        return <Post post={item} />;
      })}
      <Post />
    </>
  );
};

export default Feed;
