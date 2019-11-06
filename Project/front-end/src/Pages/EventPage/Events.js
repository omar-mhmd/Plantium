import React, { Component } from 'react';
import "./Events.css";
import Nav2 from "../../Components/Navbar/Nav2.js"

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className="body3">
            <Nav2 user={this.props.user} />
            <br></br>
            <div className="calendar-container">
              <iframe
                className="google-events"
                src="https://calendar.google.com/calendar/b/3/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FBeirut&amp;src=cGxhbnRpdW1pbmNAZ21haWwuY29t&amp;src=YXIubGIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%230B8043&amp;color=%234285F4&amp;showTz=1&amp;showPrint=0&amp;showTabs=0&amp;showNav=1&amp;showTitle=0&amp;mode=MONTH"
                frameborder="0"
                scrolling="
                no"
              ></iframe>
              <div></div>
            </div>
          </div>
        );
    }
}
 
export default Events;