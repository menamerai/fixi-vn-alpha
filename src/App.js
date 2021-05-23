import React from "react";
import NavBar from "./components/NavBar";
import NavDrawer from "./components/Drawer";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import BlogPost from "./components/BlogPost";
import "./css/App.css";
import { Route, useLocation } from "react-router-dom";
import Media from "react-media";

const App = () => {

  const location = useLocation();

  const [navStyle, setNavStyle] = React.useState("transparent");
  {/*Deal with transparency later*/}
  React.useEffect(() => {
    if (location.pathname !== "/") {
      setNavStyle("transparent");
    } else {
      setNavStyle("transparent");
    }
  }, [location.pathname]);
  
  return (
    <div className="app">
      <Media
        queries={{
          mobile: "(max-width: 849px)",
          desktop: "(min-width: 850px)",
        }}
      >
        {(matches) => (
          <React.Fragment>
            {matches.mobile && <NavDrawer />}
            {matches.desktop && <NavBar color={navStyle} />}
          </React.Fragment>
        )}
      </Media>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/career/:division">
        <BlogPage />
      </Route>
      <Route path="/career/:division/:id">
        <BlogPost />
      </Route>
    </div>
  );
};

export default App;
