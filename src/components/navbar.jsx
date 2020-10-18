import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-secondary d-flex justify-content-center p-2">
        <h4>{this.props.name}</h4>
      </nav>
    );
  }
}

export default Navbar;
