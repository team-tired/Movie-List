import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieDetail from './MovieDetail.js';
import QUERY from '../QUERY.js';
import movieApi from '../services/movie-api.js';

class MovieApp extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const main = dom.querySelector('main');
        dom.insertBefore(header.render(), main);

        const movieDetail = new MovieDetail();
        main.appendChild(movieDetail.render());

        const searchParams = window.location.search;
        const query = QUERY.parse(searchParams);
        const id = query.id;
        if(!id) {
            window.location = './';
        }

        movieApi.getMovie(id)
            .then(movieResult => {
                movieDetail.update({ movie: movieResult });
            })
            .catch(err => {
                (err);
            });

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