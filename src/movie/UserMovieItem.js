import Component from '../Component.js';

class UserMovieItem extends Component {
    renderTemplate() {
        const user = this.props.user;
        return /*html*/`
            <li>
                <a href=""><h3>${user.displayName}</h3></a>
            </li>
        `;
    }
}
export default UserMovieItem;