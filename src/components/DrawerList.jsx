import React from "react";
import {
  List as MuiList,
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import BookIcon from '@material-ui/icons/Book';
import { useHistory, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "20em",
    minWidth: "300px",
    maxWidth: "500px",
    backgroundColor: theme.palette.background,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const DrawerList = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState({
    news: false,
    trend: false,
    career: false,
    story: false,
  });
  const history = useHistory();

  const handleClick = (event) => {
    switch (event.currentTarget.id) {
      case "news":
        setOpen({ news: !open.news });
        console.log("news");
        break;
      case "trend":
        setOpen({ trend: !open.trend });
        console.log("trend");
        break;
      case "career":
        setOpen({ career: !open.career });
        console.log("career")
        break;
      case "story":
        setOpen({ story: !open.story });
        console.log("story");
        break;
      default: break;
    }
  };

  return (
    <MuiList component="nav" className={classes.root}>
      <MuiListItem
        button
        onClick={() => {
          history.push("/");
          props.clickHandler();
        }}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </MuiListItem>
      <MuiListItem id="news" button onClick={handleClick}>
        <ListItemIcon>
          <WhatshotIcon />
        </ListItemIcon>
        <ListItemText primary="News" />
        {open.news ? <ExpandLess /> : <ExpandMore />}
      </MuiListItem>
      <Collapse in={open.news} timeout="auto" unmountOnExit>
        <MuiList component="div" disablePadding>
          <MuiListItem
            button
            className={classes.nested}
            onClick={() => {
              history.push("/news1");
              props.clickHandler();
            }}
          >
            <ListItemText primary="News1" />
          </MuiListItem>
          <MuiListItem
            button
            className={classes.nested}
            onClick={() => {
              history.push("/news2");
              props.clickHandler();
            }}
          >
            <ListItemText primary="News2" />
          </MuiListItem>
        </MuiList>
      </Collapse>
      <MuiListItem id="trend" button onClick={handleClick}>
        <ListItemIcon>
          <TrendingUpIcon />
        </ListItemIcon>
        <ListItemText primary="Trend" />
        {open.trend ? <ExpandLess /> : <ExpandMore />}
      </MuiListItem>
      <Collapse in={open.trend} timeout="auto" unmountOnExit>
        <MuiList component="div" disablePadding>
          <MuiListItem
            button
            className={classes.nested}
            onClick={() => {
              history.push("/trend1");
              props.clickHandler();
            }}
          >
            <ListItemText primary="Trend1" />
          </MuiListItem>
          <MuiListItem
            button
            className={classes.nested}
            onClick={() => {
              history.push("/trend2");
              props.clickHandler();
            }}
          >
            <ListItemText primary="Trend2" />
          </MuiListItem>
        </MuiList>
      </Collapse>
      <MuiListItem id="career" button onClick={handleClick}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Career" />
        {open.career ? <ExpandLess /> : <ExpandMore />}
      </MuiListItem>
      <Collapse in={open.career} timeout="auto" unmountOnExit>
        <MuiList component="div" disablePadding>
          <MuiListItem
            button
            className={classes.nested}
            onClick={() => {
              history.push("/career1");
              props.clickHandler();
            }}
          >
            <ListItemText primary="Career1" />
          </MuiListItem>
          <MuiListItem
            button
            className={classes.nested}
            onClick={() => {
              history.push("/career2");
              props.clickHandler();
            }}
          >
            <ListItemText primary="Career2" />
          </MuiListItem>
        </MuiList>
      </Collapse>
      <MuiListItem id="story" button onClick={handleClick}>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Story" />
        {open.story ? <ExpandLess /> : <ExpandMore />}
      </MuiListItem>
      <Collapse in={open.story} timeout="auto" unmountOnExit>
        <MuiList component="div" disablePadding>
          <MuiListItem
            button
            className={classes.nested}
            onClick={() => {
              history.push("/story1");
              props.clickHandler();
            }}
          >
            <ListItemText primary="Story1" />
          </MuiListItem>
          <MuiListItem
            button
            className={classes.nested}
            onClick={() => {
              history.push("/story2");
              props.clickHandler();
            }}
          >
            <ListItemText primary="Story2" />
          </MuiListItem>
        </MuiList>
      </Collapse>
    </MuiList>
  );
};

export default withRouter(DrawerList);
