import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <About />
    </div>
  );
}

export default App;
