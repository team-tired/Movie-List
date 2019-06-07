import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';
import { auth, userFavoritesRef } from '../services/firebase.js';
import QUERY from '../QUERY.js';

class UserFavorites extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const movieList = new MovieList({ movies: [] });
        main.appendChild(movieList.render());

        const query = QUERY.parse(window.location.search);
        const uid = query.id ? query.id : auth.currentUser.uid;

        userFavoritesRef
            .child(uid)
            .on('value', snapshot => {
                const value = snapshot.val();
                const movies = value ? Object.values(value) : [];
                movieList.update({ movies });
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
export default UserFavorites;