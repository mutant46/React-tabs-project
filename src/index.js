import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <h1 className="text-center mt-10 py-8 font-black text-3xl tracking-wider">
      Our Menu{" "}
    </h1>{" "}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
