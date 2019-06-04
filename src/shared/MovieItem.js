import Component from '../Component.js';
class MovieItem extends Component {


    renderTemplate() {
        const movies = this.props.movies;
        return /*html*/`
            <li class="movie-item" title="movie-title">
                <img src="http://image.tmdb.org/t/p/w200${movies.poster_path}">
                <h2>${movies.title}</h2>
            </li>
        `;
    }
}
export default MovieItem;