import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  Collapse
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";
import '../css/NavBar.css';

const NavBar = () => {
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
    const btnClicked = event.currentTarget.id.match(/(?<=-)([\s\S]+)/g);
    if (btnClicked) {
      history.push("/" + btnClicked[0]);
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

  const styles = {
    button: {
      marginLeft: "1em",
      marginRight: "1em",
    },
  };

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar id="navbar" component="nav">
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
            <MenuItem id="career-career1" onClick={handleClose}>
              Career1
            </MenuItem>
            <MenuItem id="career-career2" onClick={handleClose}>
              Career2
            </MenuItem>
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
