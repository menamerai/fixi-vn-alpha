import React from "react";
import { Typography, Box, InputBase, Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import '../css/HomePage.css';

const HomePage = () => {
  return (
    <Box id="home">
      <img id="logo" src={require("../images/Logo.png")} alt="Fixi Logo" />
      <div id="search">
        <InputBase
          placeholder="Search..."
          inputProps={{ "aria-label": "search"}}
        />
        <div id="search-icon">
          <SearchIcon fontSize="small" />
        </div>
        <Button>Search</Button>
      </div>
    </Box>
  );
};

export default HomePage;
