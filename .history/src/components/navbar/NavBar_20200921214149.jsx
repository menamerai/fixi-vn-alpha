import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory, withRouter } from 'react-router-dom';
import '../../css/navbar/NavBar.css';

const NavBar = () => {
    const history = useHistory();
    // Add menu anchors (?)

    const styles = {
        button: {
            marginLeft: "1em",
            marginRight: "1em"
        }
    };

    const buttons = [
        "News",
        "Trend",
        "Career",
        "Our Story"
    ].map(button => (
        <Button endIcon={<ExpandMoreIcon />} size="small" style={styles.button} onClick={() => history.push("/test")}>
            {button}
        </Button>
    ));

    return (
        <AppBar position="static" color="transparent">
            <Toolbar variant="dense" id="navbar" component="nav">
                <Box className="buttons">
                    <Button size="small" style={styles.button} onClick={() => history.push("/")}>
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