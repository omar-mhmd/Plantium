import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Show: "False",
    };
  }
  
  render() {
    return (
      <div id="login-box">
        <div className="left-box">
          <h1> Sign Up</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Retype password"
          />
          <form>
            <input type="submit" name="signup-button" Value="Sign Up" />
          </form>
        </div>
        <div className="right-box">
          <span className="signinwith">
            Sign in with
            <br />
            Social Network
          </span>
          <button className="social facebook">Log in with Facebook</button>
          <button className="social google">Log in with Google+</button>
          <p>Have an Account ?</p>
          <Link to="/Login">
            <button name="Login-button" Value="Log-in">
              Log-in
            </button>
          </Link>
        </div>
        <div className="or">OR</div>
      </div>
    );
  }
}

export default SignUpForm;
