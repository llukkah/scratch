import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Iframes from "./iframe.js";
import Elements from "./elements.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/iframe" element={<Iframes />} />
      <Route path="elements" element={<Elements />} />
    </Routes>
  </Router>
);
reportWebVitals();
