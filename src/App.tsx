import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="myCV" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
