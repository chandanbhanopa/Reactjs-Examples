import React from 'react';

const InputField = (props)=>{
	return <input type="text" name={props.name} />
}

export default class Register extends React.Component {
	constructor(props){
		super(props);
		console.log(this.props);
	}
	render(){
		return(
			<div className="registration">
				<p><InputField name="firstName" /></p>
			</div>
		);
	}
}


