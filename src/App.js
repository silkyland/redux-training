import React, { Component } from "react";
import Master from "./components/layout/Master";
import Home from "./components/Home";
import Users from "./components/User";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Master>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
        </Master>
      </Router>
    );
  }
}

export default App;
