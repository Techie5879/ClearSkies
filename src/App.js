import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/home";
import About from "./pages/about";
import Predictor from "./pages/predictor";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

        <Route path="/predictor" element={<Predictor/>} />
      </Routes>
    </Router>
  );
}
export default App;