import key from '../../configs.js';

//https://api.themoviedb.org/3/movie/420817?api_key=7b3c36453f97c3077a7a10fd62585119&language=en-US

const BASE_URL = `https://api.themoviedb.org/3`;

const preKey = `?api_key=`;

const DISCOVER_URL = `${BASE_URL}/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const movieApi = {
    getMovies(query) {
        if(query) {
            return fetch(`${BASE_URL}/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`).then(response => response.json());
        }
        return fetch(DISCOVER_URL).then(response => response.json());
    },
    getMovie(id) {
        const url = `${BASE_URL}/movie/${id}${preKey}${key}`;

        return fetch(url).then(response => response.json());
    }
};

export default movieApi;
