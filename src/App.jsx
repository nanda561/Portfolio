import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Skills from "./Components/Skills";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        
        <Route path="/skills" element={<Skills />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
