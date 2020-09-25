import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory, withRouter } from 'react-router-dom';
import '../../css/navbar/NavBar.css';

const NavBar = () => {
    const history = useHistory();
    // Add menu anchors (?)

    const buttons = [
        "News",
        "Trend",
        "Career",
        "Our Story"
    ].map(button => (
        <Button endIcon={<ExpandMoreIcon />} size="small" className="button">
            {button}
        </Button>
    ));

    return (
        <AppBar position="static" color="transparent">
            <Toolbar variant="dense" id="navbar">
                <Box className="buttons">
                    <Button size="small" className="button">
                        Home
                    </Button>
                    {buttons}
                </Box>
                <Box classname="icons">
                    <ExpandMoreIcon />
                    <ExpandMoreIcon />
                    <ExpandMoreIcon />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;