import { useState } from "react";
import Header from "./header/header.jsx";
import Body from "./body/body.jsx";
import "./header/header.css";
import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <Header />
        <Body />
      </section>
    </>
  );
}

export default App;
