import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import BinaryClock from "./Components/BinaryClock";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BinaryClock />
  </React.StrictMode>,
  document.getElementById("root")
);
