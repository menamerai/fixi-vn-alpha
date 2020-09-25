import React from "react";
import { Typography, Box, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import '../css/HomePage.css';
import { Autocomplete } from "@material-ui/lab";
// Pretend that we load the json from the Internet
import json from './json.js';

const HomePage = () => {
  return (
    <Box id="home">
      <img id="logo" src={require("../images/Logo.png")} alt="Fixi Logo" />
      <Autocomplete
        options={json}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        style={{ width: 500 }}
        closeIcon={<SearchIcon />}
        popupIcon={null}
      />
    </Box>
  );
};

export default HomePage;
