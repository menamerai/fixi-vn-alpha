import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Container, TableContainer } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory, withRouter } from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();
    // Add menu anchors (?)

    const buttons = [
        "News",
        "Trend",
        "Career",
        "Our Story"
    ].map(button => (
        <Button endIcon={<ExpandMoreIcon />} size="small">
            {button}
        </Button>
    ));

    return (
        <AppBar position="static" color="transparent">
            <Toolbar variant="dense" id="navbar">
                <Container className="buttons">
                    <Button size="small">
                        Home
                    </Button>
                    {buttons}
                </Container>
                <Container classname="icons">
                    <ExpandMoreIcon />
                    <ExpandMoreIcon />
                    <ExpandMoreIcon />
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;