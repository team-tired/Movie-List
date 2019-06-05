import Component from '../Component.js';
import Favorite from './Favorite.js';
import { auth, userFavoritesRef } from '../services/firebase.js';

class MovieItem extends Component {
    render() {
        const dom = this.renderDOM();
        const container = dom.querySelector('.favorite-container');
        const movies = this.props.movies;
    
        const userMovieRef = userFavoritesRef
            .child(auth.currentUser.uid)
            .child(movies.id);

        const favorite = new Favorite({
            isFavorite: false,
            onFavorite: (makeFavorite) => {
                if(makeFavorite) {
                    userMovieRef.set({
                        id: movies.id,
                        title: movies.title,
                        poster_path: movies.poster_path
                    });
                } else {
                    userMovieRef.remove();
                }
                
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

{/* <img src="http://image.tmdb.org/t/p/w200${movies.poster_path}"></img> */}