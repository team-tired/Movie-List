import Component from '../Component.js';
import UserMovieItem from './UserMovieItem.js';
class UserMovieList extends Component {
    render() {
        const dom = this.renderDOM();
        const users = this.props.users;
       

        users.forEach(user => {
            const userMovieItem = new UserMovieItem({ user });
            dom.appendChild(userMovieItem.render());
        });


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

