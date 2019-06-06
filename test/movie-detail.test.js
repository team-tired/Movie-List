import MovieDetail from '../src/movie/MovieDetail.js';

const test = QUnit.test;
QUnit.module('movie detail');
test('renders template from data', assert => {
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
                <p>Captain Marvel</p>
                <img src="http://image.tmdb.org/t/p/w200/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg">
                <p>The story follows Carol Danvers as she becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.</p>
                <p>2019-03-06</p>
            </section>
        `;
    //act
    const html = movieDetail.renderTemplate();
    //assert
    assert.htmlEqual(html, expected);
});

test('returns empty div if no data', assert => {
    //arrange
    const movie = null;
    const movieDetail = new MovieDetail({ movie });

    const expected = /*html*/ `
            <div></div>
        `;
    //act
    const html = movieDetail.renderTemplate();
    //assert
    assert.htmlEqual(html, expected);
});