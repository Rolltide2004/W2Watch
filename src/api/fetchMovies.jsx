export const fetchMovies = async (searchText, moviesCallback, errorCallback, finallyCallback, buttonOn) => {
    try {

        let response;
        if(buttonOn === 'btn1')
            response = await fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=b29f7958&type=movie`);
        if(buttonOn === 'btn2')
            response = await fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=b29f7958&type=series`);
        if(buttonOn === 'btn3')
            response = await fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=b29f7958&type=episode`);
        const data = await response.json();

        if (data.Response === 'True') {
            const movieDetailsPromises = data.Search.map((movie) => fetchMovieDetails(movie.imdbID, errorCallback));
            const movieDetails = await Promise.all(movieDetailsPromises);

            moviesCallback(movieDetails);
            errorCallback(null);
        } else {
            moviesCallback([]);
            errorCallback(data.Error);
        }
    } catch (err) {
        moviesCallback([]);
        errorCallback('An error occurred while fetching data.');
    } finally {
        finallyCallback()
    }
};

const fetchMovieDetails = async (id, errorCallback) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=b29f7958`);
        const data = await response.json();

        if (data.Response === 'True') {
            return data;
        } else {
            throw new Error(data.Error);
        }
    } catch (err) {
        errorCallback('An error occurred while fetching movie details.');
    }
};