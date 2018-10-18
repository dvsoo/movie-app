import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
	// Render: componentWillMount() => render() => componentDidMount()
	// Update: componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() => componentDidUpdate( )

	///state를 이렇게 직접적으로 사용해서는 안된다. why? 모든 작업들이 작동하지 않으므로

	state = {};
	///이 state를

	///컴포넌트가 랜더된 뒤에 5초 후에 hello again으로 업데이트해라(랜더가 다시 일어난다)
	componentDidMount() {
		this._getMovies();
	}

	_getMovies = async () => {
		///callApi 가 실행 완료 될 때 까지, 그 다음 작업(movie)이 일어난다.
		const movies = await this._callApi();
		this.setState({
			movies,
		});
	};

	_callApi = () => {
		return (
			fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
				.then(response => response.json())
				.then(json => json.data.movies)
				// this.this.setState({
				//   movies: json.data.movies
				////CALLBACK HELL!)
				.catch(err => console.log(err))
		);
		///ajax를 끝내면 (성공이 아니라 작업완료) then을 실행하고,
		///오류가나면 오류를 콘솔에 찍어라
		///then function은 항상 1가지의 attribute만 준다. (object)
		///ReadableStream 바이트로 되어있다 => 제이슨으로 바꾸자
	};

	_renderMovies = () => {
		const movies = this.state.movies.map(movie => {
			console.log(movie);
			return (
				<Movie
					title={movie.title_english}
					poster={movie.medium_cover_image}
					key={movie.id}
					genres={movie.genres}
					synopsis={movie.synopsis}
				/>
			);
		});
		return movies;
	};

	render() {
		const { movies } = this.state;
		return (
			//this.state.movies data가 있냐? 있으면 함수실행, 없으면 로딩중 문구
			//_언더스코어: 리액트 기능(내 함수)
			<div className={movies ? 'App' : 'App--loading'}>
				{this.state.movies ? this._renderMovies() : 'Loading'}
			</div>
		);
	}
}

export default App;
