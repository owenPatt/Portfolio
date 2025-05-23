import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  console.log("here");
  const [darkMode, setDarkMode] = useState(true);

  const handleSetDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    // Main container
    <div className={`page ${darkMode ? "" : "page_light-mode"}`}>
      {/* Navigation */}
      <Nav darkMode={darkMode} changeTheme={handleSetDarkMode}></Nav>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
