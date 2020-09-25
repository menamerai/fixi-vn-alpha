import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem } from "@material-ui/core";
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
    ].map(button => {
        (<Button endIcon={<ExpandMoreIcon />}>
            {button}
        </Button>)
    });

    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                <Button>
                    Home
                </Button>
                {buttons}
            </Toolbar>
        </AppBar>
    )
}