import React from "react";
import "./Blogs.css";
import BlogComponentsPage from "../Comments/Comments.js";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBContainer,
  MDBCardHeader,
  MDBIcon,
  MDBMedia
} from "mdbreact";

/**
 * @module BlogCards
 * @extends Component
 */

class BlogCards extends React.Component {
  /**
   * @type {object}
   * @property {boolean}
   */
  constructor(props) {
    super(props);
    this.state = {
      modal9: false,
    };
  }

  /**
   * Handles the toggle popup
   * @function
   */
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  /**
   * Renders the component.
   * @function
   * @return {BlogCards} markup
   *
   */

  render() {
    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn onClick={this.toggle(14)}>Read More</MDBBtn>
            <MDBModal
              className="Modal2"
              isOpen={this.state.modal14}
              toggle={this.toggle(14)}
              centered
            >
              <MDBModalHeader toggle={this.toggle(14)}>
                MDBModal title
              </MDBModalHeader>
              <MDBModalBody className="Modal-body">
                <MDBContainer>
                  <MDBCardHeader className="border-0 font-weight-bold d-flex justify-content-between">
                    <p className="mr-4 mb-0">About the author</p>
                    <ul className="list-unstyled list-inline mb-0">
                      <li className="list-inline-item mr-3">
                        {" "}
                        {/*Add Profile link to user here*/}
                        <MDBIcon className="mr-2" icon="user" />
                        See profile
                      </li>
                    </ul>
                  </MDBCardHeader>
                  <MDBMedia className="p-4 bg-white">
                    <MDBMedia>
                      <img
                        className="card-img-100 d-flex z-depth-1 mr-3"
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                        alt=""
                      />
                    </MDBMedia>
                    <MDBMedia body>
                      <h5 className="font-weight-bold mt-0">Danny Newman</h5>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod consectetur accusamus velit nostrum et magnam.
                    </MDBMedia>
                  </MDBMedia>
                </MDBContainer>
                <br />
                <hr></hr>
                <MDBModalBody>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <br />
                  <hr></hr>
                </MDBModalBody>
                <BlogComponentsPage />
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle(14)}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default BlogCards;
