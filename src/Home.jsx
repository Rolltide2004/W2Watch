import 'bootstrap/dist/js/bootstrap.js';
import 'bootswatch/dist/solar/bootstrap.min.css';
import Header from './Components/Header';
import Search from './Components/Search';

export default function Home(){
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