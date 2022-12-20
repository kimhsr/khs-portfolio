import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Archiving from "./components/Archiving";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <About />
      <Skills />
      <Archiving />
      <Projects />
    </div>
  );
}

export default App;
