import React from "react";
import { Typography, Box, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import '../css/HomePage.css';

const HomePage = () => {
  return (
    <Box id="home">
      <img id="logo" src={require("../images/Logo.png")} alt="Fixi Logo" />
      <div id="search">
        <div id="search-icon">
          <SearchIcon fontSize="small" />
        </div>
        <InputBase
          placeholder="Search..."
          inputProps={{ "aria-label": "search"}}
        />
      </div>
    </Box>
  );
};

export default HomePage;
