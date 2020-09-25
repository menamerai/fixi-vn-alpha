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
import { BrushRounded } from "@material-ui/icons";

const NavBar = () => {
  const history = useHistory();
  // Add menu anchors (?)
  const [newsAnchor, setNewsAnchor] = React.useState(null);

  const handleClose = event => {
    setNewsAnchor(null);
    switch (event.target.innerText) {
      case "News1":
        history.push("/news1");
        break;
      case "News2":
        history.push("/news2");
        break;
    }
  };

  const handleNews = (event) => {
    setNewsAnchor(event.currentTarget);
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
            onClick={handleNews}
            aria-controls="news-menu"
            aria-haspopup="true"
          >
            News
          </Button>
          <Menu
            id="news-menu"
            anchorEl={newsAnchor}
            open={Boolean(newsAnchor)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <MenuItem onClick={handleClose}>News1</MenuItem>
            <MenuItem onClick={handleClose}>News2</MenuItem>
          </Menu>
          <Button
            endIcon={<ExpandMoreIcon />}
            size="small"
            style={styles.button}
          >
            Trend
          </Button>
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
