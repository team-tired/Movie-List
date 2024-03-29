import Component from '../Component.js';
import Header from '../shared/Header.js';
import { auth } from '../services/firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

class AuthApp extends Component {

    render() { 
        const dom = this.renderDOM();

        const header = new Header({ title: 'Sign up for watchy things' });
        const main = dom.querySelector('main');
        dom.insertBefore(header.render(), main);

        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: './',
            credentialHelper: firebaseui.auth.CredentialHelper.NONE
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                <p>Get signed in for watchy things!</p>
                <div id="firebaseui-auth-container">
                    <!--firebaseui auth will go here-->
                </div>
                </main>
            </div>
        `;
    }
}
export default AuthApp;