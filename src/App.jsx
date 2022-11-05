import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./components/content/Content";
import "./assets/scss/index.scss";

const App = () => {
  return (
    <Router>
      <div className="App wrapper">
        <Content />
      </div>
    </Router>
  );
};

export default App;
