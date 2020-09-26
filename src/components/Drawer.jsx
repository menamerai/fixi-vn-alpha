import React from "react";
import DrawerList from "./DrawerList";
import DrawerBar from "./DrawerBar";
import { Box, Drawer as MuiDrawer } from "@material-ui/core";

class NavDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  async toggleDrawer() {
    await this.setState({ open: !this.state.open });
  }
  async handleClose() {
    await this.setState({ open: false });
  }

  render() {
    return (
      <Box>
        <MuiDrawer
          open={this.state.open}
          variant="temporary"
          onClose={this.handleClose}
          anchor="right"
        >
          <DrawerList clickHandler={this.toggleDrawer} />
        </MuiDrawer>
        <DrawerBar clickHandler={this.toggleDrawer} />
      </Box>
    );
  }
}

export default NavDrawer;
