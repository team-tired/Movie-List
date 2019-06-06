import Component from '../Component.js';
import { updateFavorites, getUserFavoritesRef } from '../services/actions.js';
import Favorite from '../shared/Favorite.js';

class MovieDetail extends Component {
    render() {
        const dom = this.renderDOM();
        const container = dom.querySelector('.favorite-container');
        const movies = this.props.movies;
    
        const id = movies.id;
        const userMovieRef = getUserFavoritesRef(id);

        const favorite = new Favorite({
            isFavorite: false,
            onFavorite: (makeFavorite) => {
                updateFavorites(movies, makeFavorite, userMovieRef);
            }
        });
        container.appendChild(favorite.render());

        userMovieRef.on('value', snapshot => {
            const isFavorite = Boolean(snapshot.val());
            favorite.update({ isFavorite });
        });

        return dom;
    }

    renderTemplate() {
        const movie = this.props.movie;
        if(!movie) {
            return /*html*/ `
            <div></div>
            `; 
        }
        return /*html*/`
            <section>
            <div class="favorite-container"></div>
                <p>${movie.title}</p>
                <img src="http://image.tmdb.org/t/p/w200${movie.poster_path}">
                <p>${movie.overview}</p>
                <p>${movie.release_date}</p>
            </section>
        `;
    }
}
export default MovieDetail;