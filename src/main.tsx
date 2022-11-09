import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import httpRequest from "../lib/init";
import "./index.css";

httpRequest.init("", {
  retry:1,
  abortable:true,
  changeLoadingStatus(loading) {
    console.log(loading);
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
