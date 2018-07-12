import React, { Component } from 'react';

class UserList extends React.Component {
	constructor(props){
		super(props);
	
	}

	updateUserList() {

	}

	render(){
		const userList = this.props.userlist.map(
				user => {
					return <li key={user.id}>{user.name}: {}</li>
				}

			);
		
		console.log(this.props.userlist);
		return (
			<div>
				<ul>
					{userList}
				</ul>
			</div>
		);
	}
}

export default UserList