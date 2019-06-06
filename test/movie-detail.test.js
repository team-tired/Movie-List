import MovieDetail from '../src/movie/MovieDetail.js';

const test = QUnit.test;
QUnit.module('movie detail');
test('to return data from API', assert => {
    //arrange
    const movie = {
        'title': 'Captain Marvel',
        'poster_path': '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
        'overview': "The story follows Carol Danvers as she becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
        'release_date': '2019-03-06'
    };
    const movieDetail = new MovieDetail({ movie });

    const expected = /*html*/ `
            <section>
                <p>${movie.title}</p>
                <img src="http://image.tmdb.org/t/p/w200${movie.poster_path}">
                <p>${movie.overview}</p>
                <p>${movie.release_date}</p>
            </section>
        `;
    //act
    const rendered = movieDetail.renderTemplate();
    //assert
    assert.deepEqual(rendered, expected);
});