import React from "react";
// import ReactDOM from "react-dom/client";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
}

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
