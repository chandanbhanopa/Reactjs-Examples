import React,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default class Login extends Component {
	constructor(props){
		super(props);
		this.state={
			
		}
	}

	handleSubmit(e){
		e.preventDefault();
	}
	render(){
		console.log(this.props.userStatus);
		return(
			<div className="login-page">
				<form onSubmit={this.handleSubmit.bind(this)} name="loginform" action="" method="POST">
				<p>
					Username : <input type="text" ref="username" />
				</p>
				<p>
					Password : <input type="password" ref="password" />
				</p>
				<p>
					<input type="submit" value="Login" />
					<input type="button" value="Reset" />
				</p>
				
				</form>
			</div>
		);
	}
}