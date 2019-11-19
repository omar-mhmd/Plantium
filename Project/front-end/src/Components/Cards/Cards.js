import React, { Component } from 'react';
import './Cards.css';

class EventCards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className="bg">
            <div className="wrapper">
              <div className="card">
                <input
                  type="checkbox"
                  id="card1"
                  className="more"
                  aria-hidden="true"
                />
                <div className="content">
                  <div className="front">
                    <div className="inner">
                      <h2 className="inner-text">Plantation in Beirut</h2>

                      <label
                        htmlFor="card1"
                        className="button"
                        aria-hidden="true"
                      >
                        Details
                      </label>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <div className="info">
                        <span>15</span>
                        <div className="icon">
                          <i className="fas fa-users" />
                          <span>people going</span>
                        </div>
                      </div>
                      <div className="info">
                        <span>44</span>
                        <div className="icon">
                          <i class="fas fa-seedling"></i>
                          <span>seeds</span>
                        </div>
                      </div>

                      <div className="description">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Vitae, accusamus.
                        </p>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Voluptates earum nostrum ipsam ullam, reiciendis
                          nam consectetur? Doloribus voluptate architecto
                          possimus perferendis tenetur nemo amet temporibus,
                          enim soluta nam, debitis.
                        </p>
                      </div>
                      <div className="location">Sanayeh Garden</div>

                      <label
                        htmlFor="card1"
                        className="button return"
                        aria-hidden="true"
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
 
export default EventCards ;