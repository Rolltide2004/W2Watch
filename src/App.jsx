import 'bootstrap/dist/js/bootstrap.js';
import 'bootswatch/dist/solar/bootstrap.min.css';
import Header from './Components/Header';
import Search from './Components/Search';

function App() {
  return (
    <div>
      <Header />
      <br/>
      <div className='container'>
        <Search />
      </div>
    </div>
  )
}

export default App