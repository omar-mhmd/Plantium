import React, { Component } from "react";
import "./Events.css";
import Nav2 from "../../Components/Navbar/Nav2.js";
import EventCards from "../../Components/Cards/Cards.js";
import Cards2 from "../../Components/Cards/cards2.js"

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="body3">
        <Nav2 user={this.props.user} />
        <br></br>
        <h3 className="upcoming">Upcoming Events</h3>
       
        <div className="card-design">
          <br />
          <EventCards />
          <Cards2 />
        </div>
      </div>
    );
  }
}

export default Events;
