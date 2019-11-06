import React, { Component } from "react";
import "./Social.css";

import Editor from "../Blog Editor/Editor.js";

class SocialPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
       
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
                <div className="w3-white">
                  <button
                    onclick="myFunction('Demo1')"
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                  >
                    <i class="fas fa-pencil-alt fa-fw w3-margin-right"></i>
                    Post a Blog
                  </button>
                  <div id="Demo1" className="w3-hide w3-container">
                    <p>Some text..</p>
                  </div>
                  <button
                    onclick="myFunction('Demo2')"
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                  >
                    <i class="fas fa-camera fa-fw w3-margin-right"></i>
                    Post an Image
                  </button>
                  <div id="Demo2" className="w3-hide w3-container">
                    <p>Some other text..</p>
                  </div>
                  <button
                    onclick="myFunction('Demo3')"
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                  >
                    <i class="fas fa-paperclip fa-fw w3-margin-right"></i> 
                    Post a Link
                  </button>
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
              {/* Alert Box */}

              {/* End Left Column */}
            </div>
            {/* Middle Column */}
            <div className="w3-col m7">
              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white"></div>
                </div>
              </div>
              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
                  src="/w3images/avatar2.png"
                  alt="Avatar"
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: 60 }}
                />
                <span className="w3-right w3-opacity">1 min</span>
                <h4>John Doe</h4>
                <br />
                <hr className="w3-clear" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                  <div className="w3-half">
                    <img
                      src="/w3images/lights.jpg"
                      style={{ width: "100%" }}
                      alt="Northern Lights"
                      className="w3-margin-bottom"
                    />
                  </div>
                  <div className="w3-half">
                    <img
                      src="/w3images/nature.jpg"
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
              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
                  src="/w3images/avatar5.png"
                  alt="Avatar"
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: 60 }}
                />
                <span className="w3-right w3-opacity">16 min</span>
                <h4>Jane Doe</h4>
                <br />
                <hr className="w3-clear" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
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
              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
                  src="/w3images/avatar6.png"
                  alt="Avatar"
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: 60 }}
                />
                <span className="w3-right w3-opacity">32 min</span>
                <h4>Angie Jane</h4>
                <br />
                <hr className="w3-clear" />
                <p>Have you seen this?</p>
                <img
                  src="/w3images/nature.jpg"
                  style={{ width: "100%" }}
                  className="w3-margin-bottom"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
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
            <div className="w3-col m2">
              <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container"></div>
              </div>
              <br />

              {/* End Right Column */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Page Container */}
        </div>
      </div>
    );
  }
}

export default SocialPage;
