import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/student_files/opatterson/comw282/portfolio/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
