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

const NavBar = () => {
  const history = useHistory();
  // Add menu anchors (?)
  const [newsAnchor, setNewsAnchor] = React.useState(null);

  const handleClose = () => {
    setNewsAnchor(null);
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
          >
            <MenuItem onClick={history.push("/news")}>News</MenuItem>
          </Menu>
          <Button
            endIcon={<ExpandMoreIcon />}
            size="small"
            style={styles.button}
            onClick={() =>
              history.push("/" + button.toLowerCase().replace(/\s/g, ""))
            }
          >
            Trend
          </Button>
          <Button
            endIcon={<ExpandMoreIcon />}
            size="small"
            style={styles.button}
            onClick={() =>
              history.push("/" + button.toLowerCase().replace(/\s/g, ""))
            }
          >
            Career
          </Button>
          <Button
            endIcon={<ExpandMoreIcon />}
            size="small"
            style={styles.button}
            onClick={() =>
              history.push("/" + button.toLowerCase().replace(/\s/g, ""))
            }
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
