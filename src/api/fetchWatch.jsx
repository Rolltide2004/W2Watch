export const fetchWatch = async (searchID, moviesCallback, errorCallback, finallyCallback) => {
    try {

        let response = await fetch(`http://www.omdbapi.com/?s=${searchID}&apikey=b29f7958`);
//        let response = await fetch(`http://www.omdbapi.com/?i=${searchID}&apikey=b29f7958`);
        const data = await response.json();

        if (data.Response === 'True') {
            const movieDetailsPromises = data.Search.map((movie) => fetchWatchDetails(movie.imdbID, errorCallback));
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

const fetchWatchDetails = async (id, errorCallback) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&plot=short&apikey=b29f7958`);
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