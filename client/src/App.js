import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Account from "./components/Account";
import Support from "./components/Support";
import Messaging from "./components/Messaging";
import Kanban from "./components/Kanban";
import Landing from "./components/Landing";
import Login from "./utils/Login";
import Register from "./utils/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/kanban" component={Kanban} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/account" component={Account} />
          <Route path="/messaging" component={Messaging} />
          <Route path="/support" component={Support} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
