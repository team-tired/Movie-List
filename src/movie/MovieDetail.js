import Component from '../Component.js';
class MovieDetail extends Component {
    renderTemplate() {
        const movie = this.props.movie;
        return /*html*/`
            <section>
                <p>${movie.title}</p>
                <img src="http://image.tmdb.org/t/p/w200${movie.poster_path}">
                <p>${movie.overview}</p>
                <p>${movie.release_date}</p>
            </section>
        `;
    }
}
export default MovieDetail;