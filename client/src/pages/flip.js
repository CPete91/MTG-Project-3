import React, { Component } from "react";
import FlipPage from "react-flip-page";
class Flip extends Component {
  render() {
    return (
      <div className="flip-container">
        <FlipPage
          className="flip-page"
          orientation={"horizontal"}
          height={"500"}
          width={"500"}
        >
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
