import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {
// 	static propTypes = {
// 		title: PropTypes.string.isRequired,
// 		poster: PropTypes.string.isRequired,
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<MoviePoster poster={this.props.poster} />
// 				<h1>{this.props.title}</h1>
// 			</div>
// 		);
// 	}
// }

///class 안에는 this를 가지고 있으나
///functional 컴포넌트에서는 this가 필요없다. 이미 props를 쓰니까

function Movie({ title, poster, genres, synopsis }) {
	console.log(typeof genres);
	return (
		<div className="Movie">
			<div className="Movie__Columns">
				<MoviePoster poster={poster} alt={title} />
			</div>
			<div className="Movie__Columns">
				<h1>{title}</h1>
				<div className="Movie__Genres">
					{typeof genres === 'object' ? (
						genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)
					) : (
						<MovieGenre genre="Undefined" />
					)}
				</div>
				<p className="Movie__Synopsis">{synopsis}</p>
			</div>
		</div>
	);
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	synopsis: PropTypes.string.isRequired,
};

// class MoviePoster extends Component {
// 	static propTypes = {
// 		poster: PropTypes.string.isRequired,
// 	};

// 	render() {
// 		return <img src={this.props.poster} alt="Movie Poster" />;
// 	}
// }

//그냥 return을 하기위해 존재하는 코인 |
//this mean, componentWillMount(), componentDidMount(), componentWillReceiveUpdate(), shouldComponentUpdate(), componentWillUpdate(), componentDidUpdate(), render()가 필요없다.
// one props one html
//state가 없다면, render기능과 라이프사이클이 없다.
function MoviePoster({ poster, alt }) {
	return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

function MovieGenre({ genre }) {
	return <span className="Movie__Genre">{genre} </span>;
}

MovieGenre.propTypes = {
	genre: PropTypes.string.isRequired,
};

MoviePoster.propTypes = {
	poster: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default Movie;
