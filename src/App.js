import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/home";
import About from "./pages/about";
import Predictor from "./pages/predictor";
import Education from "./pages/education.jsx";

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