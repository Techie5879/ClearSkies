import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Navbar } from "./components";
import Home from "./pages/Home";
import About from "./pages/About";
import Predictor from "./pages/Predictor";
import Education from "./pages/Education"
// import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/predictor" element={<Predictor />}/>
          <Route path="/education" element={<Education />}/>
        </Routes>
      
    </div>
  );
}
export default App;