import Component from '../Component.js';
class MovieItem extends Component {
    

    renderTemplate() {
        return /*html*/`
            <li class="movie-item" title="movie-title">
                <img src="../../assets/default-avatar.png">
                <h2>Aladdin</h2>
            </li>
        `;
    }
}
export default MovieItem;

//title
//poster_path