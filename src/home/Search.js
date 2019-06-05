import Component from '../Component.js';
import hashStorage from '../hash-storage.js';

class Search extends Component {

    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');
        const query = this.props.query || 'search';

        form.addEventListener('submit', event => {
            event.preventDefault();
            const search = input.value;
            if(search) {
                hashStorage.set({ [query]: search });
            } else {
                hashStorage.remove(query);
            }
        });

        function setInputFromHash() {
            const queryProps = hashStorage.get();
            input.value = queryProps[query] || '';
        }

        setInputFromHash();

        window.addEventListener('hashchange', () => {
            setInputFromHash();
        });

        return form;
    }
    renderTemplate() {
        return /*html*/`
        <form class="search-form">
            <input name="search" placeholder="search for movies">
            <button>Search</button>
        </form>
        `;
    }
}
export default Search;