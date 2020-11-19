import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import LineEllipsis from "react-lines-ellipsis";

const BlogPaper = (props) => {

  return (
    <a href={"http://localhost:8080/career/" + props.division + "/" + props.link} target="_blank">
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
            maxLine="6"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </CardContent>
      </Card>
    </a>
  );

};

export default BlogPaper;
