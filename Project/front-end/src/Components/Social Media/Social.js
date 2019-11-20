import React, { Component } from "react";
import "./Social.css";
import Popup from "reactjs-popup";

import Editor from "../Blog Editor/Editor.js";
import EventCards from "../../Components/Cards/Cards.js"

class SocialPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const body = new FormData();
    const { Image } = this.state;
    body.append("Image_names", Image);
    // body.append("Tokens", this.props.user.user.Tokens);
    // body.append("Persons_id", this.props.user.user.Persons_id);
    console.log(Image);
    fetch("http://localhost:3030/Posts_Images", {
      method: "post",

      body
    })
      .then(response => response.json())
      .then(data => {
        const { success, message } = data;
        console.log(message);
        if (success) {
          alert("You have successfully uploaded an Image");
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

  render() {
    const { Image } = this.state;
    return (
      <div className="Body4">
        {/* Page Container */}
        <div
          className="w3-container w3-content"
          style={{ maxWidth: 1400, marginTop: 80 }}
        >
          {/* The Grid */}
          <div className="w3-row">
            {/* Left Column */}
            <div className="w3-col m3">
              {/* Accordion */}
              <div className="w3-card w3-round">
                <div>
                  <Popup
                    trigger={
                      <button className="w3-button w3-block w3-theme-l1 w3-left-align">
                        <i class="fas fa-pencil-alt fa-fw w3-margin-right"></i>
                        Post a Blog
                      </button>
                    }
                    modal
                    position="right center"
                  >
                    <div>
                      <Editor {...this.props} />
                    </div>
                  </Popup>

                  <Popup
                    trigger={
                      <button
                        onclick="myFunction('Demo2')"
                        className="w3-button w3-block w3-theme-l1 w3-left-align"
                      >
                        <i class="fas fa-camera fa-fw w3-margin-right"></i>
                        Post an Image
                      </button>
                    }
                    modal
                    position="right center"
                  >
                    <div>
                      <input
                        type="file"
                        name="Image"
                        onChange={this.handleImageChange}
                      />
                      <br />
                      <button onClick={e => this.handleSubmit(e)}>
                        Submit
                      </button>
                    </div>
                  </Popup>

                  <div id="Demo3" className="w3-hide w3-container">
                    <div className="w3-row-padding">
                      <br />
                      <div className="w3-half">
                        <img
                          src="/w3images/lights.jpg"
                          style={{ width: "100%" }}
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src="/w3images/nature.jpg"
                          style={{ width: "100%" }}
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src="/w3images/mountains.jpg"
                          style={{ width: "100%" }}
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src="/w3images/forest.jpg"
                          style={{ width: "100%" }}
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src="/w3images/nature.jpg"
                          style={{ width: "100%" }}
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src="/w3images/snow.jpg"
                          style={{ width: "100%" }}
                          className="w3-margin-bottom"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              {/* Interests */}
              <div className="w3-card w3-round w3-white w3-hide-small"></div>
              <br />

              {/* End Left Column */}
            </div>

            {/* Middle Column */}
            <div className="w3-col m7">
              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round "></div>
                </div>
              </div>
              <div className="w3-container w3-card w3-round w3-margin">
                <br />
                <img
                  src={`http://localhost:3030/Profile_Images/${this.props.user.user.Image}`}
                  alt="Avatar"
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: 60 }}
                />
                <p className="w3-right w3-opacity">1 min</p>
                <h4>{this.props.user.user.Name}</h4>
                <br />
                <hr className="w3-clear" />
                <p className="text-content">
                  Omg ! I'm in love with my new photography skills. I took these
                  images not long ago and they seem very aesthetically pleasing.
                  I'm quite pleased of what I've achieved and what my lenses has
                  caught. It's truly a sight worth mentioning. Do you think this
                  is paradise on Earth ?
                </p>
                <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                  <div className="w3-half">
                    <img
                      src={require("../../Assets/background4.jpg")}
                      style={{ width: "100%" }}
                      alt="Northern Lights"
                      className="w3-margin-bottom"
                    />
                  </div>
                  <div className="w3-half">
                    <img
                      src={require("../../Assets/plant 2.jpg")}
                      style={{ width: "100%" }}
                      alt="Nature"
                      className="w3-margin-bottom"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w3-button w3-theme-d1 w3-margin-bottom"
                >
                  <i className="fa fa-thumbs-up" /> Like
                </button>
                <button
                  type="button"
                  className="w3-button w3-theme-d2 w3-margin-bottom"
                >
                  <i className="fa fa-comment" /> Comment
                </button>
              </div>

              <div className="w3-container w3-card  w3-round w3-margin">
                <br />
                <img
                  src={require("../../Assets/person.png")}
                  alt="Avatar"
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: 60 }}
                />
                <span className="w3-right w3-opacity">32 min</span>
                <h4>Angie Jane</h4>
                <br />
                <hr className="w3-clear" />
                <p className="text-content">Have you seen this?</p>
                <img
                  src={require("../../Assets/plant.jpg")}
                  style={{ width: "100%" }}
                  className="w3-margin-bottom"
                />

                <button
                  type="button"
                  className="w3-button w3-theme-d1 w3-margin-bottom"
                >
                  <i className="fa fa-thumbs-up" /> Like
                </button>
                <button
                  type="button"
                  className="w3-button w3-theme-d2 w3-margin-bottom"
                >
                  <i className="fa fa-comment" /> Comment
                </button>
              </div>
              {/* End Middle Column */}
            </div>
            {/* Right Column */}
      

            {/* End Grid */}
          </div>
          {/* End Page Container */}
        </div>
      </div>
    );
  }
}

export default SocialPage;
