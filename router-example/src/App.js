import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/* Header.js : Navigation code here*/
//import Header from './Header';
import LandingPage from './components/LandingPage'


class App extends Component {
	render() {
		return (
			<div className="App">
				<LandingPage />
			</div>
		);
	}
}

export default App;
