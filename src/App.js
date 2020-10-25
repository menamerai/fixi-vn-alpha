import React from "react";
import NavBar from "./components/NavBar";
import NavDrawer from "./components/Drawer";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import "./css/App.css";
import { Route, useLocation } from "react-router-dom";
import Media from "react-media";

const App = () => {

  const location = useLocation();

  const [navStyle, setNavStyle] = React.useState("transparent");

  React.useEffect(() => {
    if (location.pathname !== "/") {
      setNavStyle("white");
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
      <Route path="/career">
        <BlogPage />
      </Route>
    </div>
  );
};

export default App;
