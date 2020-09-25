import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Container, TableContainer } from "@material-ui/core";
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
                <div className="buttons">
                    <Button size="small" className="button">
                        Home
                    </Button>
                    {buttons}
                </div>
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