import '../utils/check-auth.js';
import MovieApp from '../movie/MovieApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const movieApp = new MovieApp();
    root.appendChild(movieApp.render());
});