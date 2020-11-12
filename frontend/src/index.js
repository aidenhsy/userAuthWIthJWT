import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import "./stylesheets/minty.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
