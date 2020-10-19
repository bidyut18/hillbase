import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import Star from "./star";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
const key = process.env.API_KEY;
ReactDOM.render(<Star key={key} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
