import Component from '../Component.js';

class Favorite extends Component {
    
    
    renderTemplate() {
        const isFavorite = this.props.isFavorite;
        const star = isFavorite ? '★' : '☆';
        return /*html*/`
            <button class="favorite-button ${isFavorite ? 'favorite' : ''}">${star}</button>
         `;
    }
}
export default Favorite;