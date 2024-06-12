import { useState } from "react";
import { fetchWatch } from "../api/fetchWatch";
import ErrorAlert from "./ErrorAlert";
import MovieDetail from "./MovieDetail";

function List(){

    let movieList = 'avengers';
//    let movieList = 'tt0848228';
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    fetchWatch(movieList, setMovies, setError, movieList);    

    return(
        <>
            <strong style={{fontSize: '200%'}}>Watch List</strong>
            {error && <ErrorAlert error={error} searchTerm={enteredSearchText}/>}
            {movies.map((movie) => (
                <MovieDetail key={movie.imdbID} movie={movie} />
            ))}
        </>
    );
}
export default List;