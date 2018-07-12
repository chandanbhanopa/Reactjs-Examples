import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
//import HelloWorld from './HelloWorld';
//import Header from './Header';
import UserList from './UserList';

import Welcome from './Welcome';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			userData:[
				{ "id": "01", "name" : "Chandan", "email":"chandan@gmail.com"},
				{ "id": "02", "name" : "Sunil", "email":"sunil@gmail.com"},
				{ "id": "03", "name" : "Jitendra", "email":"tarunp@yahoo.com"}
			]
		}
	}
	render() {
	    return (
	      <div className="App">
	      	<UserList userlist={this.state.userData} />
	      </div>
	    );
  	}
}

export default App;
