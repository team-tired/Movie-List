import key from '../../configs.js';

const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const movieApi = {
    getMovies(query) {
        if(query) {
            return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`).then(response => response.json());
        }
        return fetch(URL).then(response => response.json());
    }
};

export default movieApi;