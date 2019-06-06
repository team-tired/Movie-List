
export function updateFavorites(movies, makeFavorite, userMovieRef) {
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