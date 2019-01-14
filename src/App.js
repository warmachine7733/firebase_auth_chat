import React, { Component } from "react";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import NavBar from "./components/layouts/Navbar";
import Chatscreen from "./components/dashboard/Chatscreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Chatscreen} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
