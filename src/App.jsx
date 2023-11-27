import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
