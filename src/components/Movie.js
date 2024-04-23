import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, year, title, summary, poster, rating, genres }) { //사용하지 않는 props는 흐리게 표시됨
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                {/* <h3 class="movie__title" style={{backgroundColor: 'red'}}>{title} / {rating}</h3> */}
                <h3 className="movie__title" >{title} / {rating}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return <li className=" movie__genre" key={index}>{genre}</li>;
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(1,180)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;