import React from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";

const LoginError = ({ error }) => {
  return <div className={"error-wrapper"}>{error}</div>;
};

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
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
    const { Username, Password } = this.state;
    fetch("http://localhost:3030/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Accept-Charset": "utf-8"
      },
      body: JSON.stringify({
        Username,
        Password
      })
    })
      .then(response => response.json())
      .then(data => {
        const { success, message, results } = data;
        const { token, user } = results;
        if (success) {
          localStorage.setItem("jwt", token);
          console.log(token, "token");
          // this.props.logUserIn(user);
          this.props.history.push("/");
        } else {
          this.setState({
            error: message
          });
        }
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
    console.log(Username, Password);
  };

  render() {
    const { Username, Password, error } = this.state;
    return (
      <div className={`login-box ${error ? "error" : ""}`}>
        <div className="left-box">
          <h1> LogIn</h1>
          <input
            type="text"
            name={"Username"}
            value={Username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name={"Password"}
            value={Password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          {/*   {error ? <LoginError error={error} /> : null} */}
          <button
            name="signup-button"
            Value="Log In"
            onClick={e => this.handleSubmit(e)}
          >
            LogIn
          </button>
        </div>
        <div className="right-box">
          <p className="signinwith">Don't Have an Account ?</p>
          <br></br>
          <p className="signinwith">Sign Up Now !</p>
          <Link to="/signup">
            <button name="SignUp-button" Value="Sign Up">Sign Up</button>
          </Link>
        </div>
        <div className="or">OR</div>
      </div>
    );
  }
}

export default LogInForm;
