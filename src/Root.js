import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import PlayerCreation from "./pages/PlayerCreation";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={PlayerCreation} />
    </Switch>
  </Router>
);
export default Root;
