// Import necessary dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Render the app component inside the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/student_files/opatterson/comw282/portfolio/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
