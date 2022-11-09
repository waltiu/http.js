import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {httpInit} from "./lib";
import "./index.css";

httpInit({}, {
  retry:1,
  // abortable:true,
  changeLoadingStatus(loading) {
    console.log(loading);
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
