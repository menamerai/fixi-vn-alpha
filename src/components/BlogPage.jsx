import React from "react";
import { useLocation } from 'react-router-dom';

const axios = require("axios");

const BlogPage = () => {

  const [json, setJson] = React.useState("Loading....");

  const location = useLocation();

  React.useEffect(() => {
    axios.get("http://localhost:8080" + location.pathname).then(res => {
      setJson(res.data);
    }).catch(err => console.log(err))
  });

  return (
    <p>{JSON.stringify(json[0], null, 2)}</p>
  )
};

export default BlogPage;