import React, { useState } from "react";
import Card from "./card";
function Api() {
  const [input, setInput] = useState("");

  const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=6c1ea7147ea417eb5993c70ca8271883`
    );
    xhr.responseType = "json";
    xhr.onload = () => {
      const data = xhr.response;
      console.log(data);
      var loc = data.coord.lon;
      console.log(loc);
    };
    xhr.send();
  };
  const handleSubmit = () => {
    alert("Location: " + input);
    getData();
  };

  return (
    <div>
      <div className="btn-group m-4 p-1 pt-4" role="group">
        <input
          className="starbutton"
          type="text"
          placeholder="General Request"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-secondary ml-4"
          style={{ borderRadius: 40 }}
          onClick={handleSubmit}
        >
          Get Weather
        </button>
      </div>
      <Card loc={window.loc} />
    </div>
  );
}

export default Api;
