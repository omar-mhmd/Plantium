import React, { Component } from "react";
import SignUpForm from "../../Components/SignUp/SignUp.js";
import Home from "../HomePage/HomePage.js"



import { Switch, Route } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 

  render() {
    console.log(this.props);
    
    if (this.props.loggedIn) {
      return (
        <Switch>
          <Route
            path={"/HomePage"}
            exact
            render={props => <Home {...props} />}
          />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route
            path={"/signup"}
            exact
            render={props => <SignUpForm {...props} />}
          />
        </Switch>
      );
    }
  }
}

export default Landing;
