import React from "react";
import { Typography, Box } from "@material-ui/core";
import '../css/HomePage.css';

const HomePage = () => {
  return (
    <Box id="home">
      <img src={require("../images/Logo.png")} alt="Fixi Logo" />
    </Box>
  );
};

export default HomePage;
