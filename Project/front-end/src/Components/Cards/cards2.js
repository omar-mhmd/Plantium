import React, { Component } from "react";
import "./Cards.css";

class Cards2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  handleChecked = () => {
    this.setState({
      checked: !this.state.checked
    });
  };
  render() {
    return (
      <div className="bg">
        <div className="wrapper">
          <div className="card">
            <input
              type="checkbox"
              id="card1"
              checked={this.state.checked}
              className="more"
              aria-hidden="true"
            />
            <div className="content">
              <div className="front">
                <div className="inner">
                  <h2 className="inner-text">Plantation in Tripoli</h2>

                  <label
                    className="button"
                    aria-hidden="true"
                    onClick={this.handleChecked}
                  >
                    Details
                  </label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="info">
                    <span>35</span>
                    <div className="icon">
                      <i className="fas fa-users" />
                      <span>people going</span>
                    </div>
                  </div>
                  <div className="info">
                    <span>64</span>
                    <div className="icon">
                      <i class="fas fa-seedling"></i>
                      <span>seeds</span>
                    </div>
                  </div>

                  <div className="description">
                    <p>
                      Hey there ! We'll be planting plants Tripoli !
                    </p>
                    <p>
                      You are required, to bring gloves but above all to bring your camera !
                      We'll be taking lots of images so look forward to it !!
                    </p>
                  </div>
                  <div className="location">Rue 200</div>

                  <label
                    htmlFor="card1"
                    className="button return"
                    aria-hidden="true"
                    onClick={this.handleChecked}
                  >
                    <i className="fas fa-arrow-left" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards2;
