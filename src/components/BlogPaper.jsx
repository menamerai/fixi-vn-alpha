import React from "react";
import { Card, CardContent,CardHeader } from "@material-ui/core";

require("dotenv").config();

const BlogPaper = (props) => {

  return (
    <a href={process.env.REACT_APP_FRONTEND + "/career/" + props.division + "/" + props.link}>
      <Card raised variant="outlined">
        <CardContent className="card">
          <CardHeader title={props.title} className="header"></CardHeader>
          <img alt="" className="imgs" src={"https://drive.google.com/uc?export=view&id=" + props.img} />
        </CardContent>
      </Card>
    </a>
  );

};

export default BlogPaper;
