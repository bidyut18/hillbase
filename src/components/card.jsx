import React, { Component } from "react";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">Weather</div>
        <div className="card-body">
          <h5 className="card-title">Your location is {this.props.loc}</h5>
          <p className="card-text">
            From Cord is lon and lang Temperature is and feels like Temp Max:
            Min: Visibility: Humidity: Pressure: Sunrise: Sunset:
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
