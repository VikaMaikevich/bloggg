import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configerStore from "./store/store";
import "./index.scss";
import App from "../src/components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={configerStore}>
      <App />
    </Provider>
  </BrowserRouter>
);


