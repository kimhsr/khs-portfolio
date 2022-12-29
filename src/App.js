import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Archiving from "./components/Archiving";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import Topbutton from "./components/Topbutton";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Footer />
      {/* <Topbutton /> */}
    </div>
  );
}

export default App;
