import React from "react";
import "./HomePage.css";

import Nav from "../../Components/Navbar/Nav.js";

class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Nav user={this.props.user} />
    
  }
}

export default Home;
