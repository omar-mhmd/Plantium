import React from "react";
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
 import "./Nav.css";

class Nav2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      Persons: []
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
      <div>
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
                <MDBNavItem active>
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
        </header>
      </div>
    );
  }
}

export default Nav2;
