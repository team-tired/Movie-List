// import QUERY from '../QUERY.js';
import key from '../../configs.js';

const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const movieApi = {
    getMovies() {
        return fetch(URL).then(response => response.json());
    }
};

export default movieApi;