import "bootswatch/dist/solar/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Watch from './watch';
import About from "./about";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/watch" element={<Watch />}/>
          <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App
