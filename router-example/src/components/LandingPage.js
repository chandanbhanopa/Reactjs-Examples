import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Main.css'
import Login from './Login';
import Register from './Register';
import MyAccount from './MyAccount';

export default class LandingPage extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			isLoggedIn:false,
			guestUser:false
		}
	}

		

	render(){
		const isLoggedIn = this.state.isLoggedIn;
		var element;
		if(isLoggedIn) {
			element = <MyAccount />
		} else {
			element = <Login userStatus={this.state} />
		}
		return(
			<div className="landing-page">
				<h1>User Management</h1>
				<div className="wrapper">
					<Router>
					<div className="router-link">
						<Link to="/register">Register</Link>
						<Link to="/login">Login</Link>
					<Switch>
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
					</Switch>
					</div>
				</Router>
				</div>
			</div>
		);
	}
}