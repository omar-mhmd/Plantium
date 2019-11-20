import React from "react";
import "./Nav.css";

import SocialPage from "../Social Media/Social.js";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBDropdown,
  MDBBtn
} from "mdbreact";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  componentDidMount() {
    console.log("heloooooooooo", this.props.user.user);
  }

  render() {
    return (
      <div className="body5">
        <header>
          <MDBNavbar
            color="green"
            fixed="top"
            dark
            expand="md"
            scrolling
            transparent
          >
            <MDBNavbarBrand></MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="/Homepage">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/Courses">Courses</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/Events">Events</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>

              <MDBNavbarNav right>
                <MDBDropdown>
                  <MDBNavItem className="Image-holder">
                    <div>
                      <MDBDropdownToggle nav>
                        <img
                          className="Image-person"
                          src={`http://localhost:3030/Profile_Images/${this.props.user.user.Image}`}
                        />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default">
                        <div>
                          <h5 className="Nav-Name">
                            {this.props.user.user.Username}
                          </h5>
                          <hr></hr>
                        </div>
                        <MDBDropdownItem>
                          <MDBNavLink to="/Profile">
                            <MDBBtn className="Nav-Text" color="light-green">
                              Profile
                            </MDBBtn>
                          </MDBNavLink>
                        </MDBDropdownItem>
                        <br />
                        <MDBDropdownItem>
                          <MDBBtn outline color="danger" onClick={this.logout}>
                            logout
                          </MDBBtn>
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </div>
                  </MDBNavItem>
                </MDBDropdown>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <MDBView src={require("../../Assets/front1.jpg")}>
            <MDBMask
              overlay="green-light"
              // className="flex-center flex-column text-white text-center"
            >
              <h1 className="Words">Plantium</h1>
              <br />
              <mark className="Words-2">Plant Freedom</mark>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <SocialPage {...this.props} />
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default Nav;
