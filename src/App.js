import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import UserDetails from "./components/UserDetails";
import Update from "./components/Update";

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/update">
            <Update />
          </Route>
          <Route excat path="/view/:id">
            <UserDetails />
          </Route>
          <Route exact path="/view">
            <Read />
          </Route>
          <Route exact path="/">
            <Create />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
