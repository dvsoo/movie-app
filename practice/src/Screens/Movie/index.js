import React from 'react';
import PropTypes from 'prop-types';
import './Movie.scss';

const Movie = () => {
	return (
		<div className="MovieContainer">
			<div className="Movie__Column">
				<MovieImage />
			</div>
			<div className="Movie__Column">
				<h1 className="MovieTitle">The Lord of the Rings</h1>
				<p className="Movie__Genre">Actions Pantarge</p>
				<p className="Movie__Synopsis" />
			</div>
		</div>
	);
};

Movie.propTypes = {
	MovieImage: PropTypes.string.isRequired,
};

const MovieImage = () => {
	return (
		<div className="Movie__Poster">
			<img src="http://www.gstatic.com/tv/thumb/v22vodart/28828/p28828_v_v8_bg.jpg" alt="movie" />
		</div>
	);
};

export default Movie;
