import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./navbar";
import { Mheader } from "./Mheader";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Mheader />
      <gen />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
