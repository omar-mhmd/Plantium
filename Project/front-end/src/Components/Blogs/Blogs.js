import React from "react";
import "./Blogs.css";
import BlogComponentsPage from "../Comments/Comments.js";
import Popup from "reactjs-popup";

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
import Articles from "../Articles/Articles";

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
      modal4: false
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
      <div>
        <div className="blog-card">
          <div className="meta">
            <div className="photo" />
            <ul className="details">
              <li className="author">
                <a href="#">Plantium</a>
              </li>
              <li className="date">Aug. 24, 2015</li>
              <li className="tags">
                <ul>
                  <li>
                    <a href="#">Learn</a>
                  </li>
                  <li>
                    <a href="#">Planting</a>
                  </li>
                  <li>
                    <a href="#">Seeds</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Learning to Plant Seeds</h1>
            <h2>Opening a door to the future</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
            <button className="read-more" onClick={this.toggle(4)}>
              Read More
            </button>
            <MDBModal
              isOpen={this.state.modal4}
              toggle={this.toggle(4)}
              size="fluid"
            >
              <MDBModalHeader toggle={this.toggle(4)}>
                Learning to Plant Seeds
              </MDBModalHeader>
              <MDBModalBody>
                <Articles />
                <BlogComponentsPage {...this.props} />
              </MDBModalBody>
            </MDBModal>
          </div>
        </div>
        <div className="blog-card alt">
          <div className="meta">
            <div
              className="photo"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/564x/8e/34/f7/8e34f724c03da625a1e07b89dbf04e26.jpg)"
              }}
            />
            <ul className="details">
              <li className="author">
                <a href="#">Jane Doe</a>
              </li>
              <li className="date">July. 15, 2015</li>
              <li className="tags">
                <ul>
                  <li>
                    <a href="#">Tools</a>
                  </li>
                  <li>
                    <a href="#">Techniques</a>
                  </li>
                  <li>
                    <a href="#">Tips</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description">
            <h1>Planting Tools </h1>
            <h2>Get Your Hand Dirty</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogCards;
