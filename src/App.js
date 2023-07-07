import React from "react";
import "./index.css"
import { Route,  Routes } from "react-router-dom";
import About from "./routes/About"
import Contact from "./routes/Contact"
import Projects from "./routes/Projects"
import Home from "./routes/Home"

function App() {
  return (
    <>
    <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      
    </Routes>
    </>
  );
}

export default App;
