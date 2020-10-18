import React, { Component } from "react";
import Api from "./components/api";

import Navbar from "./components/navbar";
class Star extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Starship Weather" };
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
        <Api />
      </div>
    );
  }
}

export default Star;
