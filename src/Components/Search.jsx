import { useState } from "react";
import { fetchMovies } from "../api/fetchMovies";
import ErrorAlert from "./ErrorAlert";
import MovieDetail from "./MovieDetail";

function MoviesPortal() {
    const [searchInputText, setSearchInputText] = useState('')
    const [enteredSearchText, setEnteredSearchText] = useState('')
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [buttonOn, setButtonOn] = useState('btn1');

    const onSearchTextEnter = (e) => {
        e.preventDefault();
        fetchMovies(searchInputText, setMovies, setError, () => setEnteredSearchText(searchInputText), buttonOn)
    };

    return (
        <>
            <div className="row">
                <div className="col-md-9">
                    <form onSubmit={onSearchTextEnter}>
                        <input
                            type="text" placeholder="Search" className="form-control"
                            value={searchInputText}
                            onChange={(e) => setSearchInputText(e.target.value)}
                        />
                    </form>
                </div>
                {/* Buttons for type for search */}
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group" className="col-md-3">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" onChange={(e) => setButtonOn('btn1')} defaultChecked="true"/>
                    <label class="btn btn-outline-primary" for="btnradio1">Movie</label>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" onChange={(e) => setButtonOn('btn2')}/>
                    <label class="btn btn-outline-primary" for="btnradio2">Series</label>
                </div>
            </div>

            <br/>
            {error && <ErrorAlert error={error} searchTerm={enteredSearchText}/>}
            {movies.length > 0 &&  <p className='text-light'>Showing {movies.length} Results for '{enteredSearchText}'</p>}
            {movies.map((movie) => (
                <MovieDetail key={movie.imdbID} movie={movie} />
            ))}
        </>
    );
}

export default MoviesPortal;