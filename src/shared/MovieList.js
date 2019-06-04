import Component from '../Component.js';
import MovieItem from './MovieItem.js';

class MovieList extends Component {
    render() {
        const list = this.renderDOM();

        const movieItem = new MovieItem();
        list.appendChild(movieItem.render());

        return list;
    }

    renderTemplate() {
        return /*html*/`
        <ul class="movie-list"></ul>
         `;
    }
}
export default MovieList;