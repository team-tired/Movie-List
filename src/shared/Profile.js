import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class Profile extends Component {

    

    renderTemplate() {
        const user = this.props.user;
        if(!user) {
            return `<div></div>`;
        }

        const avatar = user.photoURL || './assets/default-avatar.png';
        return /*html*/`
            <div class="profile">
                <img src="${avatar}">
                <span>${user.displayName}</span>
                <button>Sign Out</button>
            </div>
            
        `;
    }
}
export default Profile;