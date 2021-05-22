import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Error404 from "./Error404";
import Instructions from "./Instructions";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home title="Home" />
        </Route>

        <Route exact path="/play/instructions">
          <Instructions title="Instructions" />
        </Route>

        <Route>
          <Error404 title="404: Not Found" />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
