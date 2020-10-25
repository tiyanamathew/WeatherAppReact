import React from "react";
import ReactDOM from "react-dom";
import WeekTwo from "./WeekTwo";

import "./App.css";

function HTML() {
  return (
    <div className="App">
      <WeekTwo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<HTML />, rootElement);
