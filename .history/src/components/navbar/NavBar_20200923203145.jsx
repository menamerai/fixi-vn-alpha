import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory, withRouter } from "react-router-dom";
import "../../css/navbar/NavBar.css";
import { BrushRounded, SignalCellularNull } from "@material-ui/icons";

const NavBar = () => {
  const history = useHistory();
  // Add menu anchors (?)
  const [anchor, setAnchor] = React.useState({
    news: null,
    trend: null,
    career: null,
    story: null
  });

  const newsRef = React.createRef(null);
  const trendRef = React.createRef(null);
  const careerRef = React.createRef(null);
  const storyRef = React.createRef(null);

  const handleClose = event => {
    setAnchor({
      news: null,
      trend: null,
      career: null,
      story: null
    });
    switch (event.currentTarget.id) {
      case "news-news1":
        history.push("/news1");
        break;
      case "news-news2":
        history.push("/news2");
        break;
      case "trend-trend1":
        history.push("/trend1");
        break;
      case "trend-trend2":
        history.push("/trend2");
        break;
    }
  };

  const handleClick = event => {
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

  const styles = {
    button: {
      marginLeft: "1em",
      marginRight: "1em",
    },
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar variant="dense" id="navbar" component="nav">
        <Box className="buttons">
          <Button
            size="small"
            style={styles.button}
            onClick={() => history.push("/")}
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
            <MenuItem id="news-news1" onClick={handleClose}>News1</MenuItem>
            <MenuItem id="news-news2" onClick={handleClose}>News2</MenuItem>
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
            <MenuItem id="trend-trend1" onClick={handleClose}>Trend1</MenuItem>
            <MenuItem id="trend-trend2" onClick={handleClose}>Trend2</MenuItem>
          </Menu>
          <Button
            endIcon={<ExpandMoreIcon />}
            size="small"
            style={styles.button}
          >
            Career
          </Button>
          <Button
            endIcon={<ExpandMoreIcon />}
            size="small"
            style={styles.button}
          >
            Our Story
          </Button>
        </Box>
        <Box classname="icons">
          <ExpandMoreIcon />
          <ExpandMoreIcon />
          <ExpandMoreIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
