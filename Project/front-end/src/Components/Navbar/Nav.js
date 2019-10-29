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

class Nav extends React.Component {
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
  // componentDidMount() {
  //   fetch("http://localhost:3030/Persons/read")
  //     .then(response => response.json())
  //     .then(Persons=> {
  //       this.setState({ Persons: Persons.results });
  //     });
  // }

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
                  <MDBNavLink to="#">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">Courses</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">Events</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              {/* {this.state.Persons.map(p => ( */}
              <MDBNavbarNav right>
                <MDBDropdown>
                  <MDBNavItem className="Image-holder">
                    <div>
                      <MDBDropdownToggle nav>
                        <img
                          className="Image-person"
                          src={require("../../Assets/person2.jpg")}
                        />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default">
                        <div>
                          <h5 className="Nav-Name">Name</h5>
                          <hr></hr>
                        </div>
                        <MDBDropdownItem>
                          <MDBNavLink to="/Profile">
                            <MDBBtn className="Nav-Text" color="light-green">Profile</MDBBtn>
                          </MDBNavLink>
                        </MDBDropdownItem>
                        <br/>
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
              {/* ))} */}
            </MDBCollapse>
          </MDBNavbar>

          <MDBView src={require("../../Assets/front1.jpg")}>
            <MDBMask
              overlay="green-light"
              className="flex-center flex-column text-white text-center"
            >
              <h1>Plantium</h1>
              <br />
              <h2>Plant Freedom</h2>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <h1>Social Media will be here</h1>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default Nav;
