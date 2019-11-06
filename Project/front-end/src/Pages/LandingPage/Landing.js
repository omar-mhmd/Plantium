import React, { Component } from "react";
import SignUpForm from "../../Components/SignUp/SignUp.js";
import Home from "../HomePage/HomePage.js"





class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 

  render() {
    console.log(this.props);
    
    if (this.props.loggedIn) {
      return (
         this.props.history.push("/HomePage")
      );
    } else {
      return this.props.history.push("/signup");
    }
  }
}

export default Landing;
