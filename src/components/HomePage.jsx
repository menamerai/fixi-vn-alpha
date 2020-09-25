import React from "react";
import { Box } from "@material-ui/core";
// mport SearchIcon from '@material-ui/icons/Search';
import '../css/HomePage.css';
// import { Autocomplete } from "@material-ui/lab";

const HomePage = () => {
  return (
    <Box id="home">
      <img id="logo" src={require("../images/Logo.png")} alt="Fixi Logo" />
    </Box>
  );
};

export default HomePage;
