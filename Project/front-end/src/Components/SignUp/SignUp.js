import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
      Email: "",
      error: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("here", event);
    const { Username, Password, Email } = this.state;
    fetch("http://localhost:3030/signup", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },

      body: JSON.stringify({
        Username,
        Password,
        Email
      })
    })
      .then(response => response.json())
      .then(data => {
        const { success, message } = data;
        if (success) {
          this.props.history.push("/login");
        } else {
          this.setState({
            error: message
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err
        });
      });
      console.log(Username, Password);
  };

  render() {
    const { Username, Password, Email } = this.state;
    return (
      <div id="login-box">
        <div className="left-box">
          <h1> Sign Up</h1>
          <input
            type="text"
            name={"Username"}
            value={Username}
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name={"Email"}
            value={Email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name={"Password"}
            value={Password}
            placeholder="Password"
            onChange={this.handleChange}
            validate
          />
          <input
            type="password"
            name={"Password"}
            value={Password}
            placeholder="Retype password"
            onChange={this.handleChange}
            validate
          />
          <button
            name="signup-button"
            Value="Sign Up"
            onClick={e => this.handleSubmit(e)}
          >
            Sign Up
          </button>
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
