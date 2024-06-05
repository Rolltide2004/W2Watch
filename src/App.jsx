import Header from './Components/Header';
import Search from './Components/Search';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
