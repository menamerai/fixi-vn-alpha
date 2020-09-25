import React from "react";
import { Typography, Box, Container } from "@material-ui/core";
import '../css/HomePage.css';

const HomePage = () => {
  return (
    <Box id="home">
      <Container><img src={require("../images/Logo.png")} alt="Fixi Logo" /></Container>
    </Box>
  );
};

export default HomePage;
