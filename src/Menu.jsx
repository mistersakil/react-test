import React from "react";
import MenuBar from "./MenuBar";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Help from "./Help";
import Home from "./Home";
import News from "./News";
import NewsDetails from "./NewsDetails";
import Error404 from "./Error404";

const Menu = () => {
  return (
    <>
      <h1>React Router Dom</h1>
      <MenuBar />
      <Switch>
        <Route exact path="/">
          <Home title="Home" />
        </Route>
        <Route path="/about">
          <About title="About Us" />
        </Route>
        <Route path="/contact">
          <Contact title="Contact Us" />
        </Route>
        <Route path="/help">
          <Help title="Help" />
        </Route>
        <Route exact path="/news">
          <News title="News" />
        </Route>
        <Route path="/news/:id">
          <NewsDetails title="News Details" />
        </Route>
        <Route>
          <Error404 title="News" />
        </Route>
      </Switch>
    </>
  );
};

export default Menu;
