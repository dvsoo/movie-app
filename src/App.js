import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
	// Render: componentWillMount() => render() => componentDidMount()
	// Update: componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() => componentDidUpdate( )

	///state를 이렇게 직접적으로 사용해서는 안된다. why? 모든 작업들이 작동하지 않으므로

	///이 state를
	state = {};

	///컴포넌트가 랜더된 뒤에 5초 후에 hello again으로 업데이트해라(랜더가 다시 일어난다)
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				movies: [
					{
						title: 'herryPoter',
						poster: 'https://i.ytimg.com/vi/Gnp4OX-WIRo/maxresdefault.jpg',
					},
					{
						title: 'OldBoy',
						poster: 'Star Wars',
					},
					{
						title: 'Matrix',
						poster:
							'https://lh3.googleusercontent.com/TQp6Lb2rArWLcWaUkXyBfecjm8DWrk00rbpU_Z5h3Xe6RNC2Oc3QfHCTi96tud31urnYUeK027Ft',
					},
					{
						title: 'StarWars',
						poster:
							'https://lh3.googleusercontent.com/TQp6Lb2rArWLcWaUkXyBfecjm8DWrk00rbpU_Z5h3Xe6RNC2Oc3QfHCTi96tud31urnYUeK027Ft',
					},
					{
						title: 'Transpotting',
						poster:
							'https://lh3.googleusercontent.com/TQp6Lb2rArWLcWaUkXyBfecjm8DWrk00rbpU_Z5h3Xe6RNC2Oc3QfHCTi96tud31urnYUeK027Ft',
					},
				],
			});
		}, 5000);
	}

	render() {
		console.log('Did render');
		return (
			<div className="App">
				{this.state.movies.map((movie, index) => {
					return <Movie title={movie.title} poster={movie.poster} key={index} />;
				})}
			</div>
		);
	}
}

export default App;
