import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Main.css'
import Login from './Login';
//import Register from './Register';
//import MyAccount from './MyAccount';
import Product from './products/Product'

export default class LandingPage extends React.Component {
	constructor(props){
		super(props);
		this.state= {}
	}

	render(){
		return(
			<div className="landing-page">
				<Product />
			</div>
		);
	}
}