import QUERY from '../QUERY.js';
import key from '../../configs.js';

const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const movieApi = {
    getOneMovie(queryProps) {
        const query = QUERY.stringify(queryProps);
       
        // const url = `${URL}?${query}`;
        // console.log(url)

        // return fetch(`https://api.themoviedb.org/3/search/movie?${queryProps}api_key=${key}&language=en-US&page=1&include_adult=false`).then(response => response.json());
    }, 

    getMovies(query) {
        if(query) {
            return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`).then(response => response.json());
        }
        return fetch(URL).then(response => response.json());
    }
};

export default movieApi;