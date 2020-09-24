import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/subcomponents/Header";
import { Skills } from "./components/pages/Skills";
import { Home } from "./components/pages/Home";

import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
