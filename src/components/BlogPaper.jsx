import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import LineEllipsis from "react-lines-ellipsis";

const BlogPaper = (props) => {

  return (
    <Card raised variant="outlined">
      <CardContent>
        <Typography variant="h5">
          {props.title}
        </Typography>
        <Typography class="author-texts">
          <em>by {props.author}</em>
        </Typography>
        <LineEllipsis
          text={props.content}
          maxLine="5"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </CardContent>
    </Card>
  );

};

export default BlogPaper;
