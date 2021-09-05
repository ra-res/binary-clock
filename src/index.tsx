import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

import BinaryClock from "./Components/BinaryClock";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title> Binary Clock </title>
    </Helmet>
    <BinaryClock />
  </React.StrictMode>,
  document.getElementById("root")
);
