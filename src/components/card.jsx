import React from "react";
const Card = (props) => {
  if (props.status) {
    return (
      <div className="card bg-light mb-3" style={{ maxWidth: "22rem" }}>
        <div className="card-header">Weather</div>
        <div className="card-body">
          <h5 className="card-title">Your location is {props.loc}</h5>
          <p className="card-text">
            Weather status is {props.status} and {props.description} <br />
            From {props.base} in {props.loc} 🍤 <br />
            Cordinates are {props.lat} lat and
            {props.long} long 📌
            <br />
            Temperature is {props.temp} &#8451; and feels like{" "}
            {props.feels_like} 🌡 &#8451; <br />
            Temp Max: {props.temp_max} &#8451; Min: {props.temp_min} &#8451;
            <br /> Visibility: {props.visibility} K.m and Humidity:{" "}
            {props.humidity} %
            <br /> Pressure: {props.pressure} mb
          </p>
        </div>
      </div>
    );
  } else
    return (
      <div className="card bg-light mb-3" style={{ maxWidth: "22rem" }}>
        <div className="card-header">Weather</div>
        <div className="card-body">
          <h5 className="card-title">
            Location ?{" "}
            <span role="img" aria-label="Happy">
              🤗
            </span>{" "}
          </h5>
          <p className="card-text">
            Enter your Infromation to get weather{" "}
            <span role="img" aria-label="cool">
              😎
            </span>
          </p>
        </div>
      </div>
    );
};

export default Card;
