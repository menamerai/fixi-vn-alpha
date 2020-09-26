import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import '../css/Drawer.css';

class DrawerBar extends React.Component {
  
  render() {
    return (
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar id="appbar">
          <IconButton
            edge="end"
            aria-label="menu"
            onClick={this.props.clickHandler}
          >
            <MenuIcon id="hamburger" />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default DrawerBar;
