import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieDetail from './MovieDetail.js';

class MovieApp extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const main = dom.querySelector('main');
        dom.insertBefore(header.render(), main);

        const movies = this.props.movies;
        const movieDetail = new MovieDetail({ movies: movies });
        main.appendChild(movieDetail.render());

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                <main>
            </div>
        `;
    }
}
export default MovieApp;