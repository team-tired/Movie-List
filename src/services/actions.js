import { auth, userFavoritesRef, movieFavoritesRef } from './firebase.js';

export function getUserFavoritesRef(id) {
    const userMovieRef = userFavoritesRef
        .child(auth.currentUser.uid)
        .child(id);
    return userMovieRef;
}

export function getMovieFavoritesRef(id) {
    const userFavoritesRef = movieFavoritesRef
        .child(id)
        .child(auth.currentUser.uid);
    return userFavoritesRef;
}

export function updateFavorites(movies, makeFavorite) {
    const id = movies.id;
    const userMovieRef = getUserFavoritesRef(id);
    const userFavoritesRef = getMovieFavoritesRef(id);
    const currentUser = auth.currentUser;
            
    if(makeFavorite) {
        userMovieRef.set({
            id: movies.id,
            title: movies.title,
            poster_path: movies.poster_path
        });
        userFavoritesRef.set({
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
        });
    } else {
        userMovieRef.remove();
        userFavoritesRef.remove();
    }
}

