import React, { Component } from "react";
import "./Courses.css";
import Nav2 from "../../Components/Navbar/Nav2.js";
import BlogCards from "../../Components/Blogs/Blogs.js";

import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div className="background">
        <Nav2 user={this.props.user} />

        <div className="Second-Overlay">
          <div className="blogs">
            <BlogCards />
            <BlogCards />
            <BlogCards />
            <BlogCards />
            <BlogCards />
            <BlogCards />
            <BlogCards />
            <BlogCards />
            <BlogCards />
          </div>
        </div>
      </div>
    );
  }
}

export default Course;
