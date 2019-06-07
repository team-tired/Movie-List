import Component from '../Component.js';

class UserMovieItem extends Component {
    renderTemplate() {
        const user = this.props.user;
        if(!user) {
            return `<div></div>`;
        }

        const avatar = user.photoURL || './assets/default-avatar.png';
        return /*html*/`
            <li>
                <span>
                    <img id="avatar" src="${avatar}">   
                    <a href="./favorites.html?id=${user.uid}"><p>${user.displayName}</p></a>
                </span>
            </li>
        `;
    }
}
export default UserMovieItem;