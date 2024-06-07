import "bootswatch/dist/solar/bootstrap.min.css";
import { Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Watch from './watch';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/watch" element={<Watch />}/>
      </Routes>
    </Router>
  );
}

export default App
