import React from "react";
import { useLocation } from "react-router-dom";
import BlogPaper from "./BlogPaper";
import '../css/BlogPage.css';

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
      <div id="blog-container">
        {json.map((post) => {
          if (post !== "Loading...") {
            return (
              <BlogPaper
                title={post.postName}
                content={post.postContent}
                author={post.postAuthor}
                className="blog-papers"
              />
            );
          } else return <p>Loading...</p>;
        })}
      </div>
    </div>
  );
};

export default BlogPage;
