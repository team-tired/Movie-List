import Component from '../Component.js';
import Header from '../shared/Header.js';

class MovieApp extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const main = dom.querySelector('main');
        dom.insertBefore(header.render(), main);

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                <main>
            </div>
        `;
    }
}
export default MovieApp;