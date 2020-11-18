import React from "react";
import { useLocation } from "react-router-dom";
import BlogPaper from "./BlogPaper";
import { Grid, Typography, Container } from "@material-ui/core";
import Media from "react-media";
import "../css/BlogPage.css";

const axios = require("axios");

const BlogPage = () => {
  
  const [json, setJson] = React.useState(["Loading...."]);

  const location = useLocation();

  const locationDict = {
    "cong-nghe-ky-thuat": "Công nghệ, kỹ thuật",
    "cong-nghe-thong-tin": "Công nghệ thông tin",
    "khoa-hoc-tu-nhien": "Khoa học tự nhiên",
    "khoa-hoc-xahoi-nhanvan": "Khoa học xã hội & nhân văn",
    "kinh-te": "Kinh tế",
    "kinh-doanh": "Kinh doanh",
    "quan-ly": "Quản lý",
    "y-duoc-tam-ly-hoc": "Y dược, tâm lý học",
    "luat": "Luật",
    "moi-truong": "Môi trường",
    "nong-lam-ngu": "Nông, lâm, ngư nghiệp",
    "giao-duc": "Giáo dục",
    "san-xuat-che-bien": "Sản xuất chế biến",
    "kien-truc-xay-dung": "Kiến trúc và xây dựng",
    "nghe-thuat-tham-my-do-hoa": "Nghệ thuật, thẩm mỹ và đồ họa",
    "bao-chi-truyen-thong": "Báo chí và truyền thông",
    "dich-vu": "Dịch vụ",
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:8080" + location.pathname)
      .then((res) => {
        setJson(res.data);
      })
      .catch((err) => console.log(err));
    console.log(json);
  }, [location]);

  return (
    <div id="blog-page">
      <img id="blog-background" src={require("../images/blogbackgroundoverlayed.png")} alt="Blog Background" />
        {/*<Typography variant="h3">
          {locationDict[
            location.pathname.match(/(?<=\/career\/)[\s\S]+/)[0]
          ].toUpperCase()}
        </Typography>*/}
      <Container>
        <Grid container spacing={3} id="blog-container">
          {json.map((post) => {
            if (post !== "Loading...") {
              return (
                <Media
                  queries={{
                    mobile: "(max-width: 849px)",
                    desktop: "(min-width: 850px)",
                  }}
                >
                  {(matches) => (
                    <React.Fragment>
                      {matches.mobile && 
                        <Grid item xs={12}>
                          <BlogPaper
                            title={post.postName}
                            content={post.postContent}
                            author={post.postAuthor}
                            className="blog-papers"
                          />
                        </Grid>}
                      {matches.desktop && 
                        <Grid item xs={4}>
                          <BlogPaper
                            title={post.postName}
                            content={post.postContent}
                            author={post.postAuthor}
                            className="blog-papers"
                          />
                        </Grid>}
                    </React.Fragment>
                  )}
                </Media>
                
              );
            } else return <p>Loading...</p>;
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default BlogPage;
