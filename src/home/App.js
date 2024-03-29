import Component from '../Component.js';
import Header from '../shared/Header.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'Welcome to Watchy Things' });
        const headerDOM = header.render();
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

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
export default App;