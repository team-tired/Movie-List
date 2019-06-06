import { auth, userFavoritesRef } from './firebase.js';

export function getUserFavoritesRef(id) {
    const userMovieRef = userFavoritesRef
        .child(auth.currentUser.uid)
        .child(id);
    return userMovieRef;
}

export function updateFavorites(movies, makeFavorite) {
    const id = movies.id;
    const userMovieRef = getUserFavoritesRef(id);
            
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
