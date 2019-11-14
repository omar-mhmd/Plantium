import React, { Component } from "react";
import "./Profile.css";

import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

import { Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      Name: "",
      Email: "",
      Bio: "",
      Image: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleImageChange = event => {
    this.setState({
      Image: event.target.files[0]
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("here", event);
    const body = new FormData();
    const { Name, Email, Bio, Image } = this.state;
    body.append("Name", Name);
    body.append("Email", Email);
    body.append("Bio", Bio);
    body.append("event", "Profile_Images");
    body.append("Image", Image);
    body.append("Tokens", this.props.user.user.Tokens);
    body.append("Persons_id", this.props.user.user.Persons_id);
    console.log(Image);
    fetch("http://localhost:3030/Persons/update", {
      method: "put",

      body
    })
      .then(response => response.json())
      .then(data => {
        const { success, message } = data;
        console.log(success,message);
        if (success) {
          alert("Profile has been updated")
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
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { Name, Email, Bio, Image } = this.state;

    return (
      <div className="body1">
        <div>
          {/* Sidebar/menu */}
          <nav
            className="w3-sidebar w3-collapse w3-white w3-animate-left"
            style={{ zIndex: 3, width: 300 }}
            id="mySidebar"
          >
            <br />
            <div className="w3-container">
              <Link
                to="#"
                onclick="w3_close()"
                className="w3-hide-large w3-right
                w3-jumbo w3-padding w3-hover-grey"
                title="close menu"
              >
                {/* <i className="fa fa-remove" /> */}
              </Link>
              <img
                src={`http://localhost:3030/Profile_Images/${this.props.user.user.Image}`}
                style={{ width: "45%" }}
                className="w3-round"
              />
              <br />
              <br />
              <h4>
                <b>{this.props.user.user.Name}</b>
              </h4>
            </div>
            <hr></hr>
            <div className="w3-bar-block">
              <a
                href="#portfolio"
                onclick="w3_close()"
                className="w3-bar-item w3-button w3-padding w3-text-teal"
              >
                <i className="fa fa-th-large fa-fw w3-margin-right" />
                My Blogs
              </a>
              <a
                href="#about"
                onclick="w3_close()"
                className="w3-bar-item w3-button w3-padding"
              >
                <i className="fa fa-user fa-fw w3-margin-right" />
                Biography
              </a>

              <a
                href="/HomePage"
                onclick="w3_close()"
                className="w3-bar-item w3-button w3-padding"
              >
                <i className="fas fa-leaf w3-margin-right" />
                Homepage
              </a>
              <div></div>
              <hr></hr>
              <MDBContainer>
                <MDBBtn className="edit" color="light" onClick={this.toggle}>
                  <i class="far fa-edit"></i>
                  <b>Edit Profile</b>
                </MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                  <MDBModalHeader toggle={this.toggle}>
                    Edit Your Profile
                  </MDBModalHeader>
                  <MDBModalBody>
                    <h6>
                      <b>Choose an Image</b>
                    </h6>
                    <input
                      type="file"
                      name="Image"
                      onChange={this.handleImageChange}
                    />
                    <br />
                    <h6>
                      <b>Edit your personal information</b>
                    </h6>
                    <br />
                    <div className="input-profile">
                      <input
                        type="text"
                        name={"Name"}
                        value={Name}
                        placeholder="Name"
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
                        className="bio-profile"
                        type="text"
                        name={"Bio"}
                        value={Bio}
                        placeholder="Type your Biography here...."
                        onChange={this.handleChange}
                      />
                    </div>
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggle}>
                      Close
                    </MDBBtn>
                    <MDBBtn color="primary" onClick={e => this.handleSubmit(e)}>
                      Save changes
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </MDBContainer>
            </div>
            <div className="w3-panel w3-large"></div>
          </nav>
          <div id="login-box1">
            {/* Overlay effect when opening sidebar on small screens */}
            <div
              className="w3-overlay w3-hide-large w3-animate-opacity"
              onclick="w3_close()"
              style={{ cursor: "pointer" }}
              title="close side menu"
              id="myOverlay"
            />
            {/* !PAGE CONTENT! */}
            <div className="w3-main" style={{ marginLeft: 300 }}>
              {/* Header */}
              <header id="portfolio">
                <a href="#">
                  <img
                    src={require("../../Assets/person2.jpg")}
                    style={{ width: 65 }}
                    className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
                  />
                </a>
                <span
                  className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
                  onclick="w3_open()"
                >
                  <i className="fa fa-bars" />
                </span>
                <div className="w3-container">
                  <h1>
                    <b></b>
                  </h1>
                  <div className="w3-section w3-bottombar w3-padding-16"></div>
                </div>
              </header>
              {/* First Photo Grid*/}
              <div className="w3-row-padding">
                <div className="w3-third w3-container w3-margin-bottom">
                  <img
                    src={require("../../Assets/front1.jpg")}
                    alt=""
                    style={{ width: "100%" }}
                    className="w3-hover-opacity"
                  />
                  <div className="w3-container w3-white">
                    <p>
                      <b>Lorem Ipsum</b>
                    </p>
                    <p>
                      Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                      condimentum, porta lectus vitae, ultricies congue gravida
                      diam non fringilla.
                    </p>
                  </div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom">
                  <img
                    src={require("../../Assets/front1.jpg")}
                    alt="Norway"
                    style={{ width: "100%" }}
                    className="w3-hover-opacity"
                  />
                  <div className="w3-container w3-white">
                    <p>
                      <b>Lorem Ipsum</b>
                    </p>
                    <p>
                      Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                      condimentum, porta lectus vitae, ultricies congue gravida
                      diam non fringilla.
                    </p>
                  </div>
                </div>
                <div className="w3-third w3-container">
                  <img
                    src={require("../../Assets/front1.jpg")}
                    alt="Norway"
                    style={{ width: "100%" }}
                    className="w3-hover-opacity"
                  />
                  <div className="w3-container w3-white">
                    <p>
                      <b>Lorem Ipsum</b>
                    </p>
                    <p>
                      Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                      condimentum, porta lectus vitae, ultricies congue gravida
                      diam non fringilla.
                    </p>
                  </div>
                </div>
              </div>
              {/* Second Photo Grid*/}
              <div className="w3-row-padding">
                <div className="w3-third w3-container w3-margin-bottom">
                  <img
                    src={require("../../Assets/front1.jpg")}
                    alt="Norway"
                    style={{ width: "100%" }}
                    className="w3-hover-opacity"
                  />
                  <div className="w3-container w3-white">
                    <p>
                      <b>Lorem Ipsum</b>
                    </p>
                    <p>
                      Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                      condimentum, porta lectus vitae, ultricies congue gravida
                      diam non fringilla.
                    </p>
                  </div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom">
                  <img
                    src={require("../../Assets/front1.jpg")}
                    alt="Norway"
                    style={{ width: "100%" }}
                    className="w3-hover-opacity"
                  />
                  <div className="w3-container w3-white">
                    <p>
                      <b>Lorem Ipsum</b>
                    </p>
                    <p>
                      Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                      condimentum, porta lectus vitae, ultricies congue gravida
                      diam non fringilla.
                    </p>
                  </div>
                </div>
                <div className="w3-third w3-container">
                  <img
                    src={require("../../Assets/front1.jpg")}
                    alt="Norway"
                    style={{ width: "100%" }}
                    className="w3-hover-opacity"
                  />
                  <div className="w3-container w3-white">
                    <p>
                      <b>Lorem Ipsum</b>
                    </p>
                    <p>
                      Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                      condimentum, porta lectus vitae, ultricies congue gravida
                      diam non fringilla.
                    </p>
                  </div>
                </div>
              </div>
              {/* Pagination */}
              <div className="w3-center w3-padding-32">
                <div className="w3-bar">
                  <a href="#" className="w3-bar-item w3-button w3-hover-black">
                    «
                  </a>
                  <a href="#" className="w3-bar-item w3-black w3-button">
                    1
                  </a>
                  <a href="#" className="w3-bar-item w3-button w3-hover-black">
                    2
                  </a>
                  <a href="#" className="w3-bar-item w3-button w3-hover-black">
                    3
                  </a>
                  <a href="#" className="w3-bar-item w3-button w3-hover-black">
                    4
                  </a>
                  <a href="#" className="w3-bar-item w3-button w3-hover-black">
                    »
                  </a>
                </div>
              </div>
              {/* Images of Me */}
              <div className="w3-row-padding w3-padding-16" id="about"></div>
              <div
                className="w3-container w3-padding-large"
                style={{ marginBottom: 32 }}
              >
                <h4>
                  <b>About Me</b>
                </h4>
                <p>{this.props.user.user.Bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
