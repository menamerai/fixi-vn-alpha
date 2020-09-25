import React from "react";
import { Typography, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import '../css/HomePage.css';
import { Autocomplete } from "@material-ui/lab";

const HomePage = () => {
  return (
    <Box id="home">
      <img id="logo" src={require("../images/Logo.png")} alt="Fixi Logo" />
      <Autocomplete />
    </Box>
  );
};

export default HomePage;
