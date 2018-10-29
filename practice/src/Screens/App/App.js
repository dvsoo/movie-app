import React, { Component } from 'react';
import Movie from '../Movie/index';
import './App.scss';

class App extends Component {
	state = {
		isLoading: false,
	};
	componentDidMount() {
		this.setState({
			isLoading: true,
		});
	}
	render() {
		return (
			<div className="App">
				<Movie />
				<Movie />
				<Movie />
			</div>
		);
	}
}

export default App;
