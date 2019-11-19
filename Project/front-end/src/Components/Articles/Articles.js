import React, { Component } from 'react';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <img
                  src={require("../../Assets/5062-leaning.jpg")}
                  width="500px"
                />
                <br/>
                
                <h1>1.Get the timing right</h1>
                <p>
                  The goal with seed starting is to have your seedlings ready to
                  go outside when the weather is favorable. Start by looking at
                  the seed packet, which should tell you when to start seeds
                  inside.
                  <br />
                  Usually, it will say something like, "Plant inside six to
                  eight weeks before last frost." Some types of vegetables, such
                  as beans and squash, are best started outdoors.
                  <br />
                  There is little benefit to growing them indoors because they
                  germinate and grow quickly. Some flowers, such as poppies, are
                  best planted outdoors, too. These seeds are usually marked
                  "direct sow".
                </p>
                <hr />

                <h1>2. Find the right containers</h1>
                <p>
                  You can start seeds in almost any type of container, as long
                  as it's at least 2-3" deep and has some drainage holes. If you
                  are the DIY type, you might want to grow seedlings in yogurt
                  cups, milk cartons or paper cups.
                  <br />
                  I prefer the convenience of trays that are made especially for
                  seed starting.
                  <br />
                  It's easy to fill the trays, the watering system ensures
                  consistent moisture and I can move them easily.
                </p>
                <br />
            </div>
         );
    }
}
 
export default Articles;