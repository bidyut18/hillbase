import React from "react";
import Card from "./card";
class Api extends React.Component {
  state = {
    input: "",
    status: "",
    description: "",
    loc: "",
    base: "",
    lat: "",
    long: "",
    temp: "",
    feels_like: "",
    temp_max: "",
    temp_min: "",
    visibility: "",
    humidity: "",
    pressure: "",
  };

  getData = () => {
    const key = `${process.env.API_KEY}`;
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=${key}`
    );
    xhr.responseType = "json";
    xhr.onload = () => {
      const data = xhr.response;
      console.log(data);
      const status = data.weather[0].main; //Status
      const description = data.weather[0].description; //description
      const loc = data.name; //Name
      const base = data.base; //Base
      const lat = data.coord.lat; //lattitude
      const long = data.coord.lon; //longitude
      const temp = Math.round(data.main.temp - 273); //Temperature
      const feels_like = Math.round(data.main.feels_like - 273); //Temperature like
      const temp_max = Math.round(data.main.temp_max - 273); //Temperature max
      const temp_min = Math.round(data.main.temp_min - 273); //Temperature min
      const visibility = Math.round(data.visibility / 1000); //Visibility
      const humidity = Math.round(data.main.humidity); //Humidity
      const pressure = Math.round(data.main.pressure); //Pressure
      this.setState({ status });
      this.setState({ description });
      this.setState({ loc });
      this.setState({ base });
      this.setState({ lat });
      this.setState({ long });
      this.setState({ temp }); //start here
      this.setState({ feels_like });
      this.setState({ temp_max });
      this.setState({ temp_min });
      this.setState({ visibility });
      this.setState({ humidity });
      this.setState({ pressure });
    };
    xhr.send();
  };
  handleInput = (e) => {
    const text = e.target.value;
    this.setState({ input: text });
  };
  handleSubmit = () => {
    alert("Location: " + this.state.input);
    this.getData();
  };
  render() {
    return (
      <div>
        <div className="btn-group m-4 p-1 pt-4 pr-2" role="group">
          <div className="container">
            <input
              className="starbutton border border-dark mb-1"
              type="text"
              placeholder="General Request"
              value={this.state.input}
              onChange={this.handleInput}
            />
            <button
              type="button"
              className="btn btn-secondary ml-4"
              style={{ borderRadius: 40 }}
              onClick={this.handleSubmit}
            >
              Get Weather
            </button>
          </div>
        </div>
        <Card
          status={this.state.status}
          description={this.state.description}
          loc={this.state.loc}
          base={this.state.base}
          lat={this.state.lat}
          long={this.state.long}
          temp={this.state.temp}
          feels_like={this.state.feels_like}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          visibility={this.state.visibility}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
        />
      </div>
    );
  }
}

export default Api;
