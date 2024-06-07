import Header from "./Components/Header";
import MovieDetail from "./Components/MovieDetail";


function Watch(){
    let movieList = 'Teen Titans';

    return(
      <div>
        <Header />
        <br/>
        <div className='container'>
            <strong style={{fontSize: '200%'}}>Watch List</strong>
            {movieList.length > 0 &&  <p className='text-light'>Showing Results for '{movieList}'</p>}
            <MovieDetail key={movieList.imdbID} movie={movieList} />
        </div>
      </div>
    );
}
export default Watch;