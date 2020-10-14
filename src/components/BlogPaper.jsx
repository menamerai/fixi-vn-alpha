import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const BlogPaper = (props) => {

  return (
    <Card raised variant="outlined">
      <CardContent>
        <Typography variant="h5">
          {props.title}
        </Typography>
        <Typography>
          by {props.author}
        </Typography>
        <Typography>
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );

};

export default BlogPaper;
