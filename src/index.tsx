import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";

ReactDOM.render(
  <React.StrictMode>
    <App1 />
    <hr />
    <App2 />
    <hr />
    <App3 />
  </React.StrictMode>,
  document.getElementById("root")
);
