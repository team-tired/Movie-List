import Component from '../Component.js';
import UserMovieItem from './UserMovieItem.js';
class UserMovieList extends Component {
    render() {
        const dom = this.renderDOM();

        const userMovieItem = new UserMovieItem();
        dom.appendChild(userMovieItem.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <ul id="user-movie-list">
        </ul>
        `;
    }
}
export default UserMovieList;