import Component from '../Component.js';
import Favorite from './Favorite.js';

class MovieItem extends Component {
    render() {
        const dom = this.renderDOM();
        const container = dom.querySelector('.favorite-container');

        const favorite = new Favorite();
        container.appendChild(favorite.render());

        return dom;
    }

    renderTemplate() {
        const movies = this.props.movies;
        return /*html*/`
            <li class="movie-item" title="movie-title">
                <div class="favorite-container"></div>
                <img src="http://image.tmdb.org/t/p/w200${movies.poster_path}">
                <h2>${movies.title}</h2>
            </li>
        `;
    }
}
export default MovieItem;