import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import PlayerCreation from "./pages/PlayerCreation";
import PerkSelection from "./pages/PerkSelection";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={PlayerCreation} />
      <Route path="/perks" component={PerkSelection} />
    </Switch>
  </Router>
);
export default Root;
