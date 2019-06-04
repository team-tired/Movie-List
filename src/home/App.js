import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/movieList.js';
import movieApi from '../services/movie-api.js';
import Search from './Search.js';
import hashStorage from '../hash-storage.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'Welcome to Watchy Things' });
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);
        
        const search = new Search({ query: 'movie' });
        main.appendChild(search.render());

        const movieList = new MovieList({ movies: [] });
        main.appendChild(movieList.render());

        function loadMovies() {

            const queryProps = hashStorage.get();
            movieApi.getMovies(queryProps.movie)
                .then(response => {
                    const movies = response.results;
                    movieList.update({ movies });
                })
                .catch(err => {
                    console.log(err);
                });

        }

        loadMovies();

        window.addEventListener('hashchange', () => {
            loadMovies();
        });

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