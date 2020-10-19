import React, { Component } from "react";
import Api from "./components/api";

import Navbar from "./components/navbar";
class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Starship Weather"
    };
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >

          <Api />
        </div>
      </div>
    );
  }
}

export default Star;
