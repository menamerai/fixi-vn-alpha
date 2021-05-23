import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Media from "react-media";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "../css/BlogPost.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const axios = require("axios");
require("dotenv").config();

const BlogPost = () => {
  const [file, setFile] = React.useState("");
  const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  let { division, id } = useParams();
  let location = useLocation();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  React.useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND /* + ":" + process.env.REACT_APP_PRT */ + "/career/" + division + "/" + id)
      .then((res) => {
        console.log(res);
        setFile(new Uint8Array(res.data.postContent.data));
      })
      .catch((err) => console.log(err));
  }, [location, division, id]);

  return (
    <div id="container">
      <Document
        file={{ data: file }}
        options={{
          workerSrc: ".../public/pdf.worker.js",
          cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
        onLoadSuccess={onDocumentLoadSuccess}
        id="pdf"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Media
            queries={{
              mobile: "(max-width: 849px)",
              desktop: "(min-width: 850px)",
            }}
          >
            {(matches) => (
              <React.Fragment>
                {matches.mobile && <Page pageNumber={index + 1} />}
                {matches.desktop && <Page pageNumber={index + 1} height="1300" />}
              </React.Fragment>
            )}
          </Media>
        ))}
      </Document>
    </div>
  );
};

export default BlogPost;
