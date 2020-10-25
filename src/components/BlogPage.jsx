import React from "react";
import { useLocation } from "react-router-dom";
import BlogPaper from "./BlogPaper";
import "../css/BlogPage.css";
import { Grid, Typography, Container } from "@material-ui/core";

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
      <div id="blog-title">
        <Typography variant="h3">
          {locationDict[
            location.pathname.match(/(?<=\/career\/)[\s\S]+/)[0]
          ].toUpperCase()}
        </Typography>
      </div>
      <Container>
        <Grid container spacing={3} id="blog-container">
          {json.map((post) => {
            if (post !== "Loading...") {
              return (
                <Grid item xs={4}>
                  <BlogPaper
                    title={post.postName}
                    content={post.postContent}
                    author={post.postAuthor}
                    className="blog-papers"
                  />
                </Grid>
              );
            } else return <p>Loading...</p>;
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default BlogPage;
