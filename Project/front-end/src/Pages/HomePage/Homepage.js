import React, { Component } from "react";
import './Homepage.css'
// import SignUpForm from "./Components/SignUp/SignUp.js";
// import LogInForm from "./Components/LogIn/LogIn.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  render() {
    console.log(this.props);
    
    if (this.props.loggedIn) {
      return (
        <div>
          <div>
            <h1 className="text">hello this is a homepage</h1>
          </div>
          <div>
            <button onClick={this.logout}>Log Out</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <p className="text">you are not LogIn</p>
          </div>
        </div>
      );
   
    }
    
    
  }
}

export default Home;
