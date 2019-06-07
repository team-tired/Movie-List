import UserFavorites from './UserFavorites.js';
import { auth } from '../services/firebase.js';
import '../utils/check-auth.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const app = new UserFavorites();
    root.appendChild(app.render());
});