import Component from '../Component.js';
class MovieDetail extends Component {
    renderTemplate() {
        const movies = this.props.movies;
        return /*html*/`
            <section>
                <p>${movies.title}</p>
                <img src="http://image.tmdb.org/t/p/w200${movies.poster_path}">
                <p>${movies.overview}</p>
                <p>${movies.release_date}</p>
            </section>
        `;
    }
}
export default MovieDetail;