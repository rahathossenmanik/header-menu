import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";

import Topbar from "./Topbar";

const Content = () => (
  <Container className="p-0 is-open">
    <Topbar />
    <Container fluid className="content mt-3">
      <Routes>
        <Route exact path="/" element={<h2>Hello</h2>} />
        <Route exact path="/mongo" element={<h2>Mongo DB</h2>} />
        <Route exact path="/express" element={<h2>Express JS</h2>} />
        <Route exact path="/react" element={<h2>React JS</h2>} />
        <Route exact path="/node" element={<h2>Node JS</h2>} />
      </Routes>
    </Container>
  </Container>
);

export default Content;
