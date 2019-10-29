import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
              <a
                href="#"
                onclick="w3_close()"
                className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
                title="close menu"
              >
                {/* <i className="fa fa-remove" /> */}
              </a>
              <img
                src={require("../../Assets/person2.jpg")}
                style={{ width: "45%" }}
                className="w3-round"
              />
              <br />
              <br />
              <h4>
                <b>PORTFOLIO</b>
              </h4>
            </div>
            <div className="w3-bar-block">
              <a
                href="#portfolio"
                onclick="w3_close()"
                className="w3-bar-item w3-button w3-padding w3-text-teal"
              >
                {/* <i className="fa fa-th-large fa-fw w3-margin-right" /> */}
                PORTFOLIO
              </a>
              <a
                href="#about"
                onclick="w3_close()"
                className="w3-bar-item w3-button w3-padding"
              >
                <i className="fa fa-user fa-fw w3-margin-right" />
                ABOUT
              </a>
              <a
                href="#contact"
                onclick="w3_close()"
                className="w3-bar-item w3-button w3-padding"
              >
                {/* <i className="fa fa-envelope fa-fw w3-margin-right" /> */}
                CONTACT
              </a>
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
              <div className="w3-row-padding w3-padding-16" id="about">
                <div className="w3-col m6">
                  <img
                    src={require("../../Assets/front1.jpg")}
                    alt="Me"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="w3-col m6">
                  <img
                    src={require("../../Assets/front1.jpg")}
                    alt="Me"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div
                className="w3-container w3-padding-large"
                style={{ marginBottom: 32 }}
              >
                <h4>
                  <b>About Me</b>
                </h4>
                <p>
                  Just me, myself and I, exploring the universe of unknownment.
                  I have a heart of love and an interest of lorem ipsum and
                  mauris neque quam blog. I want to share my world with you.
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed
                  vitae justo condimentum, porta lectus vitae, ultricies congue
                  gravida diam non fringilla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
