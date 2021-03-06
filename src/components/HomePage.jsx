import React from "react";
import { Box, Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import '../css/HomePage.css';
// import { Autocomplete } from "@material-ui/lab";

const HomePage = () => {
  return (
    <Box id="home">
      <img id="logo" src={require("../images/Logo.png")} alt="Fixi Logo" />
      <Paper elevation={0} variant="outlined" id="search">
        <InputBase placeholder="Search..." id="search-input" fullWidth />
        <IconButton component="span">
          <SearchIcon />
        </IconButton>
      </Paper>
      <img src={require("../images/clouds.png")} alt="patterns" id="patterns" />
    </Box>
  );
};

export default HomePage;
