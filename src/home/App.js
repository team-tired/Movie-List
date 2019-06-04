import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/movieList.js';
import movieApi from '../services/movie-api.js';
import Search from './Search.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'Welcome to Watchy Things' });
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);
        
        const search = new Search();
        main.appendChild(search.render());

        const movieList = new MovieList({ movies: [] });
        main.appendChild(movieList.render());

        function loadMovies() {
            movieApi.getMovies()
                .then(response => {
                    const movies = response.results;
                    movieList.update({ movies });
                })
                .catch(err => {
                    console.log(err);
                });

        }

        loadMovies();

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}
export default App;