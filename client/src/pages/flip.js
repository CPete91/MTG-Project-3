import React, { Component } from "react";
import FlipPage from "react-flip-page";
class Flip extends Component {
  render() {
    return (
      <div className="flip-container">
        <FlipPage>
          <img
            className="flip-img"
            src={require("../assets/img/mgt-logo.png")}
          />
          <img
            className="flip-img"
            src={require("../assets/img/mgt-logo.png")}
          />
          <img
            className="flip-img"
            src={require("../assets/img/mgt-logo.png")}
          />
        </FlipPage>
      </div>
    );
  }
}

export default Flip;
