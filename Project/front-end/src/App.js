import React from "react";
import "./App.css";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import SignUpForm from "./Components/SignUp/SignUp.js";
import LogInForm from "./Components/LogIn/LogIn.js";
import Landing from "./Pages/LandingPage/Landing";
import Home from "./Pages/HomePage/HomePage.js";
import Profile from "./Components/Profile/Profile.js";
import Course from "./Pages/Courses/Courses.js";
import Events from "./Pages/EventPage/Events.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        loggedIn: false,
        user: null
      }
    };
  }

  componentDidMount() {
    const jwt_token = localStorage.getItem("jwt");
    const username = localStorage.getItem("username");
    fetch("http://localhost:3030/check_token", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Accept-Charset": "utf-8"
      },
      body: JSON.stringify({
        token: jwt_token,
        username
      })
    })
      .then(response => response.json())
      .then(data => {
        const { success, results } = data;
        const { user } = results;
        //debugger;
        if (success) {
          this.setState(
            {
              auth: {
                user: success ? user : null,
                loggedIn: success
              }
            },
            () => {}
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  logUserIn = user => {
    this.setState({
      auth: {
        loggedIn: true,
        user
      }
    });
  };

  getPickerValue = value => {};

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            {this.state.auth.loggedIn ? (
              <Redirect to="/HomePage" />
            ) : (
              <Redirect to="/signup" />
            )}
          </Route>
          <Route
            path={"/"}
            exact
            render={props => (
              <Landing
                logUserIn={this.logUserIn}
                loggedIn={this.state.auth.loggedIn}
                {...props}
              />
            )}
          />
          <Route
            path={"/HomePage"}
            exact
            render={props => <Home user={this.state.auth} {...props} />}
          />

          <Route
            path={"/signup"}
            exact
            render={props => (
              <SignUpForm logUserIn={this.logUserIn} {...props} />
            )}
          />

          <Route
            path={"/Profile"}
            exact
            render={props => <Profile user={this.state.auth} {...props} />}
          />

          <Route
            path={"/Courses"}
            exact
            render={props => <Course user={this.state.auth} {...props} />}
          />

          <Route
            path={"/Events"}
            exact
            render={props => <Events user={this.state.auth} {...props} />}
          />

          <Route
            path={"/login"}
            exact
            render={props => (
              <LogInForm logUserIn={this.logUserIn} {...props} />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
