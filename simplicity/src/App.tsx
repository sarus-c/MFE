import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";

type AppProps = {};

const App: FC<AppProps> = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
