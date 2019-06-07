const config = {
    apiKey: 'AIzaSyCoEHEjb87b2VF8p9JVPFZ2zrNOKL5C_MY',
    authDomain: 'watchy-things.firebaseapp.com',
    databaseURL: 'https://watchy-things.firebaseio.com',
    projectId: 'watchy-things',
    storageBucket: '',
    messagingSenderId: '127456624729',
    appId: '1:127456624729:web:595d7370dda355d9'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
export const userFavoritesRef = db.ref('userFavorites');
export const movieFavoritesRef = db.ref('movieFavorites');
export const userRef = db.ref('users');