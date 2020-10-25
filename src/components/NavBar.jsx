import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = props => {
  const history = useHistory();
  // Add menu anchors (?)
  const [anchor, setAnchor] = React.useState({
    news: null,
    trend: null,
    career: null,
    story: null,
  });

  const handleClose = (event) => {
    setAnchor({
      news: null,
      trend: null,
      career: null,
      story: null,
    });
    // console.log(event.currentTarget.id.match(/-[\s\S]+/gi));
    const btnClicked = event.currentTarget.id.match(/(?<=_)([\s\S]+)/g);
    if (btnClicked) {
      history.push("/career/" + btnClicked[0]);
    }
  };

  const handleClick = (event) => {
    switch (event.currentTarget.id) {
      case "news-btn":
        setAnchor({ news: event.currentTarget });
        break;
      case "trend-btn":
        setAnchor({ trend: event.currentTarget });
        break;
      case "career-btn":
        setAnchor({ career: event.currentTarget });
        break;
      case "story-btn":
        setAnchor({ story: event.currentTarget });
        break;
      default:
        console.log("none detected.");
        break;
    }
  };

  const jobMenus = {
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

  const styles = {
    button: {
      marginLeft: "1em",
      marginRight: "1em",
      color: "#0f75bc",
      fontWeight: "bold",
      fontSize: 12,
      borderRadius: "2em",
      padding: "0.8em",
    },
  };

  return (
    <AppBar position="fixed" color={props.color} elevation={0}>
      <Toolbar id="navbar" component="nav">
        <Box id="buttons">
          <Button
            size="small"
            style={styles.button}
            onClick={() => history.push("/")}
            id="home-btn"
          >
            Home
          </Button>
          <Button
            endIcon={<ExpandMoreIcon />}
            size="small"
            style={styles.button}
            onClick={handleClick}
            aria-controls="news-menu"
            aria-haspopup="true"
            id="news-btn"
          >
            News
          </Button>
          <Menu
            id="news-menu"
            anchorEl={anchor.news}
            open={Boolean(anchor.news)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <MenuItem id="news-news1" onClick={handleClose}>
              News1
            </MenuItem>
            <MenuItem id="news-news2" onClick={handleClose}>
              News2
            </MenuItem>
          </Menu>
          <Button
            endIcon={<ExpandMoreIcon />}
            size="small"
            style={styles.button}
            onClick={handleClick}
            aria-controls="trend-menu"
            aria-haspopup="true"
            id="trend-btn"
          >
            Trend
          </Button>
          <Menu
            id="trend-menu"
            anchorEl={anchor.trend}
            open={Boolean(anchor.trend)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <MenuItem id="trend-trend1" onClick={handleClose}>
              Trend1
            </MenuItem>
            <MenuItem id="trend-trend2" onClick={handleClose}>
              Trend2
            </MenuItem>
          </Menu>
          <Button
            endIcon={<ExpandMoreIcon />}
            size="small"
            style={styles.button}
            onClick={handleClick}
            aria-controls="career-menu"
            aria-haspopup="true"
            id="career-btn"
          >
            Career
          </Button>
          <Menu
            id="career-menu"
            anchorEl={anchor.career}
            open={Boolean(anchor.career)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            {[
              "cong-nghe-ky-thuat",
              "cong-nghe-thong-tin",
              "khoa-hoc-tu-nhien",
              "khoa-hoc-xahoi-nhanvan",
              "kinh-te",
              "kinh-doanh",
              "quan-ly",
              "y-duoc-tam-ly-hoc",
              "luat",
              "moi-truong",
              "nong-lam-ngu",
              "giao-duc",
              "san-xuat-che-bien",
              "kien-truc-xay-dung",
              "nghe-thuat-tham-my-do-hoa",
              "bao-chi-truyen-thong",
              "dich-vu",
            ].map((key) => (
              <MenuItem id={"career_" + key} onClick={handleClose}>
                {jobMenus[key]}
              </MenuItem>
            ))}
          </Menu>
          <Button
            endIcon={<ExpandMoreIcon />}
            size="small"
            style={styles.button}
            aria-controls="story-menu"
            aria-haspopup="true"
            onClick={handleClick}
            id="story-btn"
          >
            Our Story
          </Button>
          <Menu
            id="story-menu"
            anchorEl={anchor.story}
            open={Boolean(anchor.story)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <MenuItem id="story-story1" onClick={handleClose}>
              Story1
            </MenuItem>
            <MenuItem id="story-story2" onClick={handleClose}>
              Story2
            </MenuItem>
          </Menu>
        </Box>
        <Box id="icons">
          <a
            href="https://www.facebook.com/FixiVietNam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <FacebookIcon
                className="icon"
                fontSize="small"
                style={{ color: "#0f75bc" }}
              />
            </IconButton>
          </a>
          <IconButton>
            <InstagramIcon
              className="icon"
              fontSize="small"
              style={{ color: "#0f75bc" }}
            />
          </IconButton>
          <IconButton>
            <WhatsAppIcon
              className="icon"
              fontSize="small"
              style={{ color: "#0f75bc" }}
            />
          </IconButton>
          <IconButton>
            <LanguageIcon
              className="icon"
              fontSize="small"
              style={{ color: "#0f75bc" }}
            />
          </IconButton>
          <IconButton>
            <SearchIcon
              className="icon"
              fontSize="small"
              style={{ color: "#0f75bc" }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
