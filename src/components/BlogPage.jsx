import React from "react";
import { useLocation } from "react-router-dom";
import BlogPaper from "./BlogPaper";
import '../css/BlogPage.css';
import { Grid } from '@material-ui/core';

const axios = require("axios");

const BlogPage = () => {
  const [json, setJson] = React.useState(["Loading...."]);

  const location = useLocation();

  React.useEffect(() => {
    axios
      .get("http://localhost:8080" + location.pathname)
      .then((res) => {
        setJson(res.data);
      })
      .catch((err) => console.log(err));
    console.log(json);
  }, []);

  return (
    <div id="blog-page">
      <div id="blog-title">
        {/*location.pathname.match(/(?<=\/career\/)*+/)[0].toUpperCase()*/}
      </div>
      <Grid container spacing={3} id="blog-container">
        {json.map((post) => {
          if (post !== "Loading...") {
            if (json.indexOf(post) === 0) {
              return (
                <Grid item xs={6}>
                  <BlogPaper
                    title={post.postName}
                    content={post.postContent}
                    author={post.postAuthor}
                    className="blog-main"
                  />
                </Grid>
              );
            } else {
              return (
                <Grid item xs={3}>
                  <BlogPaper
                    title={post.postName}
                    content={post.postContent}
                    author={post.postAuthor}
                    className="blog-papers"
                  />
                </Grid>
              );
            }
          } else return <p>Loading...</p>;
        })}
      </Grid>
    </div>
  );
};

export default BlogPage;
