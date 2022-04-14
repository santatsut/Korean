import './App.css';
import React from "react";  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./nav.js";
import About from "./about.js";
import Study from "./study.js";
import Login from "./Login.js"
import ShowAll from "./showAll.js";

function App() {
  return (
    <Router>
    <div className="App">
      <h1 className="title">Korean Alphabet
      <Nav />
        <Routes>
        <Route exact path="" element={<About />} />
        <Route exact path="/study" element={<Study />} />
        <Route exact path="/logIn" element={<Login />} />
        <Route exact path="/ListOfCharacters" element={<ShowAll />} />
        </Routes>
      </h1>
    </div>
    </Router>
  );
}

export default App;
