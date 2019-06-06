import Component from '../Component.js';
import { updateFavorites, getUserFavoritesRef } from '../services/actions.js';
import Favorite from '../shared/Favorite.js';
import UserMovieList from './UserMovieList.js';
import { movieFavoritesRef } from '../services/firebase.js';

class MovieDetail extends Component {
    render() {
        const dom = this.renderDOM();
        const container = dom.querySelector('.favorite-container');
        const movie = this.props.movie;

        if(movie) {
            const id = movie.id;
            const userMovieRef = getUserFavoritesRef(id);
    
            const favorite = new Favorite({
                isFavorite: false,
                onFavorite: (makeFavorite) => {
                    updateFavorites(movie, makeFavorite, userMovieRef);
                }
            });
            container.appendChild(favorite.render());
    
            userMovieRef.on('value', snapshot => {
                const isFavorite = Boolean(snapshot.val());
                favorite.update({ isFavorite });
            });
            
            const userMovieList = new UserMovieList({ users: [] });
            dom.appendChild(userMovieList.render());
    
            const movieUsersRef = movieFavoritesRef.child(movie.id);
    
            movieUsersRef.on('value', snapshot => {
                const value = snapshot.val();
                const users = value ? Object.values(value) : [];
                userMovieList.update({ users });
            });
        }

    
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
                <p>Movie Synopsis: ${movie.overview}</p>
                <p>Release Date: ${movie.release_date}</p>
                <h2>Other users who have "favorited" ${movie.title}:</h2>
            </section>
        `;
    }
}
export default MovieDetail;